const express = require("express");

const router = express.Router();

const auth =
require("../middleware/auth");

const roleAuth =
require("../middleware/roleAuth");

const ownerController =
require("../controllers/ownerController");

router.get(
    "/dashboard",
    auth,
    roleAuth("OWNER"),
    ownerController.dashboard
);

router.get(
    "/ratings",
    auth,
    roleAuth("OWNER"),
    ownerController.usersWhoRated
);

module.exports = router;