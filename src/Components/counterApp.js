import axios from "axios";
import "./counterApp.css";
import Lockr from "lockr";
import React, { useEffect, useState } from "react";
import { setLockrCounter, saveLockr } from "../Hooks/hooks";
let commaNumber = require("comma-number");

//There's a lot going on here I'll walk you through
const Counter = (props) => {
  //1. We gotta destructure props so I dont have to type props.state. 
  //Every letter saved counts!
  const { state, setState } = props;
  //2. This state is so that when the big red button is pressed, it 
  //changes the css class. It would be helpful for tracking how many 
  //times a user has clicked the button as well if maybe in the future I 
  //added leaderboards for that sort of thing
  const [press, setPress] = useState(false);
  //3. As it states, this is a function that runs when the app is first
  //loaded. It does an api call to worldtimeapi.org to get unixtime. 
  //Which is basically the amount of seconds that have past since some 
  //time in 1970. I take that time, add 2 seconds to account for the 
  //delay making the request, then subtract it by the last time stamp 
  //saved in local storage. Then I take that result and multiply it by 
  //the user's CPS (Counts Per Second)
  const onLoad = () => {
    axios
      .get("http://worldtimeapi.org/api/ip")
      .then((res) => {
        console.log(res.data.unixtime);
        const idler = () => {
          return res.data.unixtime + 2 - (Lockr.get("timeStamp") || 0);
        };

        setState((state) => ({
          ...state,
          counter:
            (state.minions +
              state.minionSupervisors * 3 +
              state.minionManagers * 9 +
              state.grandmas * 18 +
              state.dads * 36 +
              state.aliens * 72 +
              state.angels * 144) *
              idler() +
            state.counter,
        }));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  //4. This is a function that keeps track of CPS (Counts Per Second)
  //which means how many points the workers you bought from the shop are 
  //getting you per second
  const perSecond = () => {
    return (
      state.minions +
      state.minionSupervisors * 3 +
      state.minionManagers * 9 +
      state.grandmas * 18 +
      state.dads * 36 +
      state.aliens * 72 +
      state.angels * 144
    );
  };
  //5. This useEffect adds your CPS every second to the counter(big 
  //numbers in the middle of the big red button)
  useEffect(() => {
    const timer = setInterval(() => {
      setState((state) => ({
        ...state,
        counter:
          state.counter +
          state.minions +
          state.minionSupervisors * 3 +
          state.minionManagers * 9 +
          state.grandmas * 18 +
          state.dads * 36 +
          state.aliens * 72 +
          state.angels * 144,
      }));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line
  }, []);
  //6. This useEffect saves your progress every 2 seconds. It isn't every
  // second because I felt it was unnecessary and it ran smoother doing 
  //it every 2 seconds, not to mention it saves everytime state is 
  //updated anyways. It's redundant to prevent users from changing 
  //localstorage and cheating
  useEffect(() => {
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    sleep(2000).then(() => {
      saveLockr(state);
    });
  }, [state]);
  //7. Changes the class name when the big red button is pressed so that 
  //it does the animation
  const increased = () => {
    if (press === true) {
      return "increased";
    } else {
      return "increase";
    }
  };
  //8. This is the actual onClick function that runs every time you press 
  //the button
  const onClickIncrease = () => {
    setState((state) => ({
      ...state,
      counter: state.counter + 1,
    }));
    setLockrCounter(state);
    setPress(true);
    setTimeout(() => {
      setPress(false);
    }, 1000);
  };
  //9. It's our api call shoved into a useEffect! I did it this way so 
  //that if I wanted to put the onLoad function in a seperate file at 
  //some point, it would be easier.
  useEffect(() => {
    onLoad();
    // eslint-disable-next-line
  }, []);

  //10. Ahhhh finally the JSX. commaNumber is a dependancy I installed to 
  //automatically put commas on numbers past 3 digits. It comes in handy!
  return (
    <div className="counter">
      <button className={increased()} onClick={onClickIncrease}>
        <span className="counterText">{commaNumber(state.counter)}</span>
        <p>CPS: {commaNumber(perSecond())}</p>
      </button>
      <br />
    </div>
  );
};

export default Counter;
