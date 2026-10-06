import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
            trim: true
        },

        age: {
            type: Number,
            required: true,
            min: 1
        },

        course: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;