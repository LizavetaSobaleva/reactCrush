import React, { useEffect, useState } from "react";
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

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


  const [fetchPosts, isPostsLoading, postError] = useFetching( async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(()=> {
    fetchPosts(limit, page)
  }, [])

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
    fetchPosts(limit, page)
  }

  return (
    <div className="App">
      <AccentButton onClick={() => setModal(true)}> 
        +
      </AccentButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} title="Create post" />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />

      {postError && 
        <h3 style={{ textAlign: "center", marginTop: '20px', color: 'darkred', }}>Error: {postError}</h3>
      }

      {isPostsLoading
        ? <div className="center"> <MyLoader/> </div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts" />
      }


      <Pagination
        totalPages={totalPages} 
        page={page} 
        changePage={changePage}
      />

    </div>
  );
}

export default Posts;
