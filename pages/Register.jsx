import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function Register() {

    const [form, setForm] =
        useState({
            name: "",
            email: "",
            password: "",
            address: ""
        });

    const [message, setMessage] =
        useState("");

    const [error, setError] =
        useState("");

    const register = async (e) => {

        e.preventDefault();

        setError("");
        setMessage("");

        try {

            await API.post(
                "/auth/register",
                form
            );

            setMessage(
                "Registration Successful"
            );

            setForm({
                name: "",
                email: "",
                password: "",
                address: ""
            });

        }
        catch (err) {

            setError(
                err.response?.data?.message ||
                "Registration Failed"
            );

        }

    };

    return (

        <div className="register-bg">

            <div className="card register-card shadow-lg">

                <h2 className="text-center text-success mb-4">
                    User Registration
                </h2>

                {
                    message &&
                    <div className="alert alert-success">
                        {message}
                    </div>
                }

                {
                    error &&
                    <div className="alert alert-danger">
                        {error}
                    </div>
                }

                <form
                    onSubmit={register}
                >

                    <input
                        className="form-control mb-3"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                name:
                                e.target.value
                            })
                        }
                    />

                    <input
                        type="email"
                        className="form-control mb-3"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                email:
                                e.target.value
                            })
                        }
                    />

                    <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="Password"
                        value={form.password}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                password:
                                e.target.value
                            })
                        }
                    />

                    <textarea
                        rows="3"
                        className="form-control mb-3"
                        placeholder="Address"
                        value={form.address}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                address:
                                e.target.value
                            })
                        }
                    />

                    <button
                        className="btn btn-success w-100"
                    >
                        Register
                    </button>

                </form>

                <div className="text-center mt-3">

                    <Link to="/">
                        Back To Login
                    </Link>

                </div>

            </div>

        </div>

    );

}

export default Register;