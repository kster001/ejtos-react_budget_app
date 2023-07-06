import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const setBudget = (newBudget) => {
        if (newBudget > 20000) {
            alert(`The budget (£${newBudget}) cannot exceed the limit of £20000`);
            return;
        } 
        console.log(newBudget, expenses);
        if(newBudget < totalExpenses) {
            alert(`You cannot reduce the budget value lower than the spending`);
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                step={10}
                style={{size: 10}}
                onChange={(event) => setBudget(event.target.value)}
                onKeyDown={(event) => setBudget(event.target.value)}>
            </input>
        </div>
    );
};
export default Budget;
