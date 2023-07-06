import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    return (
        <div className="dropdown">
            <button className="btn btn-lg dropdown-toggle dd_color" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Currency ($ Dollar)
            </button>
            <ul class="dropdown-menu">
                <li><button className="dropdown-item" type="button">$ Dollar</button></li>
                <li><button className="dropdown-item" type="button">£ Pound</button></li>
                <li><button className="dropdown-item" type="button">€ Euro</button></li>
                <li><button className="dropdown-item" type="button">₹ Ruppee</button></li>
            </ul>
        </div>
    );
}


export default Currency;

       /* <select className="custom-select" id="inputGroupSelect02">
                <option defaultValue value="$" name="Dollar">$ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
            </select>         */