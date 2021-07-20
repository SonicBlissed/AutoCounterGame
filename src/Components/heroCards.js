import React, { useState } from "react";
import Button from "@material-ui/core/Button";

function HeroCards(props) {
  //arrays
  const heroArray = [
    {
      name: "Dookie Bird",
      health: 100,
      alive: "Alive",
      id: 1,
    },
    {
      name: "Coffee Waffle",
      health: 100,
      alive: "Alive",
      id: 2,
    },
    {
      name: "Jake From Statefarm",
      health: 100,
      alive: "Alive",
      id: 3,
    },
    {
      name: "Jeff",
      health: 100,
      alive: "Alive",
      id: 4,
    },
    {
      name: "The Milk Man",
      health: 100,
      alive: "Alive",
      id: 5,
    },
  ];
  //state variables
  const { state, setState } = props;
  const [heroes, setHeroes] = useState(heroArray);

  //button layout
  // <Button
  //   variant="contained"
  //   color="secondary"
  //   size="large"
  // >

  // </Button>
  return (
    <div className="hero-cards">
      <h2 className="hero-list-title">Slay The Heroes</h2>
      {/* hero array being mapped */}
      {heroes.map((hero) => {
        return (
          <div className="hero-list">
            <Button variant="contained" color="secondary" size="large">
              <p>{hero.name}</p>
              <p>{hero.health}</p>
              <p>{hero.alive}</p>
            </Button>
          </div>
        )
      })}
    </div>
  );
}


export default HeroCards;