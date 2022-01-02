import React from "react";
import "./styles.css";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { IconButton } from "@material-ui/core";
var musicLib = {
  Happy: [
    { name: "Happy Together", singer: "The turtles" },
    { name: "Don't Worry Be Happy", singer: "Bobby McFerrin" },
    { name: "Happy Go Lucky Me", singer: "Paul Evans" },
    { name: "Shiny Happy People", singer: "R.E.M" },
    { name: "My Happy Ending", singer: "Avril Lavigne" }
  ],
  Sad: [
    { name: "Zaroori Tha", singer: "Rahat Fateh Ali Khan" },
    { name: "Ek Tarfa", singer: "Darshan Rawal" },
    { name: "Ek Raat", singer: "Vilen" },
    { name: "Someone You Loved", singer: "Lewis Capaldi" },
    { name: "No time to Die", singer: "Billie Eilish" },
    { name: "Tujhe Bhula Diya", singer: "Mohit Chauhan" }
  ],
  Party: [
    { name: "Abhi toh Party Shuru Hui hai", singer: "Badshah" },
    { name: "Lungi Dance", singer: "Yo Yo Honey Singh" },
    { name: "Tamma Tamma Again", singer: "Badshah" },
    { name: "Kala Chashma", singer: "Badshah" },
    { name: "London Thumakda", singer: "Neha Kakkar" },
    { name: "Dil Chori", singer: "Yo Yo Honey Singh" },
    { name: "Rock Tha Party", singer: "Bombay Rockers" }
  ],
  Calm: [
    { name: "Pure Shores", singer: "All Saints" },
    { name: "Strawberry Swing", singer: "Coldplay" },
    { name: "Someone Like You", singer: "Adele" },
    { name: "Weightless", singer: "Marconi Union" },
    { name: "This Town", singer: "Niall Horan" }
  ],
  Love: [
    { name: "Perfect", singer: "Ed Sheeran" },
    { name: "You are Still the one", singer: "Shania Twain" },
    { name: "Butterflies", singer: "Kacey Musgraves" },
    { name: "Tum Hi Ho", singer: "Arijit Singh" },
    { name: "Ajj Din Chadheya", singer: "Rahat Fateh Ali Khan" },
    { name: "O Saathi", singer: "Atif Aslam" },
    { name: "Dil Ko Karar Aya", singer: "Yaseer Desai" }
  ]
};
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${"/img/dance-bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "block",
    overflow: "hidden"
  }
}));

export default function App() {
  function playMusic(item) {}
  const classes = useStyles();
  const [selectedGenre, setGenre] = useState("Love");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className={classes.root}>
      <div className="App">
        <h1 className="headi">Musify</h1>
        <h3> Hey Music Lover! Choose Music According to your mood</h3>

        <div>
          {Object.keys(musicLib).map((genre) => (
            <button
              onClick={() => genreClickHandler(genre)}
              style={{
                cursor: "pointer",
                background: "#1db954",
                color: "#191414",
                borderRadius: "0.5rem",
                padding: "0.5rem  1rem",
                border: "1px solid black",
                boxShadow: " 3px 5px 5px rgb(255, 255, 255, 0.2)",
                margin: "1rem 0.3rem"
              }}
            >
              {genre}
            </button>
          ))}
          <hr />
          <div style={{ textAlign: "left" }}>
            <ul style={{ paddingInlineStart: "0" }}>
              {musicLib[selectedGenre].map((music) => (
                <li
                  key={music.name}
                  style={{
                    listStyle: "none",
                    padding: "1rem",
                    border: "1px solid #D1D5DB",
                    width: "70%",
                    margin: "1rem 0rem",
                    borderRadius: "0.5rem",
                    boxShadow: "10px 10px 5px rgb(255, 255, 255, 0.2)"
                  }}
                >
                  {" "}
                  <div style={{ fontSize: "larger" }}> {music.name} </div>
                  <div
                    style={{
                      fontSize: "smaller",
                      color: "white",
                      marginTop: "5px"
                    }}
                  >
                    {" "}
                    {music.singer}
                  </div>
                  <IconButton>
                    <PlayCircleOutlineIcon
                      className="play"
                      onClick={playMusic}
                    />
                  </IconButton>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
