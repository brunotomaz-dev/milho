import React from "react";
import { useNavigate } from "react-router-dom";

const GameGrupo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <main className="main-container">
      <section className="form">
        <h1>Em Construção</h1>
        <p>Em breve estará disponível para jogar em 2 grupos, será intercalado, cada grupo joga uma sessão de 5 perguntas.</p>
        <button type="button" onClick={() => navigate('/config')}>Voltar</button>
      </section>
    </main>
  );
}

export default GameGrupo;