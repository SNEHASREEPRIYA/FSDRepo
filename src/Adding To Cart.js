import { useContext } from "react";
import { globalContext } from "./App";
import Price from "./Price";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

// Adding to cart
function AddToCart() {
    const {card} = useContext(globalContext);
    const {globalCount, globalPrice} = useContext(globalContext);

    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        navigate('/order-confirmation'   );
    };

    return (<div>
        <   Navigation/>
        <div style={{margin:'auto'}}>
        <h1 style={{margin:20}}>Cart</h1>
        </div>
        <div style={{display:'flex'}}>
            <div>
                
                {card.map((item, index) => (
                    <div key={index} style={{ backgroundColor:'white', boxShadow:'0px 4px 8px rgba(0,0,0,0.9)', margin:20, borderRadius:10, padding:50, paddingTop:20, paddingBottom:20, display:'flex',fontSize:20}}>
                        <img src={item.path} alt="pic" width={220} height={250} />
                        <div style={{marginLeft:20}}>
                            <h3>{item.title}</h3>
                                <Price p={item.price} q={item.quantity}/>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{width:700, height:250, backgroundColor:'white', boxShadow:'0px 4px 8px rgba(0,0,0,0.15)', margin:20, borderRadius:10, padding:50, paddingTop:20, paddingBottom:20}}>
                <h2>Price Details</h2>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <p style={{fontSize:20}}>Price : ({globalCount} items)</p>
                    <p style={{fontSize:20}}>Rs. {globalPrice}</p>
                </div>
                <hr/>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <p style={{fontSize:20}}>Total Amount</p>
                    <p style={{fontSize:20}}>Rs. {globalPrice}</p>
                </div>
                <br/>
                <button onClick={handlePlaceOrder} style={{width:170, height:'29', marginLeft:560,borderRadius:10, color:'darkgreen', backgroundColor:'white',border:"1.5px solid black",fontSize:22}}><strong>Place Order</strong></button>
            </div>
        </div>
    </div>);
}
export default AddToCart;
