import { isRouteErrorResponse } from "react-router-dom";

// fetch the Agenda
export const fetchAgenda = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/pmandries")
    let data = await response.json();

    console.log(data.detail)
    if (data.detail == `Agenda "pmandries" doesn't exist.`){
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
        headers: { "Content_type": "application/json" }
    });
    let data = await response.json();
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
        headers: { "Content_type": "application/jason"},
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

// Edit Contacts
export const editContact = async (dispatch, payload) => {
    let editName = payload.name;
    let editPhone = payload.name;
    let editEmail = payload.email;
    let editAddress = payload.address;
    
    let response = await fetch("https://playground.4geeks.com/contact/agendas/pmandries/contacts/${id}", {
        method: "PUT",
        headers: {"Content_type": "app;ication/json"},
        body: JSON.stringify ({
            name: editName,
            phone: editPhone,
            email: editEmail,
            address: editAddress
        })
    })
    // refresh the contact list
    fetchContacts();
}

export const deleteContact = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/pmandries/contacts/${payload}", {
        method: "DELETE",
        headers: {"Content_type": "app;ication/json"}
});
    // refresh the contact list
    fetchContacts();
}