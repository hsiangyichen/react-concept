import "./Card.scss";
// import CardForm from "../CardForm/CardForm";

const Card = ({ content, title }) => {
  const clickHandler = () => {
    console.log("Title:", title);
    console.log("Content:", content);
  };

  return (
    <section className="card-list">
      <div className="card" onClick={clickHandler}>
        <div className="card__content">{content}</div>
        <h4 className="card__title">{title}</h4>
      </div>
    </section>
  );
};

export default Card;
