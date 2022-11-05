import '../components/styles/home.css'
import React from "react";
import { useEffect, useState } from "react";
import App from "../components/api/api-helper";
import { AnimeCard } from "../components/card";


export function Home() {

  const [anime, setAnime] = useState([]);

  async function allAnime() {
    const animes = await App.getApp();
    return setAnime(animes);
  }

  async function deleteAnime(_id){
    const animes = await App.deleteApp(_id)
    return setAnime(animes?.map((animes) => animes._id !== _id))
  }

  useEffect(() => {
    allAnime();
  }, []);
  return (
    <section className="all">
      <h1>Animes</h1>

      <section className="card">
        {anime?.map((anime, index) => (
          <AnimeCard
            key={index}
            image={anime.image}
            _id={anime._id}
            name={anime.name}
            character={anime.character}
            year={anime.year}
            description={anime.description}
            handleRemove = {deleteAnime}
          />
        ))}
      </section>
    </section>
  );
}
