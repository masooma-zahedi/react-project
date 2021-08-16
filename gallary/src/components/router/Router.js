import React, { useEffect, useState } from "react";
import { Switch, useLocation} from "react-router-dom";
import MyRoutes from "./MyRoutes";
import Header from "../pages/Header";
import firebase from "../config/firebase";
import AppContext from "../store/AppContext";
import AuthRoute from "../utils/routes/AuthRoute";
import GuestRoute from "../utils/routes/GuestRoute";
import Loading from "../utils/Hooks/Loading";
import NotPage from "../pages/NotPage";
import { AnimatePresence } from "framer-motion";
import AnimatedRoute from "../utils/routes/AnimatedRoute";

export default function MyRouter() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({});
    const [isLoding, setIsLoding] = useState(true)

      useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            setIsLoding(true)
            setUser(user)
            setIsLoggedIn(true);
            setIsLoding(false)
          } else{
            setUser({});
            setIsLoggedIn(false);
            setIsLoding(false)
          }
        });
      }, []);

      const location = useLocation()
      if(isLoding) return <Loading />


  return (
      <AppContext.Provider value={[isLoggedIn, user]}>
        <Header />
        <AnimatePresence exitBeforeEnter initial={false     }>

        <Switch key={location.pathname} location={location}>
          {MyRoutes.map((route, index) =>{

            if(route.protected === "guest"){
              return (
                <GuestRoute
                  key={index}
                  path={route.path}
                  // component={route.component}
                  exact={route.exact}
                >
                  <route.component />
                </GuestRoute>
              );
            } 

            if(route.protected === "auth"){
               return (
                <AuthRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                >
                  <route.component />
                </AuthRoute>
              );
            } 
              
              return(
                <AnimatedRoute
                key={index}
                path={route.path}
                exact={route.exact}
                >
                  <route.component />
                </AnimatedRoute>
                
              )
          } 
          )}
          <NotPage Path="*"/>
        </Switch>
        </AnimatePresence>
      </AppContext.Provider>
  );
}
