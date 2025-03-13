
const studentService = require('../services/studentService');

exports.createStudent = async (req, res) => {
  try {
    const student = await studentService.createStudent(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar estudante' });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await studentService.getStudents();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar estudantes' });
  }
};

exports.addCourseToStudent = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;
    const student = await studentService.addCourseToStudent(studentId, courseId);
    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao adicionar curso ao estudante' });
  }
};

exports.removeCourseFromStudent = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;
    const student = await studentService.removeCourseFromStudent(studentId, courseId);
    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao remover curso do estudante' });
  }
};
