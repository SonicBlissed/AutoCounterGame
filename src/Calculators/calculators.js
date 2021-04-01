const costCalculatorMinion = (state) => {
  if (state.minions < 20) {
    return state.minions * 10 + 6;
  } else if (state.minions < 50) {
    return state.minions * 500;
  } else if (state.minions < 60) {
    return state.minions * 600;
  } else if (state.minions < 70) {
    return state.minions * 700;
  } else if (state.minions < 80) {
    return state.minions * 800;
  } else if (state.minions < 90) {
    return state.minions * 900;
  } else if (state.minions < 100) {
    return state.minions * 1000;
  } else if (state.minions < 200) {
    return state.minions * 2 * 1000;
  }
};
const costCalculatorMinionSupervisor = (state) => {
  if (state.minionSupervisors < 20) {
    return state.minionSupervisors * 10 + 69;
  } else if (state.minionSupervisors < 50) {
    return state.minionSupervisors * 500;
  } else if (state.minionSupervisors < 60) {
    return state.minionSupervisors * 600;
  } else if (state.minionSupervisors < 70) {
    return state.minionSupervisors * 700;
  } else if (state.minionSupervisors < 80) {
    return state.minionSupervisors * 800;
  } else if (state.minionSupervisors < 90) {
    return state.minionSupervisors * 900;
  } else if (state.minionSupervisors < 100) {
    return state.minionSupervisors * 1000;
  } else if (state.minionSupervisors < 200) {
    return state.minionSupervisors * 2 * 1000;
  }
};

const costCalculatorMinionManager = (state) => {
  if (state.minionManagers < 20) {
    return state.minionManagers * 10 + 69;
  } else if (state.minionManagers < 50) {
    return state.minionManagers * 500;
  } else if (state.minionManagers < 60) {
    return state.minionManagers * 600;
  } else if (state.minionManagers < 70) {
    return state.minionManagers * 700;
  } else if (state.minionManagers < 80) {
    return state.minionManagers * 800;
  } else if (state.minionManagers < 90) {
    return state.minionManagers * 900;
  } else if (state.minionManagers < 100) {
    return state.minionManagers * 1000;
  } else if (state.minionManagers < 200) {
    return state.minionManagers * 2 * 1000;
  }
};

const costCalculatorGrandma = (state) => {
  if (state.grandmas < 20) {
    return state.grandmas * 10 + 69;
  } else if (state.grandmas < 50) {
    return state.grandmas * 500;
  } else if (state.grandmas < 60) {
    return state.grandmas * 600;
  } else if (state.grandmas < 70) {
    return state.grandmas * 700;
  } else if (state.grandmas < 80) {
    return state.grandmas * 800;
  } else if (state.grandmas < 90) {
    return state.grandmas * 900;
  } else if (state.grandmas < 100) {
    return state.grandmas * 1000;
  } else if (state.grandmas < 200) {
    return state.grandmas * 2 * 1000;
  }
};

const costCalculatorDad = (state) => {
  if (state.dads < 20) {
    return state.dads * 10 + 69;
  } else if (state.dads < 50) {
    return state.dads * 500;
  } else if (state.dads < 60) {
    return state.dads * 600;
  } else if (state.dads < 70) {
    return state.dads * 700;
  } else if (state.dads < 80) {
    return state.dads * 800;
  } else if (state.dads < 90) {
    return state.dads * 900;
  } else if (state.dads < 100) {
    return state.dads * 1000;
  } else if (state.dads < 200) {
    return state.dads * 2 * 1000;
  }
};

const costCalculatorAlien = (state) => {
  if (state.aliens < 20) {
    return state.aliens * 10 + 69;
  } else if (state.aliens < 50) {
    return state.aliens * 500;
  } else if (state.aliens < 60) {
    return state.aliens * 600;
  } else if (state.aliens < 70) {
    return state.aliens * 700;
  } else if (state.aliens < 80) {
    return state.aliens * 800;
  } else if (state.aliens < 90) {
    return state.aliens * 900;
  } else if (state.aliens < 100) {
    return state.aliens * 1000;
  } else if (state.aliens < 200) {
    return state.aliens * 2 * 1000;
  }
};

const costCalculatorAngel = (state) => {
  if (state.angels < 20) {
    return state.angels * 10 + 69;
  } else if (state.angels < 50) {
    return state.angels * 500;
  } else if (state.angels < 60) {
    return state.angels * 600;
  } else if (state.angels < 70) {
    return state.angels * 700;
  } else if (state.angels < 80) {
    return state.angels * 800;
  } else if (state.angels < 90) {
    return state.angels * 900;
  } else if (state.angels < 100) {
    return state.angels * 1000;
  } else if (state.angels < 200) {
    return state.angels * 2 * 1000;
  }
};

//   const costCalculator = (state) => {
//     if (state. < 20){
//         return state. * 10 + 69
//       } else if(state. < 50){
//         return state. * 500
//       } else if (state. < 60){
//         return state. * 600
//       } else if (state. < 70){
//         return state. * 700
//       } else if (state. < 80){
//         return state. * 800
//       } else if (state. < 90){
//         return state. * 900
//       } else if (state. < 100){
//         return state. * 1000
//       } else if (state. < 200){
//         return (state. * 2) * 1000
//       }
//   }

export {
  costCalculatorMinionSupervisor,
  costCalculatorMinion,
  costCalculatorMinionManager,
  costCalculatorGrandma,
  costCalculatorDad,
  costCalculatorAlien,
  costCalculatorAngel,
};
