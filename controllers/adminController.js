const db = require("../config/db");

exports.dashboard = (req, res) => {

    const response = {};

    db.query(
        "SELECT COUNT(*) AS totalUsers FROM users",
        (err, users) => {

            if (err) return res.status(500).json(err);

            response.totalUsers =
                users[0].totalUsers;

            db.query(
                "SELECT COUNT(*) AS totalStores FROM stores",
                (err, stores) => {

                    if (err)
                        return res.status(500).json(err);

                    response.totalStores =
                        stores[0].totalStores;

                    db.query(
                        "SELECT COUNT(*) AS totalRatings FROM ratings",
                        (err, ratings) => {

                            if (err)
                                return res.status(500).json(err);

                            response.totalRatings =
                                ratings[0].totalRatings;

                            res.json(response);

                        }
                    );
                }
            );
        }
    );
};