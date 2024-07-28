import React, { useState, useContext, useEffect } from 'react';
import { globalContext } from './App';

function Price({ p , q}) {
    const {globalPrice, setGlobalPrice} = useContext(globalContext);
    const { globalCount, setGlobalCount } = useContext(globalContext);
    const [mrp, setMrp] = useState(p); 
    const [number, setNumber] = useState(q);
    const [totalPrice, setTotalPrice] = useState(p); 

    useEffect(() => {
        console.log("Mounted");
        console.log(number);
        console.log(number + 1);
        console.log(mrp * number);
        return () => {
            console.log("Unmounted");
        };
    }, [number,mrp]);

    useEffect(() => {
        console.log("Updated!!!");
        setTotalPrice(mrp * number);
        setMrp(p);
       
    }, [number, mrp,p]);

    const funcBtnClick = () => {
        console.log("Button Clicked");
        if (number > 1) {
            setNumber(prevNumber => {
                const newNumber = prevNumber - 1;
                setGlobalCount(globalCount - 1);
                setGlobalPrice(globalPrice - mrp);
                return newNumber;
            });
        }
    };

    const funcBtnClick1 = () => {
        console.log("Button Clicked");
        setNumber(prevNumber => {
            const newNumber = prevNumber + 1;
            setGlobalCount(globalCount + 1);
            setGlobalPrice(globalPrice + mrp);
            return newNumber;
        });
    };

    return (
        <div>
            <p style={{fontSize:22}}>Price: Rs. {mrp}</p>
            <p style={{fontSize:22}}>Total: Rs. {totalPrice}</p>
            <div>
                <div style={{ display: "flex", marginTop: -15 }}>
                    <button
                        className="btn btn-primary"
                        onClick={funcBtnClick}
                        style={{ margin: 20, padding: 5 , border:"1px solid black"}}>
                        <strong style={{fontSize:25}}>-</strong>
                    </button>
                    <h2>{number}</h2>
                    <button
                        className="btn btn-primary"
                        onClick={funcBtnClick1}
                        style={{ margin: 20, padding: 5 , border:"1px solid black"}}>
                        <strong style={{fontSize:25}}>+</strong>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Price;
