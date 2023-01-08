import { useState } from "react";
import Card from "../UI/Card";
import AllExpenseList from "./AllExpenseList";
import './ExpenseList.css'
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";

function ExpenseList(props){

   const expenses = props.expenses;

   const[selectedYear,setSelectedYear]=useState('2020');

   const filterChangeHandler=(fileredyear)=>{
    setSelectedYear(fileredyear)
    console.log('clicked')
   }

   const filteredExpenses= expenses.filter((expense)=>{
    return expense.date.getFullYear().toString()===selectedYear;
   });



    return(
        <div>
       
        <Card className="expenses" >
        <ExpensesFilter selected={selectedYear} onFilterChange={filterChangeHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <AllExpenseList item={filteredExpenses}/>
        </Card>
        </div>
    );
}
export default ExpenseList;