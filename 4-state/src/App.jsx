import "./App.scss";

import { useState } from "react";
import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
import CardForm from "./components/CardForm/CardForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [cardContent, setCardContent] = useState([
    {
      id: uuidv4(),
      title: "Card Title 1",
      content: "This is the content for card 1",
    },
    {
      id: uuidv4(),
      title: "Card Title 2",
      content: "This is the content for card 2",
    },
  ]);
  const [activeCard, setActiveCard] = useState(null);

  function addCard(title, content) {
    const newCard = {
      id: uuidv4(),
      title,
      content,
    };
    setCardContent([...cardContent, newCard]);
  }

  const changeActiveCard = (id) => {
    console.log(`Active Card ID changed to: ${id}`);
    setActiveCard(id);
  };

  return (
    <>
      <Header logo="Cool Logo" />
      <section className="hero">
        <div>
          <h2 className="hero__title">Hero Title</h2>
          <h3 className="hero__tagline">Tag Line</h3>
        </div>
      </section>
      <main>
        <CardList
          cardContent={cardContent}
          activeCard={activeCard}
          changeActiveCard={changeActiveCard}
        />
        <section className="card-form">
          <div>
            <div className="card-form__item">
              <CardForm addCard={addCard} />
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <section className="footer footer--left">Left Footer</section>
        <section className="footer footer--center">Center Footer</section>
        <section className="footer footer--right">Right Footer</section>
      </footer>
    </>
  );
}

export default App;
