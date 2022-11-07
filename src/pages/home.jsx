import '../components/styles/home.css';
import React from 'react';
import { useEffect, useState } from 'react';
import App from '../components/api/api-helper';
import { AnimeCard } from '../components/card';

export function Home({ animeData }) {
  const [anime, setAnime] = useState(animeData || []);
  async function allAnime() {
    const animes = await App.getApp();
    return setAnime(animes);
  }

  async function deleteAnime(_id) {
    const newAnime = anime.filter((animess) => animess._id !== _id);
    setAnime(newAnime);
    await App.deleteApp(_id);
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
            handleRemove={deleteAnime}
          />
        ))}
      </section>
    </section>
  );
}
