import "./Card.scss";
// import CardForm from "../CardForm/CardForm";

const Card = ({ id, content, title, isActive, changeActiveCard }) => {
  const clickHandler = () => {
    changeActiveCard(id);
    console.log("Title:", title);
    console.log("Content:", content);
    console.log(`Card ID: ${id}, isActive: ${isActive}`);
  };

  return (
    <section className="card-list">
      <div
        className={`card ${isActive ? "card--active" : ""}`}
        onClick={clickHandler}
      >
        <div className="card__content">{content}</div>
        <h4 className="card__title">{title}</h4>
      </div>
    </section>
  );
};

export default Card;
