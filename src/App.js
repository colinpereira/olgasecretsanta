import "./App.css";
import { useState } from "react";
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

  const ImageHandler = (index) => {
    switch (index.index) {
      case 0:
        return (
          <div className="imageContainer">
            <img src={gang} />
          </div>
        );
      case 1:
        return (
          <div className="imageContainer">
            <img src={drugBooze} />
          </div>
        );
      case 2:
        return (
          <div className="imageContainer">
            <img src={vegan} />
          </div>
        );
      case 3:
        return (
          <div className="imageContainer">
            <img src={gang} />
          </div>
        );
      default:
        return (
          <div className="imageContainer">
            <img src={gang} />
          </div>
        );
    }
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
            </div>
            <br />
            <br />

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
            </div>
            <br />
            <h2 className="note">CLICK A BUTTON TO FIND THE ANSWER KEY</h2>
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
            <h2 className="note">
              OLGALICIOUS, OLGALICIOUS, SHE'S SO VICIOUS, SHE'S SO VICIOUS
            </h2>
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
          <h1 className="note">ANSWERS</h1>
          <br />
          <ImageHandler index={index} />
          <div className="buttonContainer">
            <button
              onClick={() => {
                setClicked(false);
              }}
            >
              Go Back
            </button>
          </div>
          <h2 className="note">Lots of Love, Colin ❤️</h2>
          <h4 className="note2">2022</h4>
        </div>
      </div>
    );
  }
}

export default App;
