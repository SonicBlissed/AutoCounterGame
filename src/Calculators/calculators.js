const costCalculatorMinion = (state) => {
 return 1 * Math.round(Math.pow(1.15, state.minions))
};

const costCalculatorMinionSupervisor = (state) => {
    return 10 * Math.round(Math.pow(1.15, state.minionSupervisors))
  };

const costCalculatorMinionManager = (state) => {
    return 100 * Math.round(Math.pow(1.15, state.minionManagers))
};

const costCalculatorGrandma = (state) => {
    return 1000 * Math.round(Math.pow(1.15, state.grandmas))
};

const costCalculatorDad = (state) => {
    return 10000 * Math.round(Math.pow(1.15, state.dads))
};

const costCalculatorAlien = (state) => {
    return 100000 * Math.round(Math.pow(1.15, state.aliens))
};

const costCalculatorAngel = (state) => {
    return 1000000 * Math.round(Math.pow(1.15, state.angels))
};


export {
  costCalculatorMinionSupervisor,
  costCalculatorMinion,
  costCalculatorMinionManager,
  costCalculatorGrandma,
  costCalculatorDad,
  costCalculatorAlien,
  costCalculatorAngel,
};
