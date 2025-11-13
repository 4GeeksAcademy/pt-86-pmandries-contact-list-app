export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    contacts: [], // contacts starts as an empty array
    agenda: "" // start agendas as an empty array
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'set_agenda' : //you call set agenda in your fetch agenda function
    //to send the data to the stsre and update it

      return {
        ...store,
        agenda: action.payload.agenda,
        contacts: action.payload.contacts
      };
    
    case 'set_contact' :

         return {
          ...store,
          contacts: action.payload.contacts
        };

    default:
      throw Error('Unknown action.');
  }    
}
