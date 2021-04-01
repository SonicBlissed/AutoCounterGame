const costCalculatorMinion = (state) => {
 return 1 * Math.round(Math.pow(1.15, state.minions))
};

// const costCalculatorMinionSupervisor = (state) => {
//   if (state.minionSupervisors < 20) {
//     return state.minionSupervisors * 10 + 69;
//   } else if (state.minionSupervisors < 50) {
//     return state.minionSupervisors * 500;
//   } else if (state.minionSupervisors < 60) {
//     return state.minionSupervisors * 600;
//   } else if (state.minionSupervisors < 70) {
//     return state.minionSupervisors * 700;
//   } else if (state.minionSupervisors < 80) {
//     return state.minionSupervisors * 800;
//   } else if (state.minionSupervisors < 90) {
//     return state.minionSupervisors * 900;
//   } else if (state.minionSupervisors < 100) {
//     return state.minionSupervisors * 1000;
//   } else if (state.minionSupervisors < 200) {
//     return state.minionSupervisors * 2 * 1000;
//   }
// };

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
