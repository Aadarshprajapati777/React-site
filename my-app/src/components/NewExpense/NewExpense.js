import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log('in new expense')
        props.onAddExpense(expenseData);
        isEditing(false)
    }

    const[isEditing,setIsEditing]=useState(false);

    const addEditingHandler=()=>{
       setIsEditing(true)
    }

    const cancelEditingHandler=()=>{
        setIsEditing(false);
    }
    return(
        <div className='new-expense'>
           { ! isEditing && < button onClick={addEditingHandler}> Add a new Expense </button>}
             {isEditing && <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler}  onCancel={cancelEditingHandler} /> }
        </div>
        
    )
}
export default NewExpense;