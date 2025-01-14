import "./App.scss";
import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
import CardForm from "./components/CardForm/CardForm";

function App() {
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
        <CardForm />
        <CardList />

        <section className="activity-list">
          <div>
            <h3>Activity Feed</h3>
            <div className="activity-list__item">Activity</div>
            <div className="activity-list__item">Activity</div>
            <div className="activity-list__item">Activity</div>
            <div className="activity-list__item">Activity</div>
            <div className="activity-list__item">Activity</div>
            <div className="activity-list__item">Activity</div>
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
