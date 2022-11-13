import "./widgets.scss"
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';

const Widgets = ({ type,cfilecount,pfilecount,tpfilecount }) => {
  let data;

  const fileCount = 20;

  switch(type){
    case "completedWeek":
      data={
        title:"Completed this week",
        fileCount:20,
        imgicon:<TaskAltOutlinedIcon/>
      };
      break;
    case "completedToday":
      data={
        title:"Completed Today",
        fileCount:cfilecount,
        imgicon:<TaskAltOutlinedIcon/>
      };
      break;
    case "pendingToday":
      data={
        title:"Pending today",
        fileCount:pfilecount,
        imgicon:<PendingActionsOutlinedIcon/>
      };
      break;
    case "totalPending":
      data={
        title:"Total Pending",
        fileCount:tpfilecount,
        imgicon:<PendingActionsOutlinedIcon/>
      };
      break;
    default:
      break;        
  }

  return (
    <div className="widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">{data.fileCount}</span>
          <span className="link">See all </span>
        </div>
        <div className="right">
          <div className="icon positive">
            {data.imgicon}
          </div>
        </div>
    </div>
  )
}

export default Widgets