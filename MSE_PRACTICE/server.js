import express from "express";
import SquareArea from "./Routes/AreaRoute.js";
import RectangleArea from "./Routes/RectangleRoute.js";
import Simpleinterest from "./Routes/interestRoutes.js"
const app = express();
const port = 8001;

app.use(express.json());

app.use("/Square", SquareArea);
app.use("/Rectangle",RectangleArea);
app.use("/",Simpleinterest);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
