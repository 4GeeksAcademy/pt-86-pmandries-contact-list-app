import { isRouteErrorResponse } from "react-router-dom";

// fetch the Agenda
export const fetchAgenda = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/pmandries")
    let data = response.json();

    if (data.details == "Agenda 'pmandries' doesn't exists.") {
        createAgenda();
    }

    dispatch ({
        type: "set_agenda",
        payload: {
            agenda: data.slug,
            contacts: data.contacts
        }
    });
}

// create the Agenda, if needed
export const createAgenda = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/pmandries", {
        method: "POST",
        headers: { "content_type": "application/json" }
    });
    let data = response.json();
    fetchAgenda(dispatch);
}

// adds a contact
export const addContact = async (dispatch, payload) => {
    let inputName = payload.name;
    let inputPhone = payload.phone;
    let inputEmail = payload.email;
    let inputAddress = payload.address;
    
    let response = await fetch("https://playground.4geeks.com/contact/agendas/pmandries/contacts", {
        method: "POST",
        headers: { "content_type": "application/jason"},
        body: JSON.stringify({
            name: inputName,
            phone: inputPhone,
            email: inputEmail,
            address: inputAddress
        })
    });
    // refresh the contact list
    fetchContacts();
}

// fetchs all contacts
export const fetchContacts = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/pmandries/contacts")
    let data = await response.json;

    // updates the global state...look into this
    dispatch ({
        type: "set_contacts",
        payload: { contacts: data.contacts }
    })
}