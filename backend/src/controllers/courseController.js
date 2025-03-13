
const courseService = require('../services/courseService');

exports.createCourse = async (req, res) => {
  try {
    const course = await courseService.createCourse(req.body);
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar curso' });
  }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await courseService.getCourses();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar cursos' });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    await courseService.deleteCourse(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: 'Erro ao deletar curso' });
  }
};
