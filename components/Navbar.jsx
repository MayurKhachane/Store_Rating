import { Link } from "react-router-dom";

function Navbar() {

    const role =
        localStorage.getItem("role");

    const logout = () => {

        localStorage.clear();

        window.location.href = "/";
    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">

            <div className="container">

                <Link
                    className="navbar-brand fw-bold"
                    to="/"
                >
                    Store Rating System
                </Link>

                <div>

                    {
                        role === "ADMIN" &&

                        <Link
                            to="/admin"
                            className="btn btn-light me-2"
                        >
                            Dashboard
                        </Link>
                    }

                    {
                        role === "USER" &&

                        <Link
                            to="/stores"
                            className="btn btn-light me-2"
                        >
                            Stores
                        </Link>
                    }

                    {
                        role === "OWNER" &&

                        <Link
                            to="/owner"
                            className="btn btn-light me-2"
                        >
                            Dashboard
                        </Link>
                    }

                    <button
                        className="btn btn-danger"
                        onClick={logout}
                    >
                        Logout
                    </button>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;