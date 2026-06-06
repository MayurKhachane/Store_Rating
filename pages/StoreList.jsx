import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function StoreList() {

    const [stores, setStores] = useState([]);
    const [search, setSearch] = useState("");
    const [rating, setRating] = useState({});

    useEffect(() => {

        loadStores();

    }, []);

    const loadStores = async () => {

        try {

            const res =
                await API.get(
                    "/stores/all"
                );

            setStores(
                res.data
            );

        }
        catch (error) {

            console.log(error);

        }

    };

    const searchStores = async () => {

        try {

            const res =
                await API.get(
                    `/stores/search?search=${search}`
                );

            setStores(
                res.data
            );

        }
        catch (error) {

            console.log(error);

        }

    };

    const submitRating =
    async (storeId) => {

        try {

            await API.post(
                "/ratings/add",
                {
                    user_id:
                    localStorage.getItem(
                        "userId"
                    ),
                    store_id:
                    storeId,
                    rating:
                    rating[storeId]
                }
            );

            alert(
                "Rating Submitted Successfully"
            );

        }
        catch (error) {

            alert(
                "Unable To Submit Rating"
            );

        }

    };

    return (

        <>
            <Navbar />

            <div className="container mt-5">

                <h2 className="text-success fw-bold mb-4">
                    Store Listings
                </h2>

                <div className="card shadow p-4 mb-4">

                    <div className="row">

                        <div className="col-md-9">

                            <input
                                className="form-control"
                                placeholder="Search Store By Name or Address"
                                value={search}
                                onChange={(e)=>
                                    setSearch(
                                        e.target.value
                                    )
                                }
                            />

                        </div>

                        <div className="col-md-3">

                            <button
                                className="btn btn-primary w-100"
                                onClick={searchStores}
                            >
                                Search
                            </button>

                        </div>

                    </div>

                </div>

                <div className="card shadow">

                    <div className="card-body">

                        <table className="table table-striped table-hover">

                            <thead className="table-dark">

                                <tr>

                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Rating</th>
                                    <th>Action</th>

                                </tr>

                            </thead>

                            <tbody>

                                {
                                    stores.map(
                                        (store)=>(
                                            <tr
                                                key={store.id}
                                            >

                                                <td>
                                                    {store.name}
                                                </td>

                                                <td>
                                                    {store.email}
                                                </td>

                                                <td>
                                                    {store.address}
                                                </td>

                                                <td>

                                                    <select
                                                        className="form-select"
                                                        onChange={(e)=>
                                                            setRating({
                                                                ...rating,
                                                                [store.id]:
                                                                e.target.value
                                                            })
                                                        }
                                                    >

                                                        <option>
                                                            Select
                                                        </option>

                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>

                                                    </select>

                                                </td>

                                                <td>

                                                    <button
                                                        className="btn btn-success"
                                                        onClick={()=>
                                                            submitRating(
                                                                store.id
                                                            )
                                                        }
                                                    >
                                                        Submit Rating
                                                    </button>

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

export default StoreList;