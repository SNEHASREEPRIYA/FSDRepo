import { useRef , useState} from "react";

function Reviews() {

    const firstRef = useRef(null);
    const nameRef = useRef(null);
    const[reviews,setReviews] = useState('');
    const[names,setnames] = useState('');
    const[List,setList] = useState([]);
    const[list,setlist] = useState([]);

    const addReview = () => {
        console.log("Adding Review...");
        setList([...List,reviews]);
        setlist([...list,names]);
        setReviews('');
        setnames('');
        firstRef.current.value = '';
        nameRef.current.value = '';
    }

    const inputValueChange = (event) => {
        console.log("Input Value changed");
        event.preventDefault();
        console.log(firstRef.current.value);
        setReviews(firstRef.current.value);
    }

    const inputnameChange = (event) => {
        console.log("Input Value changed");
        event.preventDefault();
        console.log(nameRef.current.value);
        setnames(nameRef.current.value);
    }


    return (<div>
        <div className = "card" style = {{width : '1350px'}}>
                <h1>Reviews</h1>
                <div className = "cardbody">
                <input type = "text" placeholder = "Reviewer name" ref = {nameRef} onChange = {inputnameChange} style = {{ width : 800,height:35,marginRight :'15px',borderRadius:5}}></input>
                <input type = "text" placeholder = "Type a review" ref = {firstRef} onChange = {inputValueChange} style = {{ width : 800,height:35,marginRight :'15px',borderRadius:5}}></input>
                <button className="btn btn-dark" style = {{ height : '40px', backgroundColor:'white', borderRadius:10, color:'darkgreen',fontSize : 20}} onClick = {addReview}><strong>Add Review</strong></button>
                {/* <img src="user.jpeg" alt="user" width={10} height={10}></img> */}
                <ul>
                {   
                 
                 List.map((review, index) => (
                    <ul key={index} style={{fontSize:20}}>
                        <li>
                            <strong>Reviewer Name : {list[index]}</strong>
                            <br />
                            <strong>Review : {review}</strong>
                        </li>
                    </ul>
                ))
                
                }            
                </ul>
                </div>
            </div>
    </div>);
}
export default Reviews;


