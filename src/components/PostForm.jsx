import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MainButton from './UI/button/MainButton';

const PostForm = ({create, title}) => {
    
  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {...post, id: Date.now()}
    create(newPost)
    setPost({title: '', body: ''})
  };

  const isInputEmpty = !post.title.trim() || !post.body.trim();

  return (
    <div className='form'>
      <h1 style={{textAlign: 'center', fontWeight: '300'}}>{title}</h1>
        <MyInput
          type="text"
          placeholder="Title"
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
        />
        <MyInput 
          type="text" 
          placeholder="Text"
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
        />
        
        <MainButton onClick={addNewPost} disabled={isInputEmpty}>Create post</MainButton>
        </div>
  )
}

export default PostForm