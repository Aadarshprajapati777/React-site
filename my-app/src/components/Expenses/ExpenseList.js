import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'
import ExpensesFilter from "./ExpensesFilter";

function ExpenseList(props){

   const expenses = props.expenses;

   const[selectedYear,setSelectedYear]=useState('2020');

   const filterChangeHandler=(fileredyear)=>{
    setSelectedYear(fileredyear)
    console.log('clicked')
   }
    return(
        <div>
       
        <Card className="expenses" >
        <ExpensesFilter selected={selectedYear} onFilterChange={filterChangeHandler}/>

        {expenses.map((expense)=>(
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
        </Card>
        </div>
    );
}
export default ExpenseList;