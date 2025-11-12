import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const CreateContact = () => {

  const {store, dispatch} =useGlobalReducer()

    return (
        <div className="text-center mt-5">
            <h1>Welcome to the Create Contacts page!</h1>
            <p>
                <img src={rigoImageUrl} />
            </p>
            <br />
            <Link to="/">
                <button className="btn btn-primary">Back Home</button>
            </Link>
        </div>
    );
}; 