function ExpenseDate (props) {
    return (
      
           <div>{props.date.toLocaleDateString()}</div>
       
        
    )
}
export default ExpenseDate