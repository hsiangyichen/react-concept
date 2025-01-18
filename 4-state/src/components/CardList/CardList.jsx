import "./CardList.scss";

import Card from "../Card/Card";

const CardList = ({ cardContent, activeCard, changeActiveCard }) => {
  // const cards = [
  //   { id: 1, title: "Card Title 1", content: "This is the content for card 1" },
  //   { id: 2, title: "Card Title 2", content: "This is the content for card 2" },
  // ];

  return (
    <div className="card-wrapper">
      {cardContent.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          content={card.content}
          isActive={activeCard === card.id}
          changeActiveCard={changeActiveCard}
        />
      ))}
    </div>
  );
};

export default CardList;
