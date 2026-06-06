const db = require("../config/db");
const bcrypt = require("bcryptjs");

// Get All Users
exports.getAllUsers = (req, res) => {

    const sql = `
    SELECT id,name,email,address,role
    FROM users`;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};


// Add User
exports.addUser = async (req, res) => {

    const {
        name,
        email,
        password,
        address,
        role
    } = req.body;

    const hashedPassword =
        await bcrypt.hash(password, 10);

    const sql = `
    INSERT INTO users
    (name,email,password,address,role)
    VALUES (?,?,?,?,?)`;

    db.query(
        sql,
        [
            name,
            email,
            hashedPassword,
            address,
            role
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "User Added Successfully"
            });

        }
    );

};


// Get User By ID
exports.getUserById = (req, res) => {

    const { id } = req.params;

    const sql = `
    SELECT
    id,
    name,
    email,
    address,
    role
    FROM users
    WHERE id = ?`;

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.length === 0) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        res.json(result[0]);

    });

};


// Change Password
exports.changePassword = async (req, res) => {

    const userId = req.user.id;

    const {
        oldPassword,
        newPassword
    } = req.body;

    const sql =
        "SELECT * FROM users WHERE id=?";

    db.query(sql, [userId], async (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.length === 0) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        const user = result[0];

        const isMatch =
            await bcrypt.compare(
                oldPassword,
                user.password
            );

        if (!isMatch) {

            return res.status(400).json({
                message: "Old Password Incorrect"
            });

        }

        const hashedPassword =
            await bcrypt.hash(
                newPassword,
                10
            );

        db.query(
            "UPDATE users SET password=? WHERE id=?",
            [hashedPassword, userId],
            (err, result) => {

                if (err) {
                    return res.status(500).json(err);
                }

                res.json({
                    message:
                    "Password Updated Successfully"
                });

            }
        );

    });

};