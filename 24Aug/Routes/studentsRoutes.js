import { Router } from "express";
import Student from "../models/studentModel.js";
import checkroles from "../middleware/role.js";
import authenticate from "../middleware/auth.js";
const router = Router();

router.get(
    "/",
    checkroles("teacher", "student", "admin"),
    async (req, res) => {

        try {

            const students = await Student.find();

            res.status(200).json(students);

        } catch (error) {

            res.status(500).json({
                message: "Failed to fetch students",
                error: error.message
            });
        }
    }
);



router.get(
    "/search",
    checkroles("teacher", "student", "admin"),
    async (req, res) => {

        try {

            const { course, age } = req.query;

            const filter = {};

            if (course) {
                filter.course = {
                    $regex: course,
                    $options: "i"
                };
            }

            if (age) {
                filter.age = Number(age);
            }

            const students = await Student.find(filter);

            res.status(200).json(students);

        } catch (error) {

            res.status(500).json({
                message: "Search failed",
                error: error.message
            });
        }
    }
);


router.get(
    "/:id",
    checkroles("teacher", "student", "admin"),
    async (req, res) => {

        try {

            const student = await Student.findById(req.params.id);

            if (!student) {
                return res.status(404).json({
                    message: "Student not found"
                });
            }

            res.status(200).json(student);

        } catch (error) {

            res.status(500).json({
                message: "Failed to fetch student",
                error: error.message
            });
        }
    }
);

router.post(
    "/create",
    checkroles("teacher", "admin"),
    async (req, res) => {

        try {

            const { user, age, course } = req.body;

            if (!user || !age || !course) {
                return res.status(400).json({
                    message: "user, age and course are required"
                });
            }

            const newStudent = await Student.create({
                user,
                age,
                course
            });

            res.status(201).json({
                message: "Student added successfully",
                student: newStudent
            });

        } catch (error) {

            res.status(500).json({
                message: "Failed to create student",
                error: error.message
            });
        }
    }
);

router.delete(
    "/delete/:id",
    checkroles("admin"),
    async (req, res) => {

        try {

            const student = await Student.findByIdAndDelete(
                req.params.id
            );

            if (!student) {
                return res.status(404).json({
                    message: "Student not found"
                });
            }

            res.status(200).json({
                message: "Student deleted successfully"
            });

        } catch (error) {

            res.status(500).json({
                message: "Failed to delete student",
                error: error.message
            });
        }
    }
);



router.put(
    "/update/:id",
    checkroles("teacher", "admin"),
    async (req, res) => {

        try {

            const { user, age, course } = req.body;

            const student = await Student.findByIdAndUpdate(
                req.params.id,
                {
                    user,
                    age,
                    course
                },
                {
                    new: true,
                    runValidators: true
                }
            );

            if (!student) {
                return res.status(404).json({
                    message: "Student not found"
                });
            }

            res.status(200).json({
                message: "Student updated successfully",
                student
            });

        } catch (error) {

            res.status(500).json({
                message: "Failed to update student",
                error: error.message
            });
        }
    }
);

router.patch(
    "/patch/:id",
    checkroles("admin"),
    async (req, res) => {

        try {

            const updates = {};

            if (req.body.user !== undefined) {
                updates.user = req.body.user;
            }

            if (req.body.age !== undefined) {
                updates.age = req.body.age;
            }

            if (req.body.course !== undefined) {
                updates.course = req.body.course;
            }

            const student = await Student.findByIdAndUpdate(
                req.params.id,
                updates,
                {
                    new: true,
                    runValidators: true
                }
            );

            if (!student) {
                return res.status(404).json({
                    message: "Student not found"
                });
            }

            res.status(200).json({
                message: "Student partially updated",
                student
            });

        } catch (error) {

            res.status(500).json({
                message: "Failed to update student",
                error: error.message
            });
        }
    }
);


export default router;