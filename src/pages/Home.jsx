import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState, useEffect } from "react";
export const Home = () => {

  const {store, dispatch, fetchAgenda} = useGlobalReducer();
  
	useEffect(() => {
		fetchAgenda()
		console.log(store.contacts, store.agenda)
	}, [])

	return (
		<div className="text-center mt-5">
			<h1>Welcome to Rigo CRM!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
		</div>
	);
}; 