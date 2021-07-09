import React from "react";
import {
    disabledHelperMinion,
    disabledHelperMinionSupervisor,
    disabledHelperMinionManager,
    disabledHelperGrandma,
    disabledHelperDad,
    disabledHelperAlien,
    disabledHelperAngel,
} from "../ButtonHelpers/disableHelpers";
import {
  setLockrMinions,
  setLockrMinionSupervisor,
  setLockrMinionManager,
  setLockrGrandma,
  setLockrDad,
  setLockrAlien,
  setLockrAngel,
} from "../Hooks/hooks";
import {
  costCalculatorMinion,
  costCalculatorMinionSupervisor,
  costCalculatorMinionManager,
  costCalculatorGrandma,
  costCalculatorDad,
  costCalculatorAlien,
  costCalculatorAngel,
} from "../Calculators/calculators";
import Lockr from "lockr";
import "./shopCard.css";
import Button from "@material-ui/core/Button";
let commaNumber = require('comma-number');

const Shop = (props) => {
  const { state, setState } = props;



  function onClickMinion() {
    if (state.counter < costCalculatorMinion(state)) {
      console.log(`you don't have ${costCalculatorMinion(state)} to spend`);
    } else {
      setState((state) => ({
        ...state, minions: state.minions + 1,
        counter: state.counter - costCalculatorMinion(state)
      }));
      setLockrMinions(state);
      Lockr.set("counter", state.counter - costCalculatorMinion(state));
    }
  }

  function onClickMinionSupervisor() {
    if (state.counter < costCalculatorMinionSupervisor(state)) {
      console.log(
        `you don't have ${costCalculatorMinionSupervisor(state)} to spend`
      );
    } else {
      setState((state) => ({
        ...state, counter: state.counter - costCalculatorMinionSupervisor(state),
        minionSupervisors: state.minionSupervisors + 1
      }));
      setLockrMinionSupervisor(state);
      Lockr.set(
        "counter",
        state.counter - costCalculatorMinionSupervisor(state)
      );
    }
  }

  function onClickMinionManager() {
    if (state.counter < costCalculatorMinionManager(state)) {
      console.log(
        `you don't have ${costCalculatorMinionManager(state)} to spend`
      );
    } else {
      setState((state) => ({
       ...state, counter: state.counter - costCalculatorMinionManager(state),
       minionManagers: state.minionManagers + 1,
      }));
      setLockrMinionManager(state);
      Lockr.set("counter", state.counter - costCalculatorMinionManager(state));
    }
  }

  function onClickGrandma() {
    if (state.counter < costCalculatorGrandma(state)) {
      console.log(
        `you don't have ${costCalculatorGrandma(state)} to spend`
      );
    } else {
      setState((state) => ({
        ...state, counter: state.counter - costCalculatorGrandma(state),
        grandmas: state.grandmas + 1
      }));
      setLockrGrandma(state);
      Lockr.set("counter", state.counter - costCalculatorGrandma(state));
    }
  }

  function onClickDad() {
    if (state.counter < costCalculatorDad(state)) {
      console.log(
        `you don't have ${costCalculatorDad(state)} to spend`
      );
    } else {
      setState((state) => ({
        ...state, counter: state.counter - costCalculatorDad(state),
        dads: state.dads + 1
      }));
      setLockrDad(state);
      Lockr.set("counter", state.counter - costCalculatorDad(state));
    }
  }

  function onClickAlien() {
    if (state.counter < costCalculatorAlien(state)) {
      console.log(
        `you don't have ${costCalculatorAlien(state)} to spend`
      );
    } else {
      setState((state) => ({
        ...state, counter: state.counter - costCalculatorAlien(state),
        aliens: state.aliens + 1
      }));
      setLockrAlien(state);
      Lockr.set("counter", state.counter - costCalculatorAlien(state));
    }
  }

  function onClickAngel() {
    if (state.counter < costCalculatorAngel(state)) {
      console.log(
        `you don't have ${costCalculatorAngel(state)} to spend`
      );
    } else {
      setState((state) => ({
        ...state, counter: state.counter - costCalculatorAngel(state),
        angels: state.angels + 1
      }));
      setLockrAngel(state);
      Lockr.set("counter", state.counter - costCalculatorAngel(state));
    }
  }




  return (
    <div className="shopCard">
      <Button
        variant="contained"
        color="secondary"
        size="large"
        disabled={disabledHelperMinion(state)}
        onClick={onClickMinion}
      >
        <h4 className="minionCount">
          Minions: {commaNumber(state.minions)}
          <br />
          <br />
        </h4>
        <br />
        {commaNumber(costCalculatorMinion(state))}
      </Button>
      <br />
      <Button
        variant="contained"
        color="secondary"
        size="large"
        disabled={disabledHelperMinionSupervisor(state)}
        onClick={onClickMinionSupervisor}
      >
        <h4 className="minionCount">
          Supervisors: {commaNumber(state.minionSupervisors)}
          <br />
          <br />
        </h4>
        <br />
        {commaNumber(costCalculatorMinionSupervisor(state))}
      </Button>
      <br />
      <Button
        variant="contained"
        color="secondary"
        size="large"
        disabled={disabledHelperMinionManager(state)}
        onClick={onClickMinionManager}
      >
        <h4 className="minionCount">
          Managers: {commaNumber(state.minionManagers)}
          <br />
          <br />
        </h4>
        <br />
        {commaNumber(costCalculatorMinionManager(state))}
      </Button>
      <br />
      <Button
        variant="contained"
        color="secondary"
        size="large"
        disabled={disabledHelperGrandma(state)}
        onClick={onClickGrandma}
      >
        <h4 className="minionCount">
          Badass Grandmas: {commaNumber(state.grandmas)}
          <br />
          <br />
        </h4>
        <br />
        {commaNumber(costCalculatorGrandma(state))}
      </Button>
      <br />
      <Button
        variant="contained"
        color="secondary"
        size="large"
        disabled={disabledHelperDad(state)}
        onClick={onClickDad}
      >
        <h4 className="minionCount">
          3,000IQ Pandas: {commaNumber(state.dads)}
          <br />
          <br />
        </h4>
        <br />
        {commaNumber(costCalculatorDad(state))}
      </Button>
      <br />
      <Button
        variant="contained"
        color="secondary"
        size="large"
        disabled={disabledHelperAlien(state)}
        onClick={onClickAlien}
      >
        <h4 className="minionCount">
          Bored Aliens: {commaNumber(state.aliens)}
          <br />
          <br />
        </h4>
        <br />
        {commaNumber(costCalculatorAlien(state))}
      </Button>
      <br />
      <Button
        variant="contained"
        color="secondary"
        size="large"
        disabled={disabledHelperAngel(state)}
        onClick={onClickAngel}
      >
        <h4 className="minionCount">
          Robot Angels: {commaNumber(state.angels)}
          <br />
          <br />
        </h4>
        <br />
        {commaNumber(costCalculatorAngel(state))}
      </Button>
    </div>
  );
};

export default Shop;
