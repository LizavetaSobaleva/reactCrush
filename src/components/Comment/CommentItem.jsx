import React from 'react'
import "./CommentItem.css"

const CommentItem = (props) => {
  return (
    <div className='comment'>
        <div className='header'>
            <div className='name'>
                <span className='icon'>
                    <strong>{props.comment.name[0].toUpperCase()}</strong>
                </span>
                <h4>{props.comment.name[0].toUpperCase() + props.comment.name.slice(1,8)}</h4>
            </div>
                <h5>{props.comment.email}</h5>
        </div>
        <div className='body'>
            <p>{props.comment.body}</p>
        </div>

    </div>
  )
}

export default CommentItem