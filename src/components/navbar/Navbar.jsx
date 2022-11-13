import "./navbar.scss"
import LanguageIcon from '@mui/icons-material/Language';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useContext } from "react"
import { Context } from "../../context/context"

const Navbar = () => {

  const { userinfo } = useContext(Context);

  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="maintitle">
                Job Tracker
            </div>
            <div className="items">
                <div className="item">
                    <LanguageIcon className="navicon"/>
                    English
                </div>
                <div className="item">
                    <NotificationsActiveIcon className="navicon"/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <PersonOutlineOutlinedIcon className="navicon"/>
                    {userinfo.username}
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar