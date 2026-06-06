import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function AdminUsers() {

    const [users, setUsers] =
        useState([]);

    const [form, setForm] =
        useState({
            name: "",
            email: "",
            password: "",
            address: "",
            role: "USER"
        });

    useEffect(() => {

        loadUsers();

    }, []);

    const loadUsers = async () => {

        try {

            const res =
                await API.get(
                    "/users/all"
                );

            setUsers(
                res.data
            );

        }
        catch (error) {

            console.log(error);

        }

    };

    const addUser = async (e) => {

        e.preventDefault();

        try {

            await API.post(
                "/users/add",
                form
            );

            alert(
                "User Added Successfully"
            );

            setForm({
                name: "",
                email: "",
                password: "",
                address: "",
                role: "USER"
            });

            loadUsers();

        }
        catch (error) {

            alert(
                "Failed To Add User"
            );

        }

    };

    return (

        <>
            <Navbar />

            <div className="container mt-5">

                <h2 className="text-primary fw-bold">
                    User Management
                </h2>

                <div className="card shadow p-4 mt-4">

                    <h4 className="mb-3">
                        Add New User
                    </h4>

                    <form
                        onSubmit={addUser}
                    >

                        <div className="row">

                            <div className="col-md-6">

                                <input
                                    className="form-control mb-3"
                                    placeholder="Name"
                                    value={form.name}
                                    onChange={(e)=>
                                        setForm({
                                            ...form,
                                            name:
                                            e.target.value
                                        })
                                    }
                                />

                            </div>

                            <div className="col-md-6">

                                <input
                                    className="form-control mb-3"
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={(e)=>
                                        setForm({
                                            ...form,
                                            email:
                                            e.target.value
                                        })
                                    }
                                />

                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-6">

                                <input
                                    type="password"
                                    className="form-control mb-3"
                                    placeholder="Password"
                                    value={form.password}
                                    onChange={(e)=>
                                        setForm({
                                            ...form,
                                            password:
                                            e.target.value
                                        })
                                    }
                                />

                            </div>

                            <div className="col-md-6">

                                <select
                                    className="form-select mb-3"
                                    value={form.role}
                                    onChange={(e)=>
                                        setForm({
                                            ...form,
                                            role:
                                            e.target.value
                                        })
                                    }
                                >

                                    <option value="USER">
                                        USER
                                    </option>

                                    <option value="OWNER">
                                        OWNER
                                    </option>

                                    <option value="ADMIN">
                                        ADMIN
                                    </option>

                                </select>

                            </div>

                        </div>

                        <textarea
                            className="form-control mb-3"
                            rows="3"
                            placeholder="Address"
                            value={form.address}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    address:
                                    e.target.value
                                })
                            }
                        />

                        <button
                            className="btn btn-success"
                        >
                            Add User
                        </button>

                    </form>

                </div>

                <div className="card shadow mt-4">

                    <div className="card-body">

                        <h4 className="mb-3">
                            User List
                        </h4>

                        <table className="table table-striped table-hover">

                            <thead className="table-dark">

                                <tr>

                                    <th>Name</th>

                                    <th>Email</th>

                                    <th>Address</th>

                                    <th>Role</th>

                                </tr>

                            </thead>

                            <tbody>

                                {
                                    users.map(
                                        (user) => (

                                            <tr
                                                key={user.id}
                                            >

                                                <td>
                                                    {user.name}
                                                </td>

                                                <td>
                                                    {user.email}
                                                </td>

                                                <td>
                                                    {user.address}
                                                </td>

                                                <td>

                                                    <span
                                                        className={
                                                            user.role === "ADMIN"
                                                            ? "badge bg-danger"
                                                            : user.role === "OWNER"
                                                            ? "badge bg-warning text-dark"
                                                            : "badge bg-success"
                                                        }
                                                    >
                                                        {user.role}
                                                    </span>

                                                </td>

                                            </tr>

                                        )
                                    )
                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </>

    );

}

export default AdminUsers;