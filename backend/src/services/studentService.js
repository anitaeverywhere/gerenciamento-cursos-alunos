const Student = require('../models/studentModel');

exports.createStudent = async (data) => {
  const student = new Student(data);
  return await student.save();
};

exports.getStudents = async () => {
  return await Student.find().populate('courses');
};

exports.getStudentById = async (id) => {
  return await Student.findById(id).populate('courses');
};

exports.deleteStudent = async (id) => {
  return await Student.findByIdAndDelete(id);
};

exports.addCourseToStudent = async (studentId, courseId) => {
  const student = await Student.findById(studentId);
  student.courses.push(courseId);
  return await student.save();
};

exports.removeCourseFromStudent = async (studentId, courseId) => {
  const student = await Student.findById(studentId);
  student.courses = student.courses.filter(course => course.toString() !== courseId);
  return await student.save();
};