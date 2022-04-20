function CommentImg(props) {
    return(
      
             <div className="cont-img" >    

            <img src={props.img.avatarUrl} alt="альтернативный текст" /> 

            <p>{props.img.name}</p>
              </div>
       
      
    )
}
export default CommentImg