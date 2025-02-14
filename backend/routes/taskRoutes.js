const express = require("express");
const Task = require("../models/Task.js");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        // Parse the deadline into a Date object
        if (req.body.deadline) {
            req.body.deadline = new Date(req.body.deadline);
        }

        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        // Parse the deadline into a Date object
        if (req.body.deadline) {
            req.body.deadline = new Date(req.body.deadline);
        }

        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        // Parse the deadline into a Date object
        await Task.findByIdAndDelete(req.params.id);
       // await Task.deleteOne({_id: req.params.id}); //To delete only one task
        res.status(200).json(true);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
