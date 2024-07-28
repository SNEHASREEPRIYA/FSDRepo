import Navigation from "./Navigation";

function Payment() {
    return (
        <div>
            <Navigation/>
            <div style={{marginLeft:700,marginTop:45,border:"2px solid black",padding:10,width:310,display:"flex",flexDirection:"column",backgroundColor:"beige"}}>
                
                <h1 style={{marginLeft:65,fontSize:50,marginTop:-5}}><u>Payment</u></h1>
                <h5 style={{fontSize:20,marginLeft:70,marginTop:-5}}>Provide your details</h5>
                <form style={{fontSize:25,display:"flex",flexDirection:"column"}}>
                        <label><b>Card Holder Name :</b></label>
                        <input type="text" style={{height:35,width:305,marginTop:15,border:"2px solid black"}} placeholder="enter card hlder name"/>
                        <br/>
                        <label><b>Card Number : </b></label>
                        <input type="text" style={{height:35,width:305,marginTop:15,border:"2px solid black"}} placeholder="enter card number"/>
                        <br/>
                        <label><b>CVV Number : </b></label>
                        <input  type="number"  style={{height:35,width:305,marginTop:15,border:"2px solid black"}} placeholder="enter CVV num"/>
                        <br/>
                        <label><b>Valid until : </b></label>
                        <input type="text" style={{height:35,width:305,marginTop:15,border:"2px solid black"}} placeholder="enter Date"/>
                        <br/>
                        <button style={{width:70,height:50,marginLeft:120}}><strong style={{fontSize:25}}>PAY</strong></button>
                </form> 
            </div>
        </div>
    )
}
export default Payment;