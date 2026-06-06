import {
useEffect,
useState
}
from "react";

import Navbar from "../components/Navbar";
import API from "../services/api";

function OwnerDashboard() {

    const [stores,setStores] =
    useState([]);

    const [ratings,setRatings] =
    useState([]);

    useEffect(()=>{

        loadDashboard();
        loadRatings();

    },[]);

    const loadDashboard =
    async()=>{

        try{

            const res =
            await API.get(
                "/owner/dashboard"
            );

            setStores(
                res.data
            );

        }
        catch(error){

            console.log(error);

        }

    };

    const loadRatings =
    async()=>{

        try{

            const res =
            await API.get(
                "/owner/ratings"
            );

            setRatings(
                res.data
            );

        }
        catch(error){

            console.log(error);

        }

    };

    return(

        <>
            <Navbar />

            <div className="container mt-5">

                <h2 className="text-info fw-bold">
                    Owner Dashboard
                </h2>

                <div className="row mt-4">

                    {
                        stores.map(
                            (store)=>(
                                <div
                                    className="col-md-4"
                                    key={store.id}
                                >

                                    <div
                                        className="card bg-info text-white shadow dashboard-card"
                                    >

                                        <div className="card-body">

                                            <h4>
                                                {store.name}
                                            </h4>

                                            <h2>
                                                ⭐ {
                                                    store.averageRating
                                                }
                                            </h2>

                                        </div>

                                    </div>

                                </div>
                            )
                        )
                    }

                </div>

                <div className="card shadow mt-5">

                    <div className="card-body">

                        <h4>
                            Users Who Rated
                        </h4>

                        <table className="table table-bordered table-hover mt-3">

                            <thead className="table-dark">

                                <tr>

                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Rating</th>
                                    <th>Store</th>

                                </tr>

                            </thead>

                            <tbody>

                                {
                                    ratings.map(
                                        (r,index)=>(
                                            <tr key={index}>

                                                <td>
                                                    {r.name}
                                                </td>

                                                <td>
                                                    {r.email}
                                                </td>

                                                <td>
                                                    ⭐ {r.rating}
                                                </td>

                                                <td>
                                                    {r.storeName}
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

export default OwnerDashboard;