import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
			<div className="container">
				<div>
					<h2 className = "text-light">Rigo CRM</h2>
				</div>
				<div className="">
					<Link to="/list_contacts">
						<button className="btn btn-primary">List Contacts</button>
					</Link>
				</div>
				<div className="">
					<Link to="/create_contact">
						<button className="btn btn-primary ml-3">Create Contacts</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};