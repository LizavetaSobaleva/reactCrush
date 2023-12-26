import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../router/routes";
import { AuthContext } from "../../context";
import NoMatch from "../../pages/NoMatch";
import MyLoader from "./loader/MyLoader";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)

  if (isLoading) {
    return <MyLoader />
  }

  return (
    isAuth
      ?
      <Routes>
      {privateRoutes.map(route => 
        <Route element={route.element} path={route.path} key={route.path} exact={route.exact}/>
      )}
      <Route path="/*" element={<Navigate to="/posts" replace/>}/>
    </Routes>
    :
    <Routes>
    {publicRoutes.map(route => 
      <Route element={route.element} path={route.path} key={route.path} exact={route.exact}/>
    )}
    <Route path="/*" element={<Navigate to="/login" replace/>}/>
  </Routes>

  );
};

export default AppRouter;
