import React, { useContext, useEffect, useState } from 'react';
import { globalContext } from './App';
import Navigation from './Navigation';

function Profile() {
    const {globalIsLogin,} = useContext(globalContext);
    const { globalUserObject } = useContext(globalContext);
    const [showPassword, setShowPassword] = useState(false);
    const [eyeIcon, setEyeIcon] = useState(true);
    // const logoutaction = () => {setGlobalIsLogin(false);}

    useEffect(() => {
        const name = localStorage.getItem("name");
        const branch = localStorage.getItem("branch");
        console.log(name);
        console.log(branch);
    })

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        setEyeIcon(!eyeIcon);
    };

    return (
        <div>
            <div>
                <Navigation />
            </div>
            <div style={{ margin: 'auto', width: 400, border: '2px solid black', padding: 30, paddingTop: 20, borderRadius: 10, marginTop: 35 ,backgroundColor:"beige"}}>
                <center>
                    <h1 style={{fontSize:35,marginTop:-5}}>Profile</h1>
                </center>
                <p style={{fontSize:25,marginLeft:135}}><b>Your details</b></p>
                <strong style={{fontSize:20}}>
                    <p>College ID</p>
                </strong>
                <p style={{ border: '2px solid black', padding: 5 }}>{globalIsLogin? globalUserObject.collegeIdValue :"No Data"}</p>
                <strong style={{fontSize:20}}>
                    <p>Password</p>
                </strong>
                <p style={{ border: '2px solid black', padding: 5 }}>
                    {showPassword ? globalUserObject.passwordValue : '••••••••'} 
                    {eyeIcon ?
                        <button onClick={togglePasswordVisibility} style={{ float: 'right', backgroundColor: 'white', border: 'none' }}>
                            <img src='eyeOpen.png' alt="eye" width={20} height={17} />
                        </button>
                        :
                        <button onClick={togglePasswordVisibility} style={{ float: 'right', backgroundColor: 'white', border: 'none' }}>
                            <img src='eyeClose.png' alt="eye" width={20} height={17} />
                        </button>
                    }
                </p>
                <strong style={{fontSize:20}}>
                    <p>Email address</p>
                </strong>
                <p style={{ border: '2px solid black', padding: 5 }}>{globalIsLogin? globalUserObject.emailValue : "No Data"}</p>
                <strong style={{fontSize:20}}>
                    <p>Branch</p>
                </strong>
                <p style={{ border: '2px solid black', padding: 5 }}>{globalIsLogin? globalUserObject.branchValue :"No Data"}</p>
                <strong style={{fontSize:20}}>
                    <p>Year</p>
                </strong>
                <p style={{ border: '2px solid black', padding: 5 }}>{globalIsLogin? globalUserObject.yearValue :"No Data"}</p>
                <strong style={{fontSize:20}}>
                    <p>Gender</p>
                </strong>
                <p style={{ border: '2px solid black', padding: 5 }}>{globalIsLogin? globalUserObject.genderValue : "No Data"}</p>
            </div>
        </div>
    );
}

export default Profile;
