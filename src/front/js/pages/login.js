import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useHistory } from "react-router";
import { Link, useNavigate } from 'react-router-dom';
import getState from "../store/flux";

export const Login = () => {
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const navigate = useNavigate();
  
	const handleLogin = () => {
	  actions.getLogin(loginEmail, loginPassword);
	};
  
	const { store, actions } = useContext(Context);
	useEffect(() => {
	  actions.getLogin();
	}, []);

	return (
		<div className="text-center mt-5">
		<h1>Log in</h1>
  
		<form>
		  <div className="container">
			<div className="form-group">
			  <label htmlFor="exampleInputEmail1">Email</label>
			  <input
				value={store.email}
				onChange={(e) => setLoginEmail(e.target.value)}
				type="email"
				className="form-control"
				id="exampleInputEmail1"
				aria-describedby="emailHelp"
			  />
			</div>
			<div className="form-group">
			  <label htmlFor="exampleInputPassword1">Password</label>
			  <input
				value={store.password}
				onChange={(e) => setLoginPassword(e.target.value)}
				type="password"
				className="form-control"
				id="exampleInputPassword1"
			  />
			</div>
		  </div>
		</form>
  
		<button
		  onClick={() => {
			handleLogin();
			navigate("/private");
		  }}
		>
		  Login
		</button>
	  </div>
	);
  };