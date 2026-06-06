import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const login = async (e) => {

        e.preventDefault();

        setError("");

        try {

            const res = await API.post(
                "/auth/login",
                {
                    email,
                    password
                }
            );

            localStorage.setItem(
                "token",
                res.data.token
            );

            localStorage.setItem(
                "role",
                res.data.role
            );

            localStorage.setItem(
                "userId",
                res.data.userId
            );

            if (
                res.data.role === "ADMIN"
            ) {

                navigate("/admin");

            }
            else if (
                res.data.role === "OWNER"
            ) {

                navigate("/owner");

            }
            else {

                navigate("/stores");

            }

        }
        catch (err) {

            setError(
                "Invalid Email or Password"
            );

        }

    };

    return (

        <div className="login-bg">

            <div className="card login-card shadow-lg">

                <h2 className="text-center text-primary mb-4">
                    Store Rating System
                </h2>

                <h4 className="text-center mb-4">
                    Login
                </h4>

                {
                    error &&
                    <div className="alert alert-danger">
                        {error}
                    </div>
                }

                <form onSubmit={login}>

                    <input
                        type="email"
                        className="form-control mb-3"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(
                                e.target.value
                            )
                        }
                    />

                    <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(
                                e.target.value
                            )
                        }
                    />

                    <button
                        className="btn btn-primary w-100"
                    >
                        Login
                    </button>

                </form>

                <div className="text-center mt-3">

                    <Link
                        to="/register"
                    >
                        New User? Register Here
                    </Link>

                </div>

            </div>

        </div>

    );

}

export default Login;