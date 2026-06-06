const express = require("express");

const router = express.Router();

const storeController =
require("../controllers/storeController");

const auth =
require("../middleware/auth");

const roleAuth =
require("../middleware/roleAuth");


// Admin - Add Store
router.post(
    "/add",
    auth,
    roleAuth("ADMIN"),
    storeController.addStore
);


// All Logged-in Users - View Stores
router.get(
    "/all",
    auth,
    storeController.getStores
);


// Search Stores by Name or Address
router.get(
    "/search",
    auth,
    storeController.searchStores
);

module.exports = router;