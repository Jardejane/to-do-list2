/* eslint-disable react-hooks/exhaustive-deps */
import '../components/styles/update.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimeForm } from "../components/component-registration/form";
import App from "../components/api/api-helper";

export function Update() {
  const { _id } = useParams();
  const [anime, setAnime] = useState([]);
  const [btxAnime, setbtxAnime] = useState(false);

  function editing() {
    setbtxAnime(!btxAnime);
  }

  async function getAnime() {
    const animes = await App.getApp().then((data) =>
      data.find((anime) => anime._id === _id)
    );
    setbtxAnime(false);
    return setAnime(animes);
  }

  useEffect(() => {
    getAnime();
  }, []);

  async function editAnime(data) {
    App.patchApp(_id, data).then(() => {
      window.location.reload();
    });
  }

  return (
    <>
      <section className='general'>
        <div>
          <h1>Anime: {anime.name}</h1>
          <button className="btn" onClick={editing}>
            {!btxAnime ? "Editar" : "Fechar"}
          </button>

          <div className="cards">
            {!btxAnime ? (
              <div className="anime-information">
               <div className='image'><img  src={anime.image} width ="70" height="60" alt="imagem de anime" /></div>

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

              <div className="anime-information2">
                <AnimeForm 
                  handleSubmit={editAnime}
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


