const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: "Access Denied"
        });
    }

    try {

        const decoded = jwt.verify(
            token,
            "mysecretkey"
        );

        req.user = decoded;

        next();

    }
    catch (error) {

        return res.status(401).json({
            message: "Invalid Token"
        });

    }

};

module.exports = auth;