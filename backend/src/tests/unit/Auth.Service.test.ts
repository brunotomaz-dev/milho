import chai from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import AuthService from '../../service/Auth.Service';
import UserService from '../../service/User.Service';
import userMock from '../mocks/users.mock';
const { expect } = chai;

describe('Testes da rota de usuário', () => {
  describe('Teste de Criação de Usuário', () => {
  afterEach(() => {
    Sinon.restore();
  });
  it('Deve criar um usuário teste ', async () => {
    const newUser = userMock.newUser_1;
    const mockUserOutput = userMock.user_1;
    const newUserService = new UserService();
    Sinon.stub(Model, 'create').resolves([mockUserOutput]);
    Sinon.stub(Model, 'findOne').resolves(null);

    const token = await newUserService.create(newUser);
    expect(token).to.be.a('string');
    expect(token).to.be.not.empty;

    });

    it('Deve retornar um erro ao tentar criar um usuário com dados inválidos', async () => {
      const newUser = userMock.newUser_1;
      const newUserService = new UserService();
  
      try {
        await newUserService.create({ ...newUser, email: 'email-invalido' });
      }
      catch (error) {
        expect(error).to.have.property('statusCode', 400);
        expect(error).to.have.property('message', '"email" must be a valid email');
      }
    });

    it('Deve retornar um erro ao tentar criar um usuário com email já cadastrado', async () => {
      const newUser = userMock.newUser_1;
      const newUserService = new UserService();
      Sinon.stub(Model, 'findOne').resolves([newUser]);
  
      try {
        await newUserService.create(newUser);
      }
      catch (error) {
        expect(error).to.have.property('statusCode', 409);
        expect(error).to.have.property('message', 'User already exists');
      }
    });
  });
  describe('Teste de Login de Usuário', () => {
    afterEach(() => {
      Sinon.restore();
    });
    it('Deve logar um usuário teste ', async () => {
      const user = userMock.loginUser_2;
      const authService = new AuthService();
      Sinon.stub(Model, 'findOne').resolves(userMock.user_2);

      const token = await authService.login(user);
      expect(token).to.be.a('string');
      expect(token).to.be.not.empty;
    });
    it('Deve retornar um erro ao tentar logar um usuário com dados inválidos', async () => {
      const user = userMock.loginUser_2;
      const authService = new AuthService();
      Sinon.stub(Model, 'findOne').resolves(userMock.user_2);

      try {
        await authService.login({...user, password: 'senha-invalida'});
      }
      catch (error) {
        expect(error).to.have.property('statusCode', 401);
        expect(error).to.have.property('message', 'Invalid password');
      }
    });
    it('Deve retornar um erro ao tentar logar um usuário com email não cadastrado', async () => {
      const user = userMock.loginUser_2;
      const authService = new AuthService();
      Sinon.stub(Model, 'findOne').resolves(null);

      try {
        await authService.login(user);
      }
      catch (error) {
        expect(error).to.have.property('statusCode', 404);
        expect(error).to.have.property('message', 'User not found');
      }
    });
    it('Deve retornar um erro ao tentar logar um usuário com email inválido', async () => {
      const user = userMock.loginUser_2;
      const authService = new AuthService();
      Sinon.stub(Model, 'findOne').resolves(null);

      try {
        await authService.login({...user, email: 'email-invalido'});
      }
      catch (error) {
        expect(error).to.have.property('statusCode', 400);
        expect(error).to.have.property('message', '"email" must be a valid email');
      }
    });
    it('Deve retornar um erro ao tentar logar um usuário com senha inválida', async () => {
      const user = userMock.loginUser_2;
      const authService = new AuthService();
      Sinon.stub(Model, 'findOne').resolves(null);

      try {
        await authService.login({email: user.email, password:''});
      }
      catch (error) {
        expect(error).to.have.property('statusCode', 400);
        expect(error).to.have.property('message', '"password" is not allowed to be empty');
      }
    });
    it('Testa a validação de um token', async () => {
      const user = userMock.user_2;
      const authService = new AuthService();
      Sinon.stub(Model, 'findOne').resolves(user);

      const token = userMock.token_2;
      const decoded = await authService.validateUser(token);

      expect(decoded).to.be.a('object');
      expect(decoded).to.have.property('name', user.name);
    });
    it('Deve retornar um erro ao tentar validar um token inválido', async () => {
      const user = userMock.user_2;
      const authService = new AuthService();
      Sinon.stub(Model, 'findOne').resolves(user);

      const token = userMock.token_2;
      try {
        await authService.validateUser(token + 'a');
      }
      catch (error) {
        expect(error).to.have.property('statusCode', 401);
        expect(error).to.have.property('message', 'Invalid token');
      }
    });
    it('Deve retornar um erro ao tentar validar um token com usuário não cadastrado', async () => {
      const user = userMock.user_2;
      const authService = new AuthService();
      Sinon.stub(Model, 'findOne').resolves(null);

      const token = userMock.token_2;
      try {
        await authService.validateUser(token);
      }
      catch (error) {
        expect(error).to.have.property('statusCode', 404);
        expect(error).to.have.property('message', 'User not found');
      }
    });
  });
})