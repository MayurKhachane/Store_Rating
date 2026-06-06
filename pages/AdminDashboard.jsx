import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";

function AdminDashboard() {

    const [data, setData] = useState({
        totalUsers: 0,
        totalStores: 0,
        totalRatings: 0
    });

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {

        try {

            const res =
                await API.get(
                    "/admin/dashboard"
                );

            setData(res.data);

        }
        catch (error) {

            console.log(error);

        }

    };

    return (

        <>
            <Navbar />

            <div className="container mt-5">

                <h2 className="text-primary fw-bold mb-4">
                    Admin Dashboard
                </h2>

                <div className="row">

                    <div className="col-md-4">

                        <div className="card bg-primary text-white shadow dashboard-card">

                            <div className="card-body text-center">

                                <h1>
                                    {data.totalUsers}
                                </h1>

                                <h4>
                                    Total Users
                                </h4>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card bg-success text-white shadow dashboard-card">

                            <div className="card-body text-center">

                                <h1>
                                    {data.totalStores}
                                </h1>

                                <h4>
                                    Total Stores
                                </h4>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card bg-warning shadow dashboard-card">

                            <div className="card-body text-center">

                                <h1>
                                    {data.totalRatings}
                                </h1>

                                <h4>
                                    Total Ratings
                                </h4>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="mt-5">

                    <Link
                        to="/admin/users"
                        className="btn btn-primary me-3"
                    >
                        Manage Users
                    </Link>

                    <Link
                        to="/stores"
                        className="btn btn-success"
                    >
                        View Stores
                    </Link>

                </div>

            </div>

        </>

    );

}

export default AdminDashboard;