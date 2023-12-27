import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import AccentButton from "../components/UI/accentButton/AccentButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import MyLoader from "../components/UI/loader/MyLoader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef()
  const observer = useRef()


  const [fetchPosts, isPostsLoading, postError] = useFetching( async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1)
  })

  useEffect(()=> {
    fetchPosts(limit, page)
  }, [page, limit])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  //получаем пост из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page)

  }

  return (
    <div className="App">
      <AccentButton onClick={() => setModal(true)}> 
        +
      </AccentButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} title="Create post" />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} limit={limit} setLimit={setLimit}/>

      {postError && 
        <h3 style={{ textAlign: "center", marginTop: '20px', color: 'darkred', }}>Error: {postError}</h3>
      }
      
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts" />
      <div ref={lastElement}/>

      {isPostsLoading &&
        <div className="center"> <MyLoader/> </div>
      }


      {/* <Pagination
        totalPages={totalPages} 
        page={page} 
        changePage={changePage}
      /> */}

    </div>
  );
}

export default Posts;
