
const request = require('supertest');
const app = require('../app');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe('Testes de CRUD para Estudantes', () => {
  it('Deve criar um novo estudante', async () => {
    const newStudent = {
      name: 'Ana Silva',
      email: 'ana.silva@example.com',
    };

    const response = await request(app)
      .post('/api/students')
      .send(newStudent)
      .expect(201);

    expect(response.body.name).toBe('Ana Silva');
    expect(response.body.email).toBe('ana.silva@example.com');
  });

  it('Deve retornar todos os estudantes', async () => {
    const response = await request(app).get('/api/students').expect(200);

    expect(response.body.length).toBeGreaterThan(0);
  });

  it('Deve atualizar um estudante', async () => {
    const student = await request(app)
      .post('/api/students')
      .send({ name: 'João Souza', email: 'joao.souza@example.com' });

    const updatedStudent = {
      name: 'João Souza Atualizado',
      email: 'joao.souza.updated@example.com',
    };

    const response = await request(app)
      .put(`/api/students/${student.body.id}`)
      .send(updatedStudent)
      .expect(200);

    expect(response.body.name).toBe('João Souza Atualizado');
    expect(response.body.email).toBe('joao.souza.updated@example.com');
  });

  it('Deve excluir um estudante', async () => {
    const student = await request(app)
      .post('/api/students')
      .send({ name: 'Lucas Pereira', email: 'lucas.pereira@example.com' });

    await request(app).delete(`/api/students/${student.body.id}`).expect(204);
  });
});
