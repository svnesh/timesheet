import Home from "./pages/home/Home";
import Single from "./pages/single/Single"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/context";
import Report from "./pages/report/Report";

function App() {

  const {userinfo} = useContext(Context);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={userinfo ? <Home /> : <Login />}/>
        <Route path="/report" element={userinfo ? <Report /> : <Login />}/>
        <Route path="/register" element={userinfo ? <Login /> : <Register />}/>
        <Route path="/track">
          <Route path=":trackid" element={userinfo ? <Single /> : <Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
