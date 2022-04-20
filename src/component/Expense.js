import ExpenseDate from './ExpenseDate';
import CommentImg from './CommentImg';
import CommentWrraper from '../UI/CommentWrraper'

function Expense(props) {
    return (
       
              <CommentWrraper>
           <div>
            <CommentImg img={props.img} />
            <div>
            </div> 
            <div>
            <div className='wrap-text'>
            {props.text} 
            <ExpenseDate  date={props.date}/>
            </div>
            </div>
            
            </div>

            
           
            

            </CommentWrraper>



    )
}
export default Expense