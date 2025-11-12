/* fetch contacts */
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

export const createAgenda = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/pmandries", {
        method: "POST",
        headers: { "content_type": "application/json" }
    });
    let data = response.json();
    fetchAgenda(dispatch);
}