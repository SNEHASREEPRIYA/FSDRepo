import { useState } from "react";
import Login from "./Login Page";
import RegisterPage from "./registerPage";

function SwitchTabs() {
    const [isLogin, setTab] = useState(true);
    const loginTab = () => {
        setTab(true);
    }
    const registerTab = () => {
        setTab(false);
    }
    return (<div>
        <div style={{marginTop:50}}>
            <center>
            <button onClick={loginTab} style={{height:40, width:164, fontSize:20,color:"blue", border:"2px solid black", borderLeft:"0.5px solid black"}}><strong>Login</strong></button>
            <button onClick={registerTab} style={{height:40, width:164, fontSize:20,color:"blue",  border:"2px solid black",borderLeft:"none"}}><strong>Register</strong></button>
            </center>
            {
                isLogin ?
                <div><br/> <Login/> </div>
                :
                <div><br/> <RegisterPage/></div>
            }
        </div>
        </div>
    )
}
export default SwitchTabs;