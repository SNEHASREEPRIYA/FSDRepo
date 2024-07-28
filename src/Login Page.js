import { useRef, useState, useEffect, useContext } from "react";
import { globalContext } from "./App";

function Login() {
    const {globalUserObject} = useContext(globalContext);
    const collegeIdRef = useRef(null);
    const passwordRef = useRef(null);
    const [loginMessage, setMessage] = useState('');
    const { setGlobalIsLogin} = useContext(globalContext);
    useEffect(() => {
        collegeIdRef.current.focus();
    });
    const formSubmit = (event) => {
        event.preventDefault();
        console.log("form Submitted");
        console.log(collegeIdRef.current.value);
        console.log(passwordRef.current.value);
        if(collegeIdRef.current.value !== '' && passwordRef.current.value !== '') {
            if(collegeIdRef.current.value === globalUserObject.collegeIdValue && passwordRef.current.value === globalUserObject.passwordValue) {
                setMessage("correct");
                console.log(loginMessage);
                setGlobalIsLogin(true);
                localStorage.setItem("name", "ReactJs")
                localStorage.setItem("branch", "AI")
            }
            else {
                setMessage("Incorrect");
            }
        }
        collegeIdRef.current.value = '';
        passwordRef.current.value = '';
    }
//     return(
//         <div style={{margin:'auto', width:500}}>
            
//             <div style={{ border:"1px solid black", padding:30, borderRadius:10}}>
//                 <h1>Login</h1>
//                 <p>Please provide your details to login</p>
//                 <div className="card" >
//                     <form onSubmit={formSubmit} style={{display:'flex', flexDirection:"column"}}>
//                         <label><h3>College ID</h3></label> 
//                         <input type="text" ref={collegeIdRef} placeholder= "College Id" style={{fontSize:20}}/> <br/>
//                         <label><h3>Password</h3></label> 
//                         <input type="password" ref={passwordRef} placeholder="Password" style={{fontSize:20}}/> <br/> <br/>
//                         <center><button type="submit" style={{width:100,float:'right', alignItems:'center', fontSize:20, backgroundColor:"black", color:"white", borderRadius:10}} >Login</button></center>
//                         <center><h3><strong>{loginMessage}</strong></h3></center>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Login;

return (
    <div style={{marginLeft:682,marginTop:-17,border:"2px solid black",padding:10,width:305,height:450,display:"flex",flexDirection:"column",backgroundColor:"beige"}}>
        <h1 style={{marginLeft:75}}><u>Login Page</u></h1>
        <h5 style={{fontSize:20,marginLeft:30}}>Provide your details to Login</h5>
        <form onSubmit={formSubmit} style={{fontSize:25,display:"flex",flexDirection:"column"}}>
            <label><b>College ID:</b></label>
            <input type="text" ref={collegeIdRef} style={{height:35,width:305,marginTop:15,border:"2px solid black"}} placeholder="enter college id"/>
            <br/>
            <label><b>Password :</b></label>
            <input type="password" ref={passwordRef} style={{height:35,width:305,marginTop:15,border:"2px solid black"}} placeholder="enter password"/>
            <br/>
            
            <button type="submit" style={{fontSize:20,height:35,width:95,marginLeft:110,marginTop:20,border:"2px solid black",color:"white",backgroundColor:"green"}}><strong>SUBMIT</strong></button>
            {/* <p style={{fontsize:30,marginLeft:67}}>{equal}</p> */}
        </form>
    </div>
)
}

export default Login;