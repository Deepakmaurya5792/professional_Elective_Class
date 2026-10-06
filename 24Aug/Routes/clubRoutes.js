import { Router } from "express";
import express from "express"
const router=Router()

let clubs = [
    {
        id: 1,
        name: "Kriva ML Socity",
        Domain:"Machine Learning",
        President: "ABC"
    },
    {
        id: 2,
        name: " AI club",
        Domain:"AWS",
        President: "ABCd"
    },
    {
        id: 3,
        name: "Devops",
        Domain:"AWS",
        President: "ABCde"
    }
];


router.get("/club", (req, res) => {
    res.json(clubs);
});


export default router