
const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.post('/', courseController.createCourse);
router.get('/', courseController.getCourses);
router.delete('/:id', courseController.deleteCourse);

module.exports = router;
