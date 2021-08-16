import React, { useState } from 'react';
import {VscLoading} from "react-icons/vsc"
import { useHistory} from 'react-router-dom';
import firebase from "../config/firebase";

export default function Login() {
    const [isLoading, setIsLoading] = useState("");
    const [error, setError] = useState(false);
    const history = useHistory();
    // const [isLoaded, setIsLoaded] = useState(false)
  
    const handleLogin = (e) =>{
      setIsLoading(true)
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(e.target.elements.email.value, e.target.elements.password.value)
        .then(res=>{
          setError("")
          // setIsLoaded(true)
          console.log(res);
          history.replace("/")
          setIsLoading(false);
        }).catch(err=>{
          console.log(err.message);
          setError(err.message)
        })  
          
    }

    // if(isLoaded){
    //   return <Redirect to="/images" />;
    // }
    return (
      <>
        <div className=" position-relative" style={{ height: "100vh" }}>
          <div
            className="bg-success rounded position-absolute  w-25 p-3"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -70%)",
              backgroundImage:
                " linear-gradient(rgb(11, 112, 45), rgb(26, 235, 95))",
            }}
          >
            <p className="text-light">
              {error !== "" ? error : null}
            </p>
            <h4 className="text-light text-center">Login to Your Account</h4>
            <form onSubmit={handleLogin}>
              <div className="form-group my-4">
                <input className="form-control" id="email" type="email" name="email" placeholder="Email or UserName"/>
              </div>
              <div className="form-group my-4">
                <input className="form-control" type="password" name="password" placeholder="Password"/>
              </div>
              <button className="btn btn-primary form-control">
                {isLoading ? <VscLoading /> : "Login"}
              </button>
            </form>
          </div>
        </div>
      </>
    );
}
