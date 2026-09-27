const express = require("express");
const router = express.Router();
const students = require("../data/students");

// GET /students
router.get("/", (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      data: students
    });
  } catch (error) {
    next(error);
  }
});

// GET /students/:id
router.get("/:id", (req, res, next) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "ID must be a number."
      });
    }

    const student = students.find((item) => item.id === id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found."
      });
    }

    res.status(200).json({
      success: true,
      data: student
    });
  } catch (error) {
    next(error);
  }
});

// POST /students
router.post("/", (req, res, next) => {
  try {
    const { name, course } = req.body || {};

    if (!name || !course) {
      return res.status(400).json({
        success: false,
        message: "name and course are required."
      });
    }

    const student = {
      id: students.length
        ? Math.max(...students.map((item) => item.id)) + 1
        : 1,
      name,
      course
    };

    students.push(student);

    res.status(201).json({
      success: true,
      data: student
    });
  } catch (error) {
    next(error);
  }
});

// PUT /students/:id
router.put("/:id", (req, res, next) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "ID must be a number."
      });
    }

    const student = students.find((item) => item.id === id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found."
      });
    }

    const { name, course } = req.body || {};

    if (!name && !course) {
      return res.status(400).json({
        success: false,
        message: "Provide name or course."
      });
    }

    if (name) student.name = name;
    if (course) student.course = course;

    res.status(200).json({
      success: true,
      data: student
    });
  } catch (error) {
    next(error);
  }
});

// DELETE /students/:id
router.delete("/:id", (req, res, next) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "ID must be a number."
      });
    }

    const index = students.findIndex((item) => item.id === id);

    if (index === -1) {
      return res.status(404).json({
        success: false,
        message: "Student not found."
      });
    }

    const deletedStudent = students.splice(index, 1)[0];

    res.status(200).json({
      success: true,
      data: deletedStudent
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
