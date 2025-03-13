const Course = require('../models/courseModel');

exports.createCourse = async (data) => {
  const course = new Course(data);
  return await course.save();
};

exports.getCourses = async () => {
  return await Course.find();
};

exports.getCourseById = async (id) => {
  return await Course.findById(id);
};

exports.deleteCourse = async (id) => {
  return await Course.findByIdAndDelete(id);
};