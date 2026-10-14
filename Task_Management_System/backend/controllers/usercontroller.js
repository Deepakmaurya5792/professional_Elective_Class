const user = require("../Models/user");

const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: "Email and name are required" });
        }

        const newuser = await user.create({ name: name, email: email });

        return res.status(200).json({
            message: "User Created successfully",
            user: newuser
        });
    } catch (error) {
        console.log("Error", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = { createUser };