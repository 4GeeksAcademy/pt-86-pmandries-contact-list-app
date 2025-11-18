import React, { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";

export const EditContact = () => {
    const {store, dispatch, fetchContacts, editContact} = useGlobalReducer();
    const navigate = useNavigate();
    const { theId } = useParams();

    const [currentContactInfo, setCurrentContactInfo] = useState({name: "", phone: "", email: "", address: ""})
    const [newContactInfo, setNewContactInfo] = useState({name: "", phone: "", email: "", address: ""})

    useEffect(() => {
        fetchContacts();
    }, []);

    useEffect(() => {
        let currentContact = store.contacts.filter((contact) => contact.id === parseInt(theId));

    if (currentContact.length === 1) {
            setCurrentContactInfo(currentContact[0]);
            setNewContactInfo(currentContact[0]);
        }
    }, [store.contacts]);

    // useEffect(() => {
    //     const singleContact = store.contacts.find(contact => contact.id === parseInt(theId));
    //     if (singleContact) {
    //       setContact(singleContact)
    //     } else {
    //       fetchContacts()
    //       .then((foundContacts) => {
    //         const foundContact = foundContacts.find(contact => contact.id === parseInt(theId));
    //         return (foundContact)
    //       })
    //       .then((foundContact) => {
    //         setContact(foundContact);
    //       })
    //     }
    // }, [])
    
    const handleEditContact = async (e) => {
        e.preventDefault(); // prevents page reload

        if (!newContactInfo.name || !newContactInfo.phone || !newContactInfo.email || !newContactInfo.address) {
            alert("Please complete all fields!");
            return;
        }
        await editContact(newContactInfo);
        navigate("/list_contacts");
    };

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
                    value = {newContactInfo.name}
					onChange = {(e) => setNewContactInfo({...newContactInfo, name: e.target.value})}
				/>
			</div>
            
            <div className = "mb-3">
				<label htmlFor = "phone" className = "ms-2 mb-1">Phone</label>
                <input 
                    id = "phone"
                    className = "form-control"
					type = "text"
                    value = {newContactInfo.phone}
					onChange = {(e) => setNewContactInfo({...newContactInfo, phone: e.target.value})}
					
				/>
			</div>

            <div className = "mb-3">
				<label htmlFor = "email" className = "ms-2 mb-1">Email</label>
                <input
                    id = "email"
                    className = "form-control"
					type = "text"
                    value = {newContactInfo.email}
					onChange = {(e) => setNewContactInfo({...newContactInfo, email: e.target.value})}
				/>
			</div>

            <div className = "mb-3">
				<label htmlFor = "address" className = "ms-2 mb-1">Address</label>
                <input 
                    id = "address"
                    className = "form-control"
					type = "text"
					value = {newContactInfo.address}
					onChange = {(e) => setNewContactInfo({...newContactInfo, address: e.target.value})}
				/>
			</div>
            <div className = "d-flex justify-content-center">
                <button 
                    className = "btn btn-primary mx-2"
                    onClick = {(e) => handleEditContact(e)}
                >
                    Update Contact
                </button>
                <Link to="/list_contacts">
                    <button className="btn btn-primary mx-2">List Contacts</button>
                </Link>
                <Link to = "/">
                    <button className = "btn btn-primary mx-2">Return Home</button>
                </Link>
            </div>
        </div>
    );
}; 