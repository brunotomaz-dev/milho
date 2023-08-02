import chai from 'chai';
import chaiHttp from 'chai-http';
import { Model } from 'mongoose';
import * as Sinon from 'sinon';
import { Response } from 'superagent';

import App from '../../app';
import usersMock from '../mocks/users.mock';

chai.use(chaiHttp);

const { app } = new App();
const { expect } = chai;

describe('Testes de integração do controller NewUser', () => {
  let chaiHttpResponse: Response;
  afterEach(() => {
    Sinon.restore();
  });
  describe('Testes do método create', () => {
    it('Deve criar um novo usuário', async () => {
      Sinon
      .stub(Model, 'findOne')
      .resolves(null);

      Sinon
      .stub(Model, 'create')
      .resolves(usersMock.user_2 as any);
      
      chaiHttpResponse = await chai
      .request(app)
      .post('/auth/signup')
      .send(usersMock.user_2);

      expect(chaiHttpResponse).to.have.status(201);
      expect(chaiHttpResponse.body).to.have.property('token');
    });

    it('Deve criar um novo usuário mesmo se role não for informada', async () => {
      Sinon
      .stub(Model, 'findOne')
      .resolves(null);

      Sinon
      .stub(Model, 'create')
      .resolves(usersMock.user_2 as any);
      
      chaiHttpResponse = await chai
      .request(app)
      .post('/auth/signup')
      .send({...usersMock.user_2, role: undefined});

      expect(chaiHttpResponse).to.have.status(201);
      expect(chaiHttpResponse.body).to.have.property('token');
    });

    it('Deve retornar um erro ao tentar criar um usuário com email já cadastrado', async () => {
      Sinon
      .stub(Model, 'findOne')
      .resolves(usersMock.user_2);

      chaiHttpResponse = await chai
      .request(app)
      .post('/auth/signup')
      .send(usersMock.user_2);

      expect(chaiHttpResponse).to.have.status(409);
      expect(chaiHttpResponse.body).to.have.property('message', 'User already exists');
    });

  });
});