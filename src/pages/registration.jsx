import "../components/styles/registration.css";
import Input from "../components/component-registration/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import App from "../components/api/api-helper";

export function Registration() {
  const navigate = useNavigate();
  const [anime, setAnime] = useState({});

  const submit = (e) => {
    e.preventDefault();
    App.postApp({ ...anime, year: Number(anime.year) });
    navigate("/");
  };

  function handleChange(e) {
    setAnime({ ...anime, [e.target.name]: e.target.value });
  }

  return (
    <section className="form">
      <form onSubmit={submit}>
        <h1>Cadastre seu Anime</h1>
        <Input
          type="text"
          text="Link da capa"
          name="image"
          placeholder="Adicione o link"
          handleOnChange={handleChange}
          value={anime.image ? anime.image : ""}
        />

        <Input
          type="text"
          text="Nome do anime"
          name="name"
          placeholder="Adicione o nome do anime"
          handleOnChange={handleChange}
          value={anime.name}
        />

        <Input
          type="text"
          text="Nome do personagem"
          name="character"
          placeholder="Adicione o personagem"
          handleOnChange={handleChange}
          value={anime.character}
        />

        <Input
          type="number"
          text="Ano"
          name="year"
          placeholder="Adicione o ano"
          handleOnChange={handleChange}
          value={anime.year}
        />

        <Input
          type="text"
          text="Descrição"
          name="description"
          placeholder="Adicione a descrição"
          handleOnChange={handleChange}
          value={anime.description}
        />

        <button type="submit" className="btn-submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span> Cadastre
        </button>
      </form>
    </section>
  );
}
