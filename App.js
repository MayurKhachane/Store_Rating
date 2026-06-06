import {
BrowserRouter,
Routes,
Route
}
from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import StoreList from "./pages/StoreList";
import OwnerDashboard from "./pages/OwnerDashboard";
import AdminUsers
from "./pages/AdminUsers";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/admin"
                    element={<AdminDashboard />}
                />

                <Route
                    path="/stores"
                    element={<StoreList />}
                />

                <Route
                    path="/owner"
                    element={<OwnerDashboard />}
                />

                <Route
    path="/admin/users"
    element={<AdminUsers/>}
/>

            </Routes>

        </BrowserRouter>

    );

}

export default App;