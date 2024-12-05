import Card from "./Card/Card.jsx";
import cardsdata from "../data/data.json";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__cards">
          {cardsdata.map((item, index) => {
            return <Card data={item} key={index} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;
