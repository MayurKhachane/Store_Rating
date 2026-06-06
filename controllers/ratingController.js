const db = require("../config/db");

// Submit Rating
exports.addRating = (req, res) => {

    const { user_id, store_id, rating } = req.body;

    const sql =
        `INSERT INTO ratings
        (user_id,store_id,rating)
        VALUES (?,?,?)`;

    db.query(
        sql,
        [user_id, store_id, rating],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Rating Submitted"
            });

        }
    );
};

// Update Rating
exports.updateRating = (req, res) => {

    const { id } = req.params;

    const { rating } = req.body;

    const sql =
        "UPDATE ratings SET rating=? WHERE id=?";

    db.query(
        sql,
        [rating, id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Rating Updated"
            });

        }
    );
};