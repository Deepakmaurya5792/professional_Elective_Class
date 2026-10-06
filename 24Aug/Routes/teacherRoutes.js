import { Router } from "express";
import express from "express"
//import checkroles from "../middleware/role";
const router=Router()

let teachers = [
    {
        id: 1,
        name: "Rajesh",
        age: 45,
        subject: "Java"
    },
    {
        id: 2,
        name: "Suresh",
        age: 50,
        subject: "Mathematics"
    },
    {
        id: 3,
        name: "Anita",
        age: 40,
        subject: "Physics"
    },
    {
        id: 4,
        name: "Priya",
        age: 35,
        subject: "Chemistry"
    },
    {
        id: 5,
        name: "Amit",
        age: 42,
        subject: "Computer Science"
    },
    {
        id: 6,
        name: "Neha",
        age: 38,
        subject: "English"
    }
];


router.get("/teachers",(req, res) => {
    res.json(teachers);
});

router.get("/:id", (req, res) => {

    console.log(req.params.id);

    const id = parseInt(req.params.id);

    let teacher = teachers.find(teacher => teacher.id === id);

    if (!teacher) {
        return res.status(404).json({
            message: "Teacher not found"
        });
    }

    res.json(teacher);
});


router.post("/create", (req, res) => {

    const newTeacher = {
        id: teachers.length + 1,
        name: req.body.name,
        age: req.body.age,
        subject: req.body.subject
    };

    teachers.push(newTeacher);

    return res.status(201).json({
        message: "Teacher created",
        teacher: newTeacher
    });
});


router.delete("/delete/:id", (req, res) => {

    let id = parseInt(req.params.id);

    const index = teachers.findIndex(
        teacher => teacher.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Teacher not found"
        });
    }

    teachers.splice(index, 1);

    res.status(200).json({
        message: "Teacher successfully deleted",
        teachers: teachers
    });
});

router.put("/put/:id", (req, res) => {

    let { name, age, subject } = req.body;

    let id = parseInt(req.params.id);

    let teacher = teachers.find(
        teacher => teacher.id === id
    );

    if (!teacher) {
        return res.status(404).json({
            message: "Teacher not found"
        });
    }

    teacher.name = name;
    teacher.age = age;
    teacher.subject = subject;

    res.status(200).json({
        message: "Teacher successfully updated",
        teacher: teachers
    });
});


router.patch("/patch/:id", (req, res) => {

    let { name, age, subject } = req.body;

    let id = parseInt(req.params.id);

    let teacher = teachers.find(
        teacher => teacher.id === id
    );

    if (!teacher) {
        return res.status(404).json({
            message: "Teacher not found"
        });
    }

    if (name) {
        teacher.name = name;
    }

    if (subject) {
        teacher.subject = subject;
    }

    if (age) {
        teacher.age = age;
    }

    res.status(200).json({
        message: "Teacher successfully updated",
        teacher: teacher
    });
});

// router.get("/search", (req, res) => {

//     const { subject, age } = req.query;

//     const teacher = teachers.filter(
//         t =>
//             t.subject.toLowerCase() === subject.toLowerCase() &&
//             t.age === parseInt(age)
//     );

//     if (teacher.length === 0) {
//         return res.status(404).json({
//             message: "No data found"
//         });
//     }

//     res.json(teacher);
// });

router.get("/search", (req, res) => {
    const subject = req.query.subject;
    const age = req.query.age;

    const result = teachers.filter(t => {
        const subjectMatch = !subject || t.subject.toLowerCase() === subject.toLowerCase();
        const ageMatch = !age || t.age === parseInt(age);
        return subjectMatch && ageMatch;
    });

    res.json(result);
});

export default router