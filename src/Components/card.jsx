import "../styles/card.css";

function Card({ name, img, link, description }) {
  return (
    <a className="alinkCard" href={link} target="_blank">
      <div className="box">
        <div className="description">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>

        <img src={img} alt="" />
      </div>
    </a>
  );
}

export default Card;
