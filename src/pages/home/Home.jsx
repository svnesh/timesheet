import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widgets from "../../components/widgets/Widgets"
import Tables from "../../components/table/Table"
import "./home.scss"
import { useContext,useEffect, useState } from "react"
import { Context } from "../../context/context"
import aixos from "axios"

const Home = () => {

  const baseurl = "https://svignesh.pythonanywhere.com/";
  const { userinfo } = useContext(Context);
  const [jobs, setJobs] = useState([]);
  const [jstatus, setjStatus] = useState({});

  useEffect(() =>{
    const fetchJobs = async ()=>{
      const res = await aixos.get(baseurl + "api/userdue/", {
        headers: {
          "Authorization": 'Token ' + userinfo.accessToken
        },
      })
      //console.log(res)
      setJobs(res.data) 
    }
    fetchJobs()
  }, [])

  useEffect(() =>{
    const fetchStatus = async ()=>{
      const res = await aixos.get(baseurl + "api/track/", {
        headers: {
          "Authorization": 'Token ' + userinfo.accessToken
        },
      })
      //console.log(res)
      setjStatus(res.data) 
    }
    fetchStatus()
  }, [])

  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="completedWeek"/>
          <Widgets type="completedToday" cfilecount={jstatus.empcomtoday}/>
          <Widgets type="pendingToday" pfilecount={jobs.length}/>
          <Widgets type="totalPending" tpfilecount={jstatus.overallpendingtoday}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Job Tracker</div>
          <Tables jobs={jobs}/>
        </div>
        
      </div>
    </div>
  )
}

export default Home