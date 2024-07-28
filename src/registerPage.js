import { useState, useContext } from "react";
import { globalContext } from "./App";

function RegisterPage() {

    const [collegeIdValue, setCollegeId] = useState('');
    const [passwordValue, setPassword] = useState('');
    const [emailValue, setEmail] = useState('');
    const [mobileValue, setMobile] = useState('');
    const [branchValue, setBranch] = useState('');
    const [genderValue, setGender] = useState('');
    const [yearValue, setYear] = useState('');
    const [user, setUser] = useState({});
    const {globalUserObject, setGlobalUserObject} = useContext(globalContext);

    const getCollegeId = (event) => {
        setCollegeId(event.target.value);
    };

    const getPassword = (event) => {
        setPassword(event.target.value);
    };

    const getEmail = (event) => {
        setEmail(event.target.value);
    };

    const getMobile = (event) => {
        setMobile(event.target.value);
    };

    const getBranch = (event) => {
        setBranch(event.target.value);
    };

    const getGender = (event) => {
        setGender(event.target.value);
    };

    const getYear = (event) => {
        setYear(event.target.value);
    };
    
    const submitData = (event) => {
        event.preventDefault();
        
        const obj = {
            collegeIdValue, branchValue, passwordValue, emailValue, yearValue, genderValue,mobileValue
        }
        setUser(obj);
        setGlobalUserObject(obj);
        console.log(obj);
        console.log("Registration Successfull");
        console.log(user);
        console.log(globalUserObject);
        alert("Registration Successful!! Login to enter!");

    };

    return (
        <div style={{ margin: 'auto', width: 500 }}>
            {/* <div style={{ border: "1px solid black", padding: 30, paddingTop: 20, borderRadius: 10 }}>
                <h1>Register</h1>
                <p>Please provide your details to Register</p>
                <form style={{ display: 'flex', flexDirection: "column" }} onSubmit={submitData}>
                    <label><h3>College ID</h3></label>
                    <input type="text" onChange={getCollegeId} placeholder="College Id" style={{ fontSize: 17 }} /> <br />
                    <label><h3>Password</h3></label>
                    <input type="password" onChange={getPassword} placeholder="Password" style={{ fontSize: 17 }} /> <br />
                    <label><h3>Email address</h3></label>
                    <input type="email" onChange={getEmail} placeholder="Email address" style={{ fontSize: 17 }} /> <br />
                    <label><h3>Branch</h3></label>
                    <select style={{ fontSize: 17 }} value={branchValue} onChange={getBranch}>
                        <option value="">Select a branch</option>
                        <option value="AI&DS">AI&DS</option>
                        <option value="AI&ML">AI&ML</option>
                        <option value="CSE">CSE</option>
                        <option value="IT">IT</option>
                        <option value="EEE">EEE</option>
                        <option value="ECE">ECE</option>
                        <option value="CE">CE</option>
                        <option value="ME">ME</option>
                    </select> <br />
                    <label><h3>Year</h3></label>
                    <select style={{ fontSize: 17 }} onChange={getYear}>
                        <option value="">Select a year</option>
                        <option value="I">I</option>
                        <option value="II">II</option>
                        <option value="III">III</option>
                        <option value="IV">IV</option>
                    </select> <br />
                    <label><h3>Gender</h3></label>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="radio" name="gender" value="Male" checked={genderValue === "Male"} onChange={getGender} style={{ fontSize: 17, marginRight: 10 }} />
                        <label value="Male"><h4>Male</h4></label>
                        <pre>       </pre>
                        <input type="radio" name="gender" value="Female" checked={genderValue === "Female"} onChange={getGender} style={{ fontSize: 17, marginRight: 10 }} />
                        <label value="Female"><h4>Female</h4></label>
                        <pre>       </pre>
                        <input type="radio" name="gender" value="Other" checked={genderValue === "Other"} onChange={getGender} style={{ fontSize: 17, marginRight: 10 }} />
                        <label value="Other"><h4>Other</h4></label>
                    </div>
                    <center><button type="submit" style={{ width: 100, float: 'right', alignItems: 'center', fontSize: 20, backgroundColor: "black", color: "white", borderRadius: 10 }}>Register</button></center>
                </form>
            </div> */}
            <div style={{marginLeft:85,marginTop:-18,border:"2px solid black",padding:10,width:308,display:"flex",flexDirection:"column",backgroundColor:"beige"}}>
            
            <h1 style={{marginLeft:50}}><u>Register Page</u></h1>
            <h5 style={{fontSize:20,marginLeft:20}}>Provide your details to Register</h5>
            <form onSubmit={submitData} style={{fontSize:25,display:"flex",flexDirection:"column"}}>
                <label><b>College Mail-ID :</b></label>
                <input type="email" onChange={getEmail} style={{height:35,width:305,marginTop:15,border:"2px solid black"}} placeholder="enter mail id"/>
                <br/>
                <label><b>Password :</b></label>
                <input type="password" onChange={getPassword} style={{height:35,width:305,marginTop:15,border:"2px solid black"}} placeholder="enter password"/>
                <br/>
                <label><b>Mobile :</b></label>
                <input  type="text"  onChange={getMobile} style={{height:35,width:305,marginTop:15,border:"2px solid black"}} placeholder="enter Mobile num"/>
                <br/>
                <label><b>College ID :</b></label>
                <input type="text"  onChange={getCollegeId} style={{height:35,width:305,marginTop:15,border:"2px solid black"}} placeholder="enter college id"/>
                <br/>
                <label><b>Branch</b></label>
                <select id="branches" name="branches" onChange={getBranch} style={{height:35,border:"2px solid black",marginTop:15}} >
                <option value="choose branch" defaultValue={"choose branch"}>Choose branch</option>
                    <option value="CSE">CSE</option>
                    <option value="AI&DS">AI&DS</option>
                    <option value="AI&ML">AI&ML</option>
                    <option value="IT">IT</option>
                    <option value="CIVIL">CIVIL</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="MECH">MECH</option>
                </select> 
                <br/>
                <label><b>Choose a year :</b></label>
                <select id="year" name="year" onChange = {getYear} style={{height:35,border:"2px solid black",marginTop:15}}>
                    <option value="choose year" defaultValue={"choose year"}>Choose Year</option>
                    <option value="2023-27">2023-27</option>
                    <option value="2022-26">2022-26</option>
                    <option value="2021=25">2021-25</option>
                    <option value="2020-24">2020-24</option>  
                </select> 
                <br/>
                <div>
                <p style={{marginBottom:2}}>Gender : </p>
                <input type="radio" id="Male" name="gender" value="Male" onChange={getGender}/>
                <label value="Male">Male</label><br/>
                <input type="radio" id="Female" name="gender" value="Female" onChange={getGender}/>
                <label value="Female">Female</label><br/>
                <input type="radio" id="Others" name="gender" value="Others" onChange={getGender}/>
                <label value="Others">Others</label>
                </div>
                {/* <button type="submit" style={{height:35,width:75,marginLeft:110,marginTop:20,border:"2px solid black",color:"white",backgroundColor:"green"}} onClick={equality}><strong>SUBMIT</strong></button> */}
                <button type="submit" style={{fontSize:20,height:35,width:95,marginLeft:110,marginTop:20,border:"2px solid black",color:"white",backgroundColor:"green"}} ><strong>SUBMIT</strong></button>

                {/* <p style={{fontsize:30,marginLeft:120}}></p> */}
                
            </form>
        </div>
        </div>
    );
}

export default RegisterPage;
