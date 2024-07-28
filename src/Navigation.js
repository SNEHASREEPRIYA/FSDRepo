import { useContext} from "react";
import { Link } from "react-router-dom";
import { globalContext } from "./App";

function Navigation() {
    const {globalCount} = useContext(globalContext);
    return (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', backgroundColor:"pink",color:"black",padding:'20px', cursor:'pointer', fontSize:20}}>
                <Link to="/" style={{textDecoration:'none'}}><strong>Home</strong></Link>
                <Link to="/products" style={{textDecoration:'none'}}><strong>Products</strong></Link>
                
                <Link to="/cart" style={{textDecoration:'none'}}><strong>cart({globalCount})</strong></Link>
                <Link to="/profile" style={{textDecoration:'none'}}><strong>profile</strong></Link>
        </div>
    )
}
export default Navigation;