import ErrorHandler from "../middleware/error.js";
import { Task } from "../models/task.js"
import { User } from "../models/user.js";
export const newTask = async (req, res, next) => {
    try {
        const { title, description } = req.body;

        await Task.create({
            title,
            description,
            user: req.user
        })
        res.status(201).json({
            success: true,
            message: "Task added successfully",
        })
    } catch (error) {
        next(error);
    }
}

export const getMyTask = async (req, res, next) => {
    try {

        const userid = req.user._id;
        console.log(userid);

        const tasks = await Task.find({ user: userid })

        res.status(201).json({
            success: true,
            message: "Success",
            tasks,
        })
    } catch (error) {
        next(error)
    }

}
export const updateTask = async (req, res, next) => {

    try {
        const task = await Task.findById(req.params.id);

        if (!task) return next((new ErrorHandler("Invalid Id", 404)))
        task.isCompleted = !task.isCompleted

        await task.save();

        res.status(201).json({
            success: true,
            message: "Task Updated"
        })
    } catch (error) {
        next(error)
    }
}
export const deleteTask = async (req, res, next) => {

    try {
        const task = await Task.findById(req.params.id)
        if (!task) {
            return next(new ErrorHandler("Task not found", 404))
        }
        await task.deleteOne();

        res.status(201).json({
            success: true,
            message: "Task Deleted"
        })
    } catch (error) {
        next(error)
    }
}