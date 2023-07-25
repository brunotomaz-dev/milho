import chai from "chai";
import chaiAsPromised from 'chai-as-promised';
import chaiHttp from "chai-http";
import sinon from "sinon";
import App from "../../app";

const { expect } = chai;
chai.use(chaiHttp);
chai.use(chaiAsPromised);

describe("Teste do app", () => {
  let app: App;
  const PORT = process.env.PORT || 3000;
  let connectToDatabaseStub: sinon.SinonStub<any[], Promise<void>>;

  beforeEach(() => {
    connectToDatabaseStub = sinon.stub();
    connectToDatabaseStub.resolves();

    app = new App(connectToDatabaseStub);

  });

  it('Deve configurar corretamente os headers de controle de acesso', async () => {
    const response = await chai.request(app.app).get('/');
    
    expect(response.header['access-control-allow-origin']).to.be.equal('*');
    expect(response.header['access-control-allow-methods']).to.be.equal('GET, PUT, POST, DELETE, PATCH, OPTIONS');
    expect(response.header['access-control-allow-headers']).to.be.equal('*');
  });

  it('Deve iniciar corretamente o servidor', async () => {
    const response = await chai.request(app.app).get('/');
    
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal({ message: 'Hello World' });
  });

  it('Deve conectar corretamente ao banco de dados', async () => {
    await app.start(PORT);
    
    expect(connectToDatabaseStub.calledOnce).to.be.true;
  });

  it('Deve retornar um erro ao falhar a conexão com o banco de dados', async () => {
    const mockError = new Error('Mock error connection');
    connectToDatabaseStub.rejects(mockError);

    app.start(PORT).catch(() => {});

    expect(connectToDatabaseStub.calledOnce).to.be.true;

  });
});
