import "./report.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useContext,useState,useEffect } from "react"
import { Context } from "../../context/context"
import axios from "axios"


const Report = () => {

const baseurl = "https://svignesh.pythonanywhere.com/";
const { userinfo } = useContext(Context);
const [values, setValues] = useState([]);

useEffect(() =>{
    const fetchAllValues = async ()=>{
        const res = await axios.get(baseurl + "api/trackfilter/", {
        headers: {
            "Authorization": 'Token ' + userinfo.accessToken
        },
        })
        //console.log(res.data)
        setValues(res.data) 
    }
    fetchAllValues()
    }, [])
    
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'employee', headerName: 'Employee', width: 140 },
    { field: 'client', headerName: 'Client', width: 100 },
    { field: 'project', headerName: 'Project Name', width: 130 },
    { field: 'job', headerName: 'Job Name', width: 100 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'startdatetime', headerName: 'Start Date', type:'datetime', width: 100 },
    { field: 'updateddatetime', headerName: 'Update Date', type:'datetime', width: 100 },
    ];

    //console.log(values);
    const rows = values.map((value) =>
        ({
            id:value?.id,
            employee:value?.employee,
            client:value?.client,
            project:value?.project,
            job:value?.job?.jobname,
            status:value?.status,
            startdatetime:value?.startdatetime,
            updateddatetime:value?.updateddatetime
        })
    );
      


  return (
    <div className='reportdiv'>
        <Sidebar />
        <div className="reportcontainer">
            <Navbar />
        <div style={{ height: 500, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            components={{Toolbar: GridToolbar}}
            />
      </div>

        </div>
    </div>
  )
}

export default Report