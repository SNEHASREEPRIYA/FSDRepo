import {useEffect, useState} from "react";
import Cart from "./CartFetching";
import Navigation from "./Navigation";

function Datafetch(){
    const [data, setData] = useState([]);
 
    useEffect(() => {
        const fetchMyData = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            console.log(response.ok);
            const responseData = await response.json();
            setData(responseData);
            console.log(responseData);
        }
        fetchMyData();
    })
  
    return (
        <div>
            <Navigation/>
            <div style={{display:'flex', flexFlow:'row wrap'}}>
                    {data.map((dataItem,index) => <Cart id={dataItem.id} path={dataItem.image} title={dataItem.title} price={dataItem.price} descript={dataItem.description} category={dataItem.category} rating={dataItem.rating.rate} count={dataItem.rating.count}/>)}   
            </div>
        </div>
    );

}

export default Datafetch;