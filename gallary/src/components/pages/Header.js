import React, { useContext} from 'react';
import {NavLink, useHistory } from "react-router-dom";
import firebase  from '../config/firebase';
import AppContext from '../store/AppContext';

export default function Header() {
  const history = useHistory();
  const [isLoggedIn] = useContext(AppContext)

  function logout() {
    firebase.auth().signOut().then(()=>{
      history.replace("/login")
    }).catch(err=>{
      alert(err.respons.data)
    })
  }

    return (
      <>
      <nav className="bg-dark d-flex justify-content-between p-3">
        <ul className=" nav ">
            <span className="nav ">
          <li className="nav-item">
            <NavLink activeClassName="text-decoration-underline " exact className="nav-link text-light" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="text-decoration-underline " className="nav-link text-light" to="/toggle">ToggleImage</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="text-decoration-underline " className="nav-link text-light" to="/Images">Gallery</NavLink>
          </li>
            </span>
          </ul>
          <ul className=" nav">
            <li className="nav-item">
              {isLoggedIn ?
              <button onClick={logout} className="btn btn-dark text-white border-0" type="button">Logout</button> :
                <NavLink activeClassName="text-decoration-underline" className="nav-link text-light" to="/login">
                  Login
                </NavLink>
              }
          </li>
            <li className=" nav-item">
              {!isLoggedIn &&
                <NavLink activeClassName="text-decoration-underline" className="nav-link text-light" to="/signup">
                  Sign Up
                </NavLink>
              }
          </li>
        </ul>
      </nav>
      </>
    );
}
