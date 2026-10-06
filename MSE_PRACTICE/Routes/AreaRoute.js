import { Router } from "express";

const router = Router();

router.get("/area", (req, res) => {
    const side = parseInt(req.query.side);
    const area = side * side;
    return res.status(200).json({
        message: "Area of square is",
        area: area
    });
});

export default router;