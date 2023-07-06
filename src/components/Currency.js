import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './component.css';

const currencyList = {
    '$': 'Dollar',
    '£': 'Pound',
    '€': 'Euro',
    '₹': 'Ruppee'
}

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState('$ Dollar')

    const changeCurrency = (event) => {
        const item = event.target.innerHTML;
        //setCurrency(item);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: item.split(' ')[0],
        });
    }

    return (
        <div className="dropdown">
            <button className="btn btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Currency ({currency} {currencyList[currency]})
            </button>
            <ul class="dropdown-menu">
                {
                    Object.entries(currencyList).map(([key, value]) => (
                        <li><button className="dropdown-item" type="button" onClick={(e) => changeCurrency(e)}>{key} {value}</button></li>
                    ))
                }
      
            </ul>
        </div>
    );
}

export default Currency;


{/* <li><button className="dropdown-item" type="button" onClick={(e) => changeCurrency(e)}>$ Dollar</button></li>
<li><button className="dropdown-item" type="button" onClick={(e) => changeCurrency(e)}>£ Pound</button></li>
<li><button className="dropdown-item" type="button" onClick={(e) => changeCurrency(e)}>€ Euro</button></li>
<li><button className="dropdown-item" type="button" onClick={(e) => changeCurrency(e)}>₹ Ruppee</button></li> */}