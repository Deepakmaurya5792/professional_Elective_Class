require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectdb = require("./db/db");
const router = require("./routes/routes");

const app = express();

app.use(cors());
app.use(express.json());

connectdb();

app.use("/", router);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
