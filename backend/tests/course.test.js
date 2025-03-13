
const request = require('supertest');
const app = require('../app'); 
describe('Testes de CRUD para Cursos', () => {
  it('Deve criar um novo curso', async () => {
    const newCourse = {
      name: 'Curso de Node.js',
      description: 'Curso completo sobre Node.js',
    };

    const response = await request(app)
      .post('/api/courses')
      .send(newCourse)
      .expect(201); 
    expect(response.body.name).toBe('Curso de Node.js');
    expect(response.body.description).toBe('Curso completo sobre Node.js');
  });

  it('Deve retornar todos os cursos', async () => {
    const response = await request(app).get('/api/courses').expect(200);

    expect(response.body.length).toBeGreaterThan(0);
  });

  it('Deve atualizar um curso existente', async () => {
    const course = await request(app)
      .post('/api/courses')
      .send({
        name: 'Curso de React',
        description: 'Curso sobre React.js',
      });

    const updatedCourse = {
      name: 'Curso de React.js Avançado',
      description: 'Curso aprofundado sobre React.js',
    };

    const response = await request(app)
      .put(`/api/courses/${course.body.id}`)
      .send(updatedCourse)
      .expect(200);

    expect(response.body.name).toBe('Curso de React.js Avançado');
    expect(response.body.description).toBe('Curso aprofundado sobre React.js');
  });

  it('Deve excluir um curso', async () => {
    const course = await request(app)
      .post('/api/courses')
      .send({
        name: 'Curso de Express',
        description: 'Curso sobre Express.js',
      });

    await request(app).delete(`/api/courses/${course.body.id}`).expect(204);
  });
});
