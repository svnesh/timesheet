import "./single.scss"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import { navigate,useLocation, useNavigate } from "react-router-dom"
import { useContext,useState,useEffect } from "react"
import { Context } from "../../context/context"
import axios from "axios"

const Single = () => {
  
  const baseurl = "https://svignesh.pythonanywhere.com/";
  const { userinfo } = useContext(Context);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [job, setJob] = useState({})
  const [status, setStatus] = useState("");
  const [comment, setComment] = useState("");

  const re = /\s[\w\s]+$/g;
  const config = {
    headers:{
        "Authorization": 'Token ' + userinfo.accessToken
        }
    }

  useEffect(() => {
    
    const getJob = async () => {
        const res = await axios.get(baseurl + "api/track/" + path + "/", config);
        //console.log(res.data)
        setJob(res.data);
        setStatus(res.data.status);
    };
    getJob()
  }, [path])

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await axios.put(baseurl + "api/track/" + path + "/", {
        id:path,
        status:status,
        comment:comment
    }, config)
    .then(response =>{
        //console.log(response);
        navigate('/home');
      })
  }

  return (
    <div className="single">
        <Sidebar />
        <div className="singlecontainer">
            <Navbar />
            <div className="trackerdata">
                <table className="tracksingletable">
                    <thead>
                        <tr className="headrow">
                            <th>Column</th>
                            <th>Info</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        <tr className="bodyrow">
                            <td><span>Client name:</span></td>
                            <td>{job?.client}</td>
                        </tr>
                        <tr className="bodyrow">
                            <td>Project name:</td>
                            <td>{job?.project}</td>
                        </tr>
                        <tr className="bodyrow">
                            <td>Job name:</td>
                            <td>{job.job?.jobname}</td>
                        </tr>
                        <tr className="bodyrow">
                            <td>Status:</td>
                            <td>{job?.status}</td>
                        </tr>
                        <tr className="bodyrow">
                            <td>Start date:</td>
                            <td>{new Date(job?.startdatetime).toLocaleString()}</td>
                        </tr>
                        <tr className="bodyrow">
                            <td>Recent update date:</td>
                            <td>{new Date(job?.updateddatetime).toLocaleString()}</td>
                        </tr>
                        <tr className="bodyrow">
                            <td>Existing Comment:</td>
                            <td>{job.comment ? job.comment.map((comt) =>(
                                <p key={comt?.id}>
                                    <p className="cmtdate">{comt?.commenttext.split(re)[0]}</p>
                                    <p className="cmttext">{comt?.commenttext.match(re)}</p>
                                </p>
                            )) : <p>Comment is empty</p>}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="updatesection">
                <h5>Update fields</h5>
                <div className="statusdropdown">
                    <span className="statustitle">Job Status: </span>
                    <select name="job_status" onChange={(e)=> setStatus(e.target.value)} value={[status]} className="status" multiple>
                        <option value="New">New</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Hold">Hold</option>
                        <option value="QA">QA</option>
                        <option value="Completed">Completed</option>
                        <option value="Query">Query</option>
                    </select>
                </div>
                <div className="updatecomment">
                    <span className="statustitle">Comment: </span>
                    <textarea className="commentarea" onChange={(e)=> setComment(e.target.value)}></textarea>
                </div>
                <div className="submitbtn" onClick={(e) => handleSubmit(e)}>Submit</div>
            </div>
            
        </div>
    </div>
  )
}

export default Single