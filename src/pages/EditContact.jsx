import React, { useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useNavigate } from "react-router-dom";

export const EditContact = () => {
    const [contact, setContact] = useState({name: "", phone: "", email: "", address: ""})
    const {store, dispatch, addContact} = useGlobalReducer();
    const navigate = useNavigate();

    const handleEditContact = async (e) => {
        e.preventDefault(); // prevents page reload

        if (!contact.name || !contact.phone || !contact.email || !contact.address) {
            alert("Please complete all fields!");
            return;
        }
        await editContact(contact);
        navigate("/list_contacts");
    }

    return (
        <div className="container bg-light mt-5 p-3 w-50">
			<div className = "text-center mt-3">
				<h3>Edit Your Contact</h3>
			</div>
			
            <div className = "mb-3">
				<label htmlFor = "name" className = "ms-2 mb-1">Name</label>
                <input 
					id = "name"
                    className = "form-control"
                    type = "text"
					placeholder = "Current name displays here"
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
					placeholder = "Current phone displays here"
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
					placeholder = "Current email address displays here"
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
					placeholder = "Current address displays here"
					onChange = {(e) => setContact({...contact, address: e.target.value})}
					value = {contact.address}
				/>
			</div>
            <button 
                className = "btn btn-primary m-3"
                onClick = {(e) => handleEditContact(e)}
            >
                Update Contact
            </button>
            <Link to = "/">
                <button className = "btn btn-primary m-3">Back Home</button>
            </Link>
        </div>
    );
}; 