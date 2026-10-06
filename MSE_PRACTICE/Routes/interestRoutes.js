import { Router } from "express";

const router = Router();

router.get("/simpleInterest", (req, res) => {
    const p = parseInt(req.query.p);
  const r = parseInt(req.query.r);
    const t = parseInt(req.query.t);
    const si = (p*r*t)/100;

    return res.status(200).json({
        message: "Simple Interest is",
        si: si
    });
});

export default router;