const express = require("express");

const router = express.Router();

const ratingController =
require("../controllers/ratingController");

router.post(
    "/add",
    ratingController.addRating
);

router.put(
    "/update/:id",
    ratingController.updateRating
);

module.exports = router;