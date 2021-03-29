import React from "react";
import Lockr from "lockr";

const setLockrCounter = (state) => {
  Lockr.set("counter", state.counter + 1);
};

const setLockrMinions = (state) => {
  Lockr.set("minions", state.minions + 1);
};

const saveLockr = (state) => {
  Lockr.set("counter", state.counter);
  Lockr.set('minions', state.minions)
};


const loadLockr = () => {
    const savedDataCounter = Lockr.get('counter');
    const savedDataMinions = Lockr.get('minions');
    
}

export { setLockrCounter, setLockrMinions, saveLockr };
