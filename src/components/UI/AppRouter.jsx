import React from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "../../pages/Posts"
import About from "../../pages/About"
import NoMatch from "../../pages/NoMatch"
import PostIdPage from "../../pages/PostIdPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/posts" element={<Posts />} />
      <Route exact path="/posts/:id" element={<PostIdPage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default AppRouter;
