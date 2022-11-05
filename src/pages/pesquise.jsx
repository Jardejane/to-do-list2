import "../components/styles/card.css";
import React from "react";
import { useState } from "react";
import { AnimeCard } from "../components/card";
import App from "../components/api/api-helper";
// {
//     image: "",
//     name: "",
//     character: "",
//     year: "",
//     description: "",
//     _id: "",
//   }
App.getIdApp("6366d5b9f03a567ea7569de9");
export function Pesquise() {
  const [input, setInput] = useState([]);
  const { animeId, setAnimeId } = useState([]);

  async function getId(_id) {
    const animes = await App.getIdApp(_id);
    console.log(animes.name + "anime");
    return setAnimeId(animes.filter((animes) => animes._id !== _id));
  }
  console.log(App.getIdApp("6366d5b9f03a567ea7569de9"))
  console.log(setAnimeId + "set")
  return (
    <section className="contairner">
      <div>
        <div className="input-group">
          <input
            required=""
            type="text"
            name="number"
            className="input"
            onChange={(event) => setInput(event.target.value)}
          />
          <label className="user-label">Digite o Id</label>
        </div>
        <button className="find" onClick={() => getId(input)}>
          Pesquisar Anime
        </button>
      </div>

      <div>
        {animeId?.map((animeId) => (
          <AnimeCard
            image={animeId.image}
            name={animeId.name}
            character={animeId.character}
            year={animeId.year}
            description={animeId.description}
            _id={animeId._id}
          />
        ))}
      </div>

      {/* <div>
        {animeId._id !== "" ? (
          <AnimeCard
            image={animeId.image}
            name={animeId.name}
            character={animeId.character}
            year={animeId.year}
            description={animeId.description}
            _id={animeId._id}
          />
        ) : (
          <span></span>
        )}
      </div> */}
    </section>
  );
}
