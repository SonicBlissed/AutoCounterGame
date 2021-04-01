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

const Shop = (props) => {
  const { state, setState } = props;



  function onClickMinion() {
    if (state.counter < costCalculatorMinion(state)) {
      console.log(`you don't have ${costCalculatorMinion(state)} to spend`);
    } else {
      setState((state) => ({
        minions: state.minions + 1,
        counter: state.counter - costCalculatorMinion(state),
        minionSupervisors: state.minionSupervisors,
        minionManagers: state.minionManagers,
        grandmas: state.grandmas,
        dads: state.dads,
        aliens: state.aliens,
        angels: state.angels,
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
        minions: state.minions,
        counter: state.counter - costCalculatorMinionSupervisor(state),
        minionSupervisors: state.minionSupervisors + 1,
        minionManagers: state.minionManagers,
        grandmas: state.grandmas,
        dads: state.dads,
        aliens: state.aliens,
        angels: state.angels,
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
        minions: state.minions,
        counter: state.counter - costCalculatorMinionManager(state),
        minionSupervisors: state.minionSupervisors,
        minionManagers: state.minionManagers + 1,
        grandmas: state.grandmas,
        dads: state.dads,
        aliens: state.aliens,
        angels: state.angels,
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
        minions: state.minions,
        counter: state.counter - costCalculatorGrandma(state),
        minionSupervisors: state.minionSupervisors,
        minionManagers: state.minionManagers,
        grandmas: state.grandmas + 1,
        dads: state.dads,
        aliens: state.aliens,
        angels: state.angels,
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
        minions: state.minions,
        counter: state.counter - costCalculatorDad(state),
        minionSupervisors: state.minionSupervisors,
        minionManagers: state.minionManagers,
        grandmas: state.grandmas,
        dads: state.dads + 1,
        aliens: state.aliens,
        angels: state.angels,
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
        minions: state.minions,
        counter: state.counter - costCalculatorAlien(state),
        minionSupervisors: state.minionSupervisors,
        minionManagers: state.minionManagers,
        grandmas: state.grandmas,
        dads: state.dads,
        aliens: state.aliens + 1,
        angels: state.angels,
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
        minions: state.minions,
        counter: state.counter - costCalculatorAngel(state),
        minionSupervisors: state.minionSupervisors,
        minionManagers: state.minionManagers,
        grandmas: state.grandmas,
        dads: state.dads,
        aliens: state.aliens,
        angels: state.angels + 1,
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
          Minions: {state.minions}
          <br />
          <br />
        </h4>
        <br />
        {costCalculatorMinion(state)}
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
          Supervisors: {state.minionSupervisors}
          <br />
          <br />
        </h4>
        <br />
        {costCalculatorMinionSupervisor(state)}
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
          Managers: {state.minionManagers}
          <br />
          <br />
        </h4>
        <br />
        {costCalculatorMinionManager(state)}
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
          Badass Grandmas: {state.grandmas}
          <br />
          <br />
        </h4>
        <br />
        {costCalculatorGrandma(state)}
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
          Workaholic Dads: {state.dads}
          <br />
          <br />
        </h4>
        <br />
        {costCalculatorDad(state)}
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
          Bored Aliens: {state.aliens}
          <br />
          <br />
        </h4>
        <br />
        {costCalculatorAlien(state)}
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
          Traitor Angels: {state.angels}
          <br />
          <br />
        </h4>
        <br />
        {costCalculatorAngel(state)}
      </Button>
    </div>
  );
};

export default Shop;
