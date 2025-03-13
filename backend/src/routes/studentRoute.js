const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/', studentController.createStudent);
router.get('/', studentController.getStudents);
router.post('/add-course', studentController.addCourseToStudent);
router.post('/remove-course', studentController.removeCourseFromStudent);

module.exports = router;
