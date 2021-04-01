import './counterApp.css'
import React, { useEffect, useState } from "react";
import { setLockrCounter, saveLockr} from "../Hooks/hooks";
let commaNumber = require('comma-number');


const Counter = (props) => {

 
const {state, setState} = props
const [press, setPress] = useState(false)

const perSecond = () => {
  return state.minions +
   (state.minionSupervisors*3) +
    (state.minionManagers * 9) + 
    (state.grandmas * 12) + 
    (state.dads * 17) + 
    (state.aliens * 25) +
    (state.angels * 75);
}
 

  useEffect(() => {
    const timer = setInterval(() => {
      setState((state) => ({
        minions: state.minions,
        counter: state.counter + state.minions + (state.minionSupervisors*3) + (state.minionManagers * 9) + 
        (state.grandmas * 12) + 
        (state.dads * 17) + 
        (state.aliens * 25) +
        (state.angels * 75),
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
  },[]);
  
saveLockr(state);

 
  const increased = () => {
    if(press === true){
      return 'increased'
    } else {
      return 'increase'
    }
  }


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
    setPress(true)
    setTimeout(()=> {
      setPress(false)
    },1000)
  };



  return (
    <div className="counter">
      <button className={increased()} onClick={onClickIncrease}>
        <span className='counterText'>
      {commaNumber(state.counter)}
        </span>
      <p>CPS: {perSecond()}</p>
      </button>
      <br/>
    </div>
  );
};

export default Counter;
