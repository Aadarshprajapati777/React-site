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
        <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount} />
        <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount}/>
        <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount}/>
        <ExpenseItem title={expenses[3].title} date={expenses[3].date} amount={expenses[3].amount}/>
        </Card>
        </div>
    );
}
export default ExpenseList;