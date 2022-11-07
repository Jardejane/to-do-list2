import "./styles/card.css";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export function AnimeCard({
  image,
  name,
  character,
  year,
  _id,
  description,
  handleRemove,
}) {
 

  const remove = (e) => {
    e.preventDefault();
    handleRemove(_id);
  };

  return (
    <section className="container-card">
      <img className="image" src={image} alt="Anime" />
      <section className="all-text-pai">
        <section className="all-text">
          <p>
            <span >Id:</span> { _id}
          </p>
          <p>
            <span>Nome:</span> {name}
          </p>
          <p>
            <span>Personagem:</span> {character}
          </p>
          <p>
            <span>Ano:</span> {year}
          </p>
          <p>
            <span>Descrição:</span> {description}
          </p>
        </section>
      </section>
      <section className="informações-button">
      

        <Link className="remover" to= {`/edit/${_id}`} >
                <BsPencil/>
         </Link>

        {handleRemove ? (
          <button className="remover" onClick={remove}>
            <BsFillTrashFill />
          </button>
        ) : (
          <span></span>
        )}
      </section>
    </section>
  );
}
// npx react-modal