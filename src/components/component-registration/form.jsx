import Buttonform from './button-forms.jsx';
import Input from './input.jsx';
import { useState } from 'react';

export function AnimeForm({ handleSubmit, btnText, animeData }) {
  const [anime, setAnime] = useState(animeData || []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(anime);
  };

  function handleChange(e) {
    setAnime({ ...anime, [e.target.name]: e.target.value });
  }
  console.log(animeData);
  return (
    <section>
      <form onSubmit={submit}>
        <Input
          type="text"
          text="Link da capa"
          name="image"
          placeholder="Adicione o Link"
          handleOnChange={handleChange}
          value={anime.image ? anime.image : ''}
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
          type="text"
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
        <Buttonform text={btnText} />
      </form>
    </section>
  );
}
