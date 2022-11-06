import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../components/api/api";
import { AnimeForm } from "../components/component-registration/form";

export function Update() {
  const { _id } = useParams();
  const [anime, setAnime] = useState([]);
  const [btxAnime, setbtxAnime] = useState(false);

  async function patch() {
   return await api
      .patch(`/anime/${_id}`, {
        name: anime.name,
        character: anime.character,
        year: anime.year,
        description: anime.description,
      })
      .then((response) => {
        console.log(response)
        setAnime(response.data);
        setbtxAnime(false);
      })

      .catch((err) => console.log(err));
  }
  function editing() {
    setbtxAnime(!btxAnime);
 
  }
  useEffect(() => {
    patch()
    console.lo(patch());
  }, []);

  return (
    <>
      <section>
        <div>
          <h1>Anime: {anime.name}</h1>
          <button className="btn" onClick={editing}>
            {!btxAnime ? "Editar Projeto" : "Fechar"}
          </button>

          <div className="cards">
            {!btxAnime ? (
              <div className="anime-information">
                <p>
                  <span>Id:</span> {anime._id}{" "}
                </p>
                <p>
                  <span>Nome:</span> {anime.name}{" "}
                </p>
                <p>
                  <span>Personagem:</span> {anime.character}{" "}
                </p>
                <p>
                  <span>Ano:</span> {anime.year}{" "}
                </p>
                <p>
                  <span>Descrição:</span> {anime.description}{" "}
                </p>
              </div>
            ) : (
              <div className="film-card">
                <AnimeForm
                  handleSubmit={patch}
                  btnText="Concluir edição"
                  animeData={anime}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
