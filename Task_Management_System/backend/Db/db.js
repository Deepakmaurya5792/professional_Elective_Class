const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Database is connected");
    } catch (error) {
        console.error("Db Error", error);
    }
};

module.exports = connectdb;
