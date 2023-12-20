import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MyBlock from '../components/UI/block/MyBlock'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'
import MyLoader from '../components/UI/loader/MyLoader'
import CommentItem from '../components/Comment/CommentItem'


const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching( async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

  return (
    <>
        <MyBlock>
            {isLoading
                ? <MyLoader/>
                : <div>
                    <h2>{post.id}. {post.title}</h2>
                    <p>{post.body}</p>
                  </div>
            }
        </MyBlock>
        <MyBlock>
            {isComLoading
                ? <MyLoader/>
                : <div>
                    {comments.map((comm, i) => 
                        <CommentItem key={i} comment={comm}/> )}
                </div>
            }
        </MyBlock>
    </>
  )
}

export default PostIdPage