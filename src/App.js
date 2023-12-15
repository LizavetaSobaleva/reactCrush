import React, { useMemo, useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MainButton from "./components/UI/button/MainButton";
import {usePosts} from "./hooks/usePosts";

const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "React", body: "Blach blach" },
    { id: 3, title: "TypeScript", body: "blach blach blach" },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  };

  //получаем пост из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} title="Create post" />
      </MyModal>

      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts" />

      <MainButton style={{position: 'fixed', right: 30, bottom: 30, borderRadius: '50%', height: '4rem', width: '4rem'}} onClick={() => setModal(true)}>
        <span style={{fontSize: '2.5rem', fontWeight: "300" }}>+</span>
      </MainButton>

    </div>
  );
}

export default App;
