import { useState } from "react"
import "./table.scss"
import { Link, useNavigate } from "react-router-dom";

const Table = ({jobs}) => {

  const navigate = useNavigate();
  //const [status, setStatus] = useState([]);
  //const [comment, setComment] = useState("");
  const first = jobs[0]
  
  //function handleView(id){
    //window.location.replace(`track/${id}/`);
  //}

  return (
    <div className="outpage">
      <p className="subtitle">
        <span className="clientname">Client name: {first?.client.name};</span>
        <span className="projectname">Project name: {first?.project.name}</span>
        <span className="stagetxt">
          N: New; IP: In Progress; H: Hold; QA: Quality; C: Completed; QU: Query
        </span>
      </p>
      <div className='listtable'>
        <table className="table">
          <thead>
            <tr className="tr">
              <th>Job Name</th>
              <th>Job Status</th>
              <th>Due Date</th>
              <th>Start Date</th>
              <th>Updated Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) =>(
              <tr key={job.id}>
              <td>
                <span className="tblBody">{job.job.jobname}</span>
              </td>
              <td>
                <select name="job_status" value={[job.status]} className="status" multiple>
                  <option value="New">N</option>
                  <option value="In Progress">IP</option>
                  <option value="Hold">H</option>
                  <option value="QA">QA</option>
                  <option value="Completed">C</option>
                  <option value="Query">QU</option>
                </select>
              </td>
              
              <td>
                <span className="tblBody">{new Date(job.job.duedate).toLocaleDateString()}</span>
              </td>
              <td>
                <span className="tblBody">{new Date(job.startdatetime).toLocaleString()}</span>
              </td>
              <td>
                <span className="tblBody">{new Date(job.updateddatetime).toLocaleString()}</span>
              </td>
              <td>
                <div className="cellaction">
                  <Link className="viewbtn" to={`/track/${job.id}`}>                  
                    Update
                  </Link>
                </div>
              </td>
            </tr>
            ))}
          
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table