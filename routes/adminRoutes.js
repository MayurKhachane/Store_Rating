const express = require("express");

const router = express.Router();

const adminController =
require("../controllers/adminController");

const auth =
require("../middleware/auth");

const roleAuth =
require("../middleware/roleAuth");

router.get(
    "/dashboard",
    auth,
    roleAuth("ADMIN"),
    adminController.dashboard
);

module.exports = router;