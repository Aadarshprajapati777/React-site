
import ExpenseItem from "./ExpenseItem";
import './AllExpenseList.css';

const AllExpenseList = prop =>{
if(prop.item.length===0){
    return (<h2 className="expenses-list__fallback"> NO EXPENSE FOUND</h2>) 
}

return(
    <ul className="expenses-list">
    {prop.item.map((expense)=>  (
        <ExpenseItem
          key ={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
      </ul>
)
    }
export default AllExpenseList;