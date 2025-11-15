// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import rigoImageUrl from "../assets/img/rigo-baby.jpg"  // Import an image asset
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state
import React, { useState, useEffect } from "react";

// Define and export the Single component which displays individual item details.
export const SingleContact = props => {
  // Access the global state using the custom hook.
  const { store, dispatch, fetchContacts, editContact, deleteContact } = useGlobalReducer()
  const [ contact, setContact ] = useState({});
  // Retrieve the 'theId' URL parameter using useParams hook.
  const { theId } = useParams()
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

  return (
    <div>
      <div className="card mt-3 mx-auto w-50 shadow p-3 mb-5 bg-white rounded">
        {/* <h1>{theId}</h1> */}
        {/* Display the title of the todo element dynamically retrieved from the store using theId. */}
        <div className = "contatiner text-center bg-light">
          <h1>Contact</h1>
        </div>

        <div className = "mt-4">
          <h3>Name: {contact?.name}</h3>
          <h3>Phone: {contact?.phone}</h3>
          <h3>Email: {contact?.email}</h3>
          <h3>Address: {contact?.address}</h3>
        </div>
        
        <hr className="my-4" />  {/* A horizontal rule for visual separation. */}

        {/* A Link component acts as an anchor tag but is used for client-side routing to prevent page reloads. */}
        <div className = "d-flex justify-content-center">
          <Link to="/">
            <span className="btn btn-primary mx-2" href="#" role="button">
              Return home
            </span>
          </Link>
          <Link to="/edit_contact">
            <span className="btn btn-primary mx-2" href="#" role="button">
              Edit Contact
            </span>
          </Link>
          <Link to="/">
            <span className="btn btn-primary mx-2" href="#" role="button">
              Delete Contact
            </span>
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
