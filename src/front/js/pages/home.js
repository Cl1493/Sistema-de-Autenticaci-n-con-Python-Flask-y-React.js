import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);



	return (
		<div className="text-center mt-5">
		
		  <div style={{display:'flex', justifyContent: 'space-around', width:'300px' }} className="container">
			<Link  to="/login">
			  <button>Inicia sesión</button>
			</Link>
			<br />
			<Link to="/register">
			  <button>Registrate</button>
			</Link>
		  </div>
		
	  </div>
	);
  };
