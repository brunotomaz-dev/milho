import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { Model } from 'mongoose';
import * as Sinon from 'sinon';
import { Response } from 'superagent';
import connectToDatabase from '../../database/config/connection';

import App from '../../app';
import usersMock from '../mocks/users.mock';

chai.use(chaiHttp);

const { app } = new App(connectToDatabase);

describe('Testes de integração do controller Auth', () => {
  let chaiHttpResponse: Response;
  describe('Testes do método login', () => {

    afterEach(() => {
      Sinon.restore();
    });

    it('Deve retornar um token ao logar um usuário', async () => {
      Sinon
      .stub(Model, 'findOne')
      .resolves(usersMock.user_2);

      chaiHttpResponse = await chai
      .request(app)
      .post('/auth')
      .send(usersMock.loginUser_2);

      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.have.property('token');
    });

    it('Deve retornar um erro ao tentar logar um usuário com email não cadastrado', async () => {
      Sinon
      .stub(Model, 'findOne')
      .resolves(null);

      chaiHttpResponse = await chai
      .request(app)
      .post('/auth')
      .send(usersMock.loginUser_2);

      expect(chaiHttpResponse).to.have.status(404);
      expect(chaiHttpResponse.body).to.have.property('message', 'User not found');
    });

    it('Deve retornar um erro ao tentar logar um usuário com email inválido', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/auth')
      .send({...usersMock.loginUser_2, email: 'email-invalido'});

      expect(chaiHttpResponse).to.have.status(400);
      expect(chaiHttpResponse.body).to.have.property('message', '"email" must be a valid email');
    });

    it('Deve retornar um erro ao tentar logar um usuário com senha inválida', async () => {
      Sinon
      .stub(Model, 'findOne')
      .resolves(usersMock.user_2);

      chaiHttpResponse = await chai
      .request(app)
      .post('/auth')
      .send({...usersMock.loginUser_2, password: '1233'});

      expect(chaiHttpResponse).to.have.status(401);
      expect(chaiHttpResponse.body).to.have.property('message', 'Invalid password');
    });

    it('Deve retornar um erro ao tentar logar faltando email', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/auth')
      .send({...usersMock.loginUser_2, email: ''});

      expect(chaiHttpResponse).to.have.status(400);
      expect(chaiHttpResponse.body).to.have.property('message', '"email" is not allowed to be empty');
    });

    it('Deve retornar um erro ao tentar logar faltando senha', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/auth')
      .send({...usersMock.loginUser_2, password: ''});

      expect(chaiHttpResponse).to.have.status(400);
      expect(chaiHttpResponse.body).to.have.property('message', '"password" is not allowed to be empty');
    });

  });

  describe('Testes do método validateUser', () => {
    afterEach(() => {
      Sinon.restore();
    });

    it('Deve retornar um erro ao tentar validar sem um token', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/auth/validate');

      expect(chaiHttpResponse).to.have.status(404);
      expect(chaiHttpResponse.body).to.have.property('message', 'token not found');

    });

    it('Deve retornar um erro ao tentar validar um token inválido', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/auth/validate')
      .set('Authorization', 'token-invalido');
      
      expect(chaiHttpResponse).to.have.status(401);
      expect(chaiHttpResponse.body).to.have.property('message', 'Invalid token');

    });

    it('Deve retornar um erro ao tentar validar um token com usuário não cadastrado', async () => {
      Sinon
      .stub(Model, 'findOne')
      .resolves(null);

      chaiHttpResponse = await chai
      .request(app)
      .get('/auth/validate')
      .set('Authorization', usersMock.token_2);
      
      expect(chaiHttpResponse).to.have.status(404);
      expect(chaiHttpResponse.body).to.have.property('message', 'User not found');

    });

    it('Deve validar um usuário com token válido', async () => {
      Sinon
      .stub(Model, 'findOne')
      .resolves(usersMock.user_2);

      chaiHttpResponse = await chai
      .request(app)
      .get('/auth/validate')
      .set('Authorization', usersMock.token_2);

      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.have.property('name', usersMock.user_2.name);
      expect(chaiHttpResponse.body).to.have.property('role', usersMock.user_2.role);

    });

  });
});
