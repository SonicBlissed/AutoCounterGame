import {
  costCalculatorMinionSupervisor,
  costCalculatorMinion,
  costCalculatorMinionManager,
  costCalculatorGrandma,
  costCalculatorDad,
  costCalculatorAlien,
  costCalculatorAngel,
} from "../Calculators/calculators";


let disabledHelperMinion = (state) => {
  if (state.counter < costCalculatorMinion(state)) {
    return true;
  } else {
    return false;
  }
};

let disabledHelperMinionSupervisor = (state) => {
  if (state.counter < costCalculatorMinionSupervisor(state)) {
    return true;
  } else {
    return false;
  }
};

let disabledHelperMinionManager = (state) => {
  if (state.counter < costCalculatorMinionManager(state)) {
    return true;
  } else {
    return false;
  }
};

let disabledHelperGrandma = (state) => {
    if (state.counter < costCalculatorGrandma(state)) {
      return true;
    } else {
      return false;
    }
  };

  let disabledHelperDad = (state) => {
    if (state.counter < costCalculatorDad(state)) {
      return true;
    } else {
      return false;
    }
  };

  let disabledHelperAlien = (state) => {
    if (state.counter < costCalculatorAlien(state)) {
      return true;
    } else {
      return false;
    }
  };

  let disabledHelperAngel = (state) => {
    if (state.counter < costCalculatorAngel(state)) {
      return true;
    } else {
      return false;
    }
  };

export {
    disabledHelperMinion,
    disabledHelperMinionSupervisor,
    disabledHelperMinionManager,
    disabledHelperGrandma,
    disabledHelperDad,
    disabledHelperAlien,
    disabledHelperAngel,



};
