import axios from "axios";
import "./counterApp.css";
import Lockr from "lockr";
import React, { useEffect, useState } from "react";
import { setLockrCounter, saveLockr } from "../Hooks/hooks";
let commaNumber = require("comma-number");

const Counter = (props) => {
  const { state, setState } = props;
  const [press, setPress] = useState(false);

  const onLoad = () => {
    axios.get("http://worldtimeapi.org/api/ip").then((res) => {
      const idler = () => {
        return res.data.unixtime + 1 - Lockr.get("timeStamp");
      };
      // console.log(idler())
      setState((state) => ({
        minions: state.minions,
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
        minionSupervisors: state.minionSupervisors,
        minionManagers: state.minionManagers,
        grandmas: state.grandmas,
        dads: state.dads,
        aliens: state.aliens,
        angels: state.angels,
      }));
    });
  };

  useEffect(() => {
    onLoad();
    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   console.log(idler())
  // setState((state) => ({
  //   minions: state.minions,
  //     counter: (state.minions + (state.minionSupervisors*3) + (state.minionManagers * 9) +
  //     (state.grandmas * 18) +
  //     (state.dads * 36) +
  //     (state.aliens * 72) +
  //     (state.angels * 144))*idler()+(state.counter),
  //     minionSupervisors: state.minionSupervisors,
  //     minionManagers: state.minionManagers,
  //     grandmas: state.grandmas,
  //     dads: state.dads,
  //     aliens: state.aliens,
  //     angels: state.angels,
  // }))
  // },[])

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

  useEffect(() => {
    const timer = setInterval(() => {
      setState((state) => ({
        minions: state.minions,
        counter:
          state.counter +
          state.minions +
          state.minionSupervisors * 3 +
          state.minionManagers * 9 +
          state.grandmas * 18 +
          state.dads * 36 +
          state.aliens * 72 +
          state.angels * 144,
        minionSupervisors: state.minionSupervisors,
        minionManagers: state.minionManagers,
        grandmas: state.grandmas,
        dads: state.dads,
        aliens: state.aliens,
        angels: state.angels,
      }));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    sleep(2000).then(()=> {

      saveLockr(state)
    })
  },[state]);

  const increased = () => {
    if (press === true) {
      return "increased";
    } else {
      return "increase";
    }
  };

  const onClickIncrease = () => {
    setState((state) => ({
      minions: state.minions,
      counter: state.counter + 1,
      minionSupervisors: state.minionSupervisors,
      minionManagers: state.minionManagers,
      grandmas: state.grandmas,
      dads: state.dads,
      aliens: state.aliens,
      angels: state.angels,
    }));
    setLockrCounter(state);
    setPress(true);
    setTimeout(() => {
      setPress(false);
    }, 1000);
  };

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
