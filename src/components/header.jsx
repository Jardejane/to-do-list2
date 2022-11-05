import './styles/header.css'
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./container";

export function Header() {
  return (
    <nav>
      <Container>
        <div className="header">
          <Link to="/">
            <img
              src="https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2022/06/oshinoko-destacada.jpg?w=774&quality=99&strip=all&ssl=1"
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