import './CommentWrrpare.css';


function CommentWrraper(props) {
   return (
       <div className='cont-wrap'>
           <div className='wrap'>{props.children}</div>
       </div>
       
   )
}
export default CommentWrraper