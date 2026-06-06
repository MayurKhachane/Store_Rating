const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const authRoutes = require("./routes/authRoutes");
const auth = require("./middleware/auth");
const storeRoutes =
require("./routes/storeRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/stores", storeRoutes);
const ratingRoutes =
require("./routes/ratingRoutes");
app.use("/api/ratings", ratingRoutes);
const adminRoutes =
require("./routes/adminRoutes");
const userRoutes =
require("./routes/userRoutes");

app.use("/api/users", userRoutes);

app.use("/api/admin", adminRoutes);
const ownerRoutes =
require("./routes/ownerRoutes");

app.use("/api/owner", ownerRoutes);
app.get(
    "/profile",
    auth,
    (req, res) => {

        res.json({
            message: "Protected Route",
            user: req.user
        });

    }
);

// Use Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Store Rating API Running");
});

app.listen(5000, () => {
    console.log("Server Running On Port 5000");
});