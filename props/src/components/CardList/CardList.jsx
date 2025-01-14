import "./CardList.scss";

import Card from "../Card/Card";

const CardList = () => {
  const cards = [
    { id: 1, title: "Card Title 1", content: "This is the content for card 1" },
    { id: 2, title: "Card Title 2", content: "This is the content for card 2" },
  ];

  return (
    <>
      {/* <Card content={"card 1"} title={"card 1"} />
      <Card content={"card 2"} title={"card 2"} /> */}
      {cards.map((card) => (
        <Card key={card.id} title={card.title} content={card.content} />
      ))}
    </>
  );
};

export default CardList;
