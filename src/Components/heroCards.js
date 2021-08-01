import React, { useState } from "react";
import Button from "@material-ui/core/Button";

function HeroCards(props) {
  //arrays
  const banana = (id) => { 
  setHeroes((heroes) => 
  heroes.map((hero) => {
    return hero.id === id ? {
      ...hero,
      alive: "Dead",
      disableBtn: true,
    }
    : hero
  }))
  }
  const heroArray = [
    {
      name: "Dookie Bird",
      health: 100,
      alive: "Alive",
      id: 1,
      disableBtn: false,
    },
    {
      name: "Coffee Waffle",
      health: 100,
      alive: "Alive",
      id: 2,
      disableBtn: false,
    },
    {
      name: "Jake From Statefarm",
      health: 100,
      alive: "Alive",
      id: 3,
      disableBtn: false,
    },
    {
      name: "Jeff",
      health: 100,
      alive: "Alive",
      id: 4,
      disableBtn: false,
    },
    {
      name: "The Milk Man",
      health: 100,
      alive: "Alive",
      id: 5,
      disableBtn: false,
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
          <div className="hero-list" key={hero.id}>
            <Button variant="contained" disabled={hero.disableBtn} color="secondary" size="large" onClick={() => banana(hero.id)}>
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