import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState, useEffect } from "react";

export const Home = () => {

  const {store, dispatch, fetchAgenda} = useGlobalReducer();
  
	useEffect(() => {
		fetchAgenda()
	}, [])

	return (
		<div className="text-center mt-5">
			<h1>Welcome to Rigo CRM!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<h4>Rigo CRM is a one-stop app to take care of all of your CRUD!</h4>
			<div className = "mx-auto w-25 text-start">
			<h5>
				You can:
					<ul>
						<li>Create</li>
						<li>Read</li>
						<li>Update</li>
						<li>Delete</li>
					</ul>
				...to your hearts content! :)
			</h5>
			</div>
		</div>
	);
}; 