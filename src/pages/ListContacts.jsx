import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ContactCard from "../components/ContactCard.jsx";

export const ListContacts = () => {

  const {store, dispatch, fetchContacts} = useGlobalReducer();
  const [ contacts, setContacts ] = useState([]);

  useEffect(() => {
        fetchContacts()
        setContacts(store.contacts)
    }, [])

    useEffect(()=>{
        setContacts(store.contacts)
    }, [store.contacts])
    return (
        <div className = " contatiner text-center bg-light">
            <h1 className = "p-3">Contact List</h1>
            <div>
                {contacts?.length > 0 ? contacts.map((contact, index) => {
                    let pictureNumber = index < 10 ? index : index - 9;
                    // console.log("pictureNumber: " + pictureNumber);
                    return (
                        <ContactCard
                            key = {contact.id} 
                            contact = {contact} 
                            pictureNumber={pictureNumber}
                        />
                    )
                })
                :
                <h2>Add a Contact</h2>
                }
            </div>
                <br />
                <div>
                    <Link to = "/">
                        <button className="btn btn-primary" style = {{marginBottom: 100}}>Return Home</button>
                    </Link>
                </div>
        </div>
    );
}; 