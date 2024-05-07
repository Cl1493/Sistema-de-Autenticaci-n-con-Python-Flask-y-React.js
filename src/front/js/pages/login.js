import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useHistory } from "react-router";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const { email, setEmail } = useState("");
	const { password, setPassword } = useState("");
	const history = useHistory();

	console.log("This is your token", store.token);

	const handleSubmit = () => {
		actions.login(email, password);
	};

	if (store.token && store.token != "" && store.token!= undefined) history.push("/");

	return (
		<div className="text-center mt-5">
			<h1>Log in</h1>
				
				{(store.token && store.token != "" && store.token!= undefined) ? (
					"You are logged with this token" + store.token
				) : ( 
				<form>
					<label>
						Email:
						<input type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
					</label>
					<label>
						Password:
						<input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
					</label>
					<button onClick={handleSubmit}> Submit </button>

					
				</form>
				)}
		</div>
	);
};
