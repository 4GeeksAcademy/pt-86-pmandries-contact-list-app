import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const ListContacts = () => {

  const {store, dispatch} =useGlobalReducer()

    return (
        <div className = " contatiner text-center mt-5">
            <h1>Welcome to the List Contacts page!</h1>
            <p>
                <img src={rigoImageUrl} />
            </p>
                <ul className="list-group">
                    {/* Map over the 'todos' array from the store and render each item as a list element */}
                    {store && store.contacts?.map((item) => {
                        return (
                            <li
                                key={item.id}  // React key for list items.
                                className="list-group-item d-flex justify-content-between"
                                style={{ background: item.background }}> 
              
                                {/* Link to the detail page of this contact. */}
                                <Link to={"/single_contact/" + item.id}>Link to: {item.title} </Link>              
                                <button className="btn btn-success" 
                                    onClick={() => dispatch({
                                        type: "add_task", 
                                        payload: { id: item.id }
                                    })}>
                                    View Contact
                                </button>
                            </li>
                        );
                    })}
                </ul>

                <br />
                <div>
                    <Link to="/">
                        <button className="btn btn-primary">Return Home</button>
                    </Link>
                </div>
        </div>
    );
}; 