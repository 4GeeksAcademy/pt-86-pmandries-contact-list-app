// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import rigoImageUrl from "../assets/img/rigo-baby.jpg";  // Import an image asset
import profile1 from "../assets/img/profile-1.jpg";
import profile2 from "../assets/img/profile-2.jpg";
import profile3 from "../assets/img/profile-3.jpg";
import profile4 from "../assets/img/profile-4.jpg";
import profile5 from "../assets/img/profile-5.jpg";
import profile6 from "../assets/img/profile-6.jpg";
import profile7 from "../assets/img/profile-4.jpg";
import profile8 from "../assets/img/profile-8.jpg";
import profile9 from "../assets/img/profile-9.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state
import React, { useState, useEffect } from "react";
// import pictureNumber from "./ListContacts";

// Define and export the Single component which displays individual item details.
export const SingleContact = () => {
  // Access the global state using the custom hook.
  const { store, dispatch, fetchContacts, editContact, deleteContact } = useGlobalReducer()
  const [ contact, setContact ] = useState({});
  // Retrieve the 'theId' URL parameter using useParams hook.
  const { theId } = useParams();

  useEffect(() => {
    const singleContact = store.contacts.find(contact => contact.id === parseInt(theId));
    if (singleContact) {
      setContact(singleContact)
    } else {
      fetchContacts()
      .then((foundContacts) => {
        const foundContact = foundContacts.find(contact => contact.id === parseInt(theId));
        return (foundContact)
      })
      .then((foundContact) => {
        setContact(foundContact);
      })
    }
  }, [])

  // let pictureNumber = index < 10 ? index : index - 9;
  // console.log(pictureNumber);

  return (
    <div style = {{marginBottom: 100}}>
      <div className="card mt-3 mx-auto w-50 shadow p-3 mb-5 bg-white rounded">
        <h1></h1>
        {/* Display the title of the contact element dynamically retrieved from the store using theId. */}
        <div className = "contatiner text-center bg-light">
          <h1>Contact</h1>
        </div>

          <img src={profile1} className="" alt="Profile Picture" />

        <div className = "mt-4">
          <h4>Name: {contact?.name}</h4>
          <h4>Phone: {contact?.phone}</h4>
          <h4>Email: {contact?.email}</h4>
          <h4>Address: {contact?.address}</h4>
        </div>
        
        <hr className="my-4" />  {/* A horizontal rule for visual separation. */}

        {/* A Link component acts as an anchor tag but is used for client-side routing to prevent page reloads. */}
        <div className = "d-flex justify-content-center">
					<Link to="/list_contacts">
					  <button className="btn btn-primary mx-2">List Contacts</button>
					</Link>
          <Link to="/edit_contact">
            <button className="btn btn-primary mx-2" href="#" role="button">
              Edit Contact
            </button>
          </Link>
          <Link to="/">
            <button className="btn btn-primary mx-2" href="#" role="button">
              Delete Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
SingleContact.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};
