import { useEffect, useState } from "react";

function Config() {
  const [isAdm, setAdm] = useState(false);

  const getRole = () => {
    const userRole = localStorage.getItem('role');

    userRole === 'admin' ? setAdm(true) : setAdm(false);
  }

  useEffect(() => {
    getRole();
  }, []);

  return (
    <section className="form">
      <h1>Quiz Bíblico</h1>
      <article className="game-explanation">
        <p className="justify-text">O jogo vai trazer perguntas que serão mais difíceis ao avançar algumas rodada. <br/> Cada resposta certa vale uma quantidade de pontos, e existe um bônus de pontos conforme o tempo que foi necessário para responder.
        </p>
        <p className="justify-text">Seus resultados ficarão salvos junto com os 5 melhores. <br/> Se não conseguir responder a pergunta, é uma oportunidade para pesquisar e aumentar seu conhecimento.</p>
      </article>
      <nav className="container-flex-row">
        <button type="button">Jogar</button>
        <button type="button">Placar</button>
        {isAdm && <button type="button">Opções de Administrador</button>}
      </nav>
    </section>
  );
}

export default Config;