
import React from 'react';
// import "./../App.css';"


function Post(props){
    return(
      <>
      <div className='name'>
        <p>{props.title}</p>
        <p>{props.children}</p>
        

      </div>
      </>
    )
}



export default Post;
