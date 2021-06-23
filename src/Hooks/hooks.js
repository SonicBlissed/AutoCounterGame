import Lockr from "lockr";

const setLockrCounter = (state) => {
  Lockr.set("counter", state.counter + 1);
};

const setLockrMinions = (state) => {
  Lockr.set("minions", state.minions + 1);
};

const setLockrMinionSupervisor = (state) => {
  Lockr.set("minionSupervisors", state.minionSupervisors + 1);
};

const setLockrMinionManager = (state) => {
  Lockr.set("minionManagers", state.minionManagers + 1);
};

const setLockrGrandma = (state) => {
  Lockr.set("grandmas", state.grandmas + 1);
};

const setLockrDad = (state) => {
  Lockr.set("dads", state.dads + 1);
};

const setLockrAlien = (state) => {
  Lockr.set("aliens", state.aliens + 1);
};

const setLockrAngel = (state) => {
  Lockr.set("angels", state.angels + 1);
};

const saveLockr = (state) => {

  const d = new Date() /1000;

  const timeStamp = () => {
    return Math.round(d)
  }


  Lockr.set("counter", state.counter);
  Lockr.set("minions", state.minions);
  Lockr.set("minionSupervisors", state.minionSupervisors);
  Lockr.set("minionManagers", state.minionManagers);
  Lockr.set("grandmas", state.grandmas);
  Lockr.set("dads", state.dads);
  Lockr.set("aliens", state.aliens);
  Lockr.set("angels", state.angels);
  Lockr.set("timeStamp", timeStamp())

}

export {
  setLockrCounter,
  setLockrMinions,
  saveLockr,
  setLockrMinionSupervisor,
  setLockrMinionManager,
  setLockrGrandma,
  setLockrDad,
  setLockrAlien,
  setLockrAngel,
};
