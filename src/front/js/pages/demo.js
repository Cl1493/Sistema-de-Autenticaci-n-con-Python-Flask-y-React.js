import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="container">
		
		
		<h1 style={{display:'flex', justifyContent:'center'}}>Ya estás dentro =)</h1>
			<Link to="/">
				<button className="btn btn-primary">Ve a la principal</button>
			</Link>
		</div>
	);
};
