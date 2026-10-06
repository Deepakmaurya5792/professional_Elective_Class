
import { Router } from "express";

const router = Router();

router.get("/area", (req, res) => {
    const length = parseInt(req.query.length);
    const width = parseInt(req.query.width);
    const Rarea = length*width;
    return res.status(200).json({
        message: "Area of rectangle is",
        area: Rarea
    });
});

export default router;