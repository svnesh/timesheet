import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link,useNavigate} from "react-router-dom"
import { useContext } from "react";
import { Context } from '../../context/context';

const Sidebar = () => {

    const { userinfo, dispatch } = useContext(Context);
    const navigate = useNavigate();
    const handleLogout = () =>{
        dispatch({type: "LOGOUT"});
        navigate("/");
    }

  return (
    <div className='sidebar'>
        <div className='top'>
            <span className='logo'>LOGO</span>
        </div>
        <hr/>
        <div className='center'>
            <p className="title">MAIN</p>
            <ul>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>
                        <Link className="link" to="/Home">Dashboard</Link>
                    </span>
                </li>
                <li>
                    <SummarizeIcon className="icon"/>
                    <span>
                    <Link className="link" to="/report">Report</Link>
                    </span>
                </li>
                <li>
                    <SettingsIcon className="icon"/>
                    <span>Settings</span>
                </li>
            </ul>
            <p className="title">USER</p>
            <ul>
                <li>
                    <AccountBoxIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="icon"/>
                    <span onClick={handleLogout}>Logout</span>
                </li>
            </ul>
        </div>
        <div className='bottom'>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar