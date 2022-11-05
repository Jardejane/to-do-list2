import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../container/container";

export function Header() {
  return (
    <nav>
      <Container>
        <div className="header">
          <Link to="/">
            <img
              src="https://img.freepik.com/vetores-premium/design-de-logotipo-de-mascote-de-anime-em-estilo-moderno_404419-56.jpg?w=360"
              alt="Imagem de anime"
            />
          </Link>

          <ul className="list">
            <li className="item">
              <Link to="/">Página Principal</Link>
            </li>
            <li className="item">
              <Link to="/cadastro">Cadastro</Link>
            </li>
            <li className="item">
              <Link to="/pesquisa">Pesquisar Anime</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
