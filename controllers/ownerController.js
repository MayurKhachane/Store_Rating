const db = require("../config/db");

// Owner Dashboard
exports.dashboard = (req, res) => {

    const ownerId = req.user.id;

    const sql = `
    SELECT
        s.id,
        s.name,
        ROUND(AVG(r.rating),1) AS averageRating
    FROM stores s
    LEFT JOIN ratings r
        ON s.id = r.store_id
    WHERE s.owner_id = ?
    GROUP BY s.id
    `;

    db.query(sql, [ownerId], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};


// Users Who Rated Store
exports.usersWhoRated = (req, res) => {

    const ownerId = req.user.id;

    const sql = `
    SELECT
        u.name,
        u.email,
        r.rating,
        s.name AS storeName
    FROM ratings r
    JOIN users u
        ON r.user_id = u.id
    JOIN stores s
        ON r.store_id = s.id
    WHERE s.owner_id = ?
    `;

    db.query(sql, [ownerId], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};