const db = require("../config/db");

// Add Store
exports.addStore = (req, res) => {

    const { name, email, address, owner_id } = req.body;

    const sql = `
    INSERT INTO stores
    (name,email,address,owner_id)
    VALUES (?,?,?,?)`;

    db.query(
        sql,
        [name, email, address, owner_id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.status(201).json({
                message: "Store Added Successfully"
            });

        }
    );
};


// Get All Stores
exports.getStores = (req, res) => {

    const sql = `
    SELECT
    s.*,
    ROUND(AVG(r.rating),1) AS average_rating
    FROM stores s
    LEFT JOIN ratings r
    ON s.id = r.store_id
    GROUP BY s.id
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};


// Search Stores
exports.searchStores = (req, res) => {

    const { search } = req.query;

    const sql = `
    SELECT *
    FROM stores
    WHERE name LIKE ?
    OR address LIKE ?
    `;

    db.query(
        sql,
        [`%${search}%`, `%${search}%`],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(result);

        }
    );

};