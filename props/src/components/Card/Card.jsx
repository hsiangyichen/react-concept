import "./Card.scss";

const Card = ({ content, title }) => {
  return (
    <section className="card-list">
      <div className="card">
        <div className="card__content">{content}</div>
        <h4 className="card__title">{title}</h4>
      </div>
    </section>
  );
};

export default Card;
