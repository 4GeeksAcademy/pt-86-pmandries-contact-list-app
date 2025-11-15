import React, { useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useNavigate } from "react-router-dom";
import { addContact } from "../hooks/actions.js";

export const CreateContact = () => {
    const [contact, setContact] = useState({name: "", phone: "", email: "", address: ""})
    const {store, dispatch, addContact} = useGlobalReducer();
    const navigate = useNavigate();

    const handleCreateContact = async (e) => {
        e.preventDefault(); // prevents page reload

        if (!contact.name || !contact.phone || !contact.email || !contact.address) {
            alert("Please complete all fields");
            return;
        }
        await addContact(contact);
        console.log(contact);
        navigate("/list_contacts");
    }

    return (
        <div className="container bg-light mt-5 p-3 w-50 shadow p-3 mb-5 bg-white rounded">
			<div className = "text-center mt-3">
				<h3>Add a Contact</h3>
			</div>
			
            <div className = "mb-3">
				<label htmlFor = "name" className = "ms-2 mb-1">Name</label>
                <input 
					id = "name"
                    className = "form-control"
                    type = "text"
					placeholder = "Enter the full name here"
					onChange = {(e) => setContact({...contact, name: e.target.value})}
					value = {contact.name}
				/>
			</div>
            
            <div className = "mb-3">
				<label htmlFor = "phone" className = "ms-2 mb-1">Phone</label>
                <input 
                    id = "phone"
                    className = "form-control"
					type = "text"
					placeholder = "Enter the full phone number here"
					onChange = {(e) => setContact({...contact, phone: e.target.value})}
					value = {contact.phone}
				/>
			</div>

            <div className = "mb-3">
				<label htmlFor = "email" className = "ms-2 mb-1">Email</label>
                <input 
                    id = "email"
                    className = "form-control"
					type = "text"
					placeholder = "Enter the full email address here"
					onChange = {(e) => setContact({...contact, email: e.target.value})}
					value = {contact.email}
				/>
			</div>

            <div className = "mb-3">
				<label htmlFor = "address" className = "ms-2 mb-1">Address</label>
                <input 
                    id = "address"
                    className = "form-control"
					type = "text"
					placeholder = "Enter the full address here"
					onChange = {(e) => setContact({...contact, address: e.target.value})}
					value = {contact.address}
				/>
			</div>
            <button 
                className = "btn btn-primary m-3"
                onClick = {(e) => handleCreateContact(e)}
            >
                Add Contact
            </button>
            <Link to = "/">
                <button className = "btn btn-primary m-3">Return Home</button>
            </Link>
        </div>
    );
}; 