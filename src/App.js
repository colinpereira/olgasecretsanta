import "./App.css";
import react, { useEffect, useState } from "react";
import Background from "./images/background.jpeg";
import funnyOlga from "./funnyOlga";
import drugBooze from "./images/drugBooze.png";
import gang from "./images/gang.png";
import vegan from "./images/vegan.png";

function App() {
  const crosswords = [
    "Garden Party Gang",
    "Familia turned druggie and boozie",
    "The World of Veganism",
    "Music to your ears",
  ];
  const [whichClicked, setWhichClicked] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [index, setIndex] = useState(0);
  const [alert, setAlert] = useState(false);

  const randomImage = funnyOlga[Math.floor(Math.random() * funnyOlga.length)];

  const handleCrosswordButton = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
      setClicked(true);
    }, 3000);
  };

  if (!clicked) {
    if (!alert) {
      return (
        <div
          className="mainContainer"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="App">
            <div className="headerContainer">
              <h1>SECRET SANTA 2022</h1>
              <h2>WELCOME TO YOUR ANSWERS OLGALICIOUS!</h2>
              <h2>CLICK A BUTTON TO FIND THE ANSWER KEY</h2>
            </div>
            <div className="buttonContainer">
              {crosswords.map((c, i) => {
                return (
                  <button
                    onClick={() => {
                      setIndex(i);
                      handleCrosswordButton();
                    }}
                  >
                    {c}
                  </button>
                );
              })}
              {alert && (
                <div className="alert-container">
                  <div className="alert-inner">Alert! Alert!</div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="mainContainer"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="App">
            <div className="imageContainer">
              <img src={randomImage} />
            </div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div
        className="mainContainer"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="App">
          <h1>ANSWERS</h1>
          <br />
          <img src={gang} />
          <div className="buttonContainer">
            <button
              onClick={() => {
                setClicked(false);
              }}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
