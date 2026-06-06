const express = require("express");

const router = express.Router();

const userController =
require("../controllers/userController");

const auth =
require("../middleware/auth");

const roleAuth =
require("../middleware/roleAuth");

router.post(
    "/add",
    auth,
    roleAuth("ADMIN"),
    userController.addUser
);

router.get(
    "/all",
    auth,
    roleAuth("ADMIN"),
    userController.getAllUsers
);

router.put(
    "/change-password",
    auth,
    userController.changePassword
);

router.get(
    "/:id",
    auth,
    roleAuth("ADMIN"),
    userController.getUserById
);

module.exports = router;