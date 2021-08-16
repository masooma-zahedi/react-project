import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ToggleImages from "../pages/ToggleImages";
import ImagesPage from "../pages/ImagesPage";

 const MyRoutes = [
  { path: "/", component: () => <Home />, exact: true, protected:null},
  { path: "/login", component: () => <Login />, protected:"guest" },
  { path: "/signup", component: () => <SignUp />, protected:"guest" },
  { path: "/toggle", component: () => <ToggleImages /> , protected:"auth"},
  { path: "/images", component: () => <ImagesPage />, protected:"auth" }
]

export default MyRoutes;



 