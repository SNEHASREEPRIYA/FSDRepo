import { useContext } from "react";
import { globalContext } from "./App";
import StarRating from "./StarRating";
import { useNavigate } from "react-router-dom";

function Cart({id, path, title, price, descript, category, rating, count}) {
    const {setData} = useContext(globalContext);
    const navigate = useNavigate();
    
    const viewProduct = () => {
        const obj = {
            id, path, title, price, descript, category, rating, count, quantity: 1
        };
        setData(obj);
        navigate('/product-reviews');
    }

    return (
        <div style={{padding:10,backgroundColor:"white",borderRadius:3,width:230,display:"flex",flexDirection:"column", border:'1px solid black', margin:20}}>
            <img src="wishlistSymbol.png" alt="wishlist" style={{marginLeft:200,height:25,width:25}}/>
            <center>
            <img src={path} width={100} height={100} alt = "product" style={{borderRadius:20}}></img>
            <h3 >{title} </h3>
            <span style={{fontWeight:"normal",fontSize:20}}><b>Category : </b>{category}</span>
            <p style={{fontSize:15}}>{descript}</p>
            </center>
            <div style={{display:"flex",flexFlow:"row wrap",marginLeft:30}}><p style={{fontSize:20,marginTop:-1}}>Rating :  </p><StarRating rating={rating} /></div>
            <h4 style={{marginTop:10,marginLeft:50}}>No of Reviews : {count}</h4>
            <h4 style={{marginTop:-10,marginLeft:50}}>Product Rating : {rating}</h4>
            <center><h4 style={{fontSize:20,marginTop:-5,marginLeft:-10}}>Cost : Rs.{price}</h4></center>
            <center><button onClick={viewProduct} style={{color:"darkgreen",backgroundColor:"white",borderColor:"darkgreen",fontSize:30,border:"2px solid darkgreen", height:45}}><strong>View Product</strong></button></center>
            <hr/>
        </div>
    )
}
export default Cart;
