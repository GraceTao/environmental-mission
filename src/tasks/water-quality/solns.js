const measured = {
   day0DO: 8.34,
   day5DO: 5.87,
   FC: 4.5,
   pH: 8,
   tempUp: 11.53,
   tempDown: 13.91,
   Phosphates: 350,
   Nitrates: 14.5,
   TurbidityInches: 13,
   TSEmptyBeakerMass: 55,
   TSWaterAdded: 50,
   TSFullBeakerMass: 55.015,
};
const solutions = {
   DO: { converted: 78, qValue: 87, weight: 0.17 },
   FC: { converted: 4.5, qValue: 83, weight: 0.16 },
   pH: { converted: 8, qValue: 81, weight: 0.11 },
   BOD: { converted: 2.47, qValue: 71, weight: 0.11 },
   deltaTemp: { converted: -2.38, qValue: 86, weight: 0.1 },
   Phosphates: { converted: 0.35, qValue: 85, weight: 0.1 },
   Nitrates: { converted: 0.49, qValue: 96, weight: 0.1 },
   Turbidity: { converted: 21, qValue: 60, weight: 0.08 },
   TS: { converted: 300, qValue: 59, weight: 0.07 },
};

const wqiFinal = Object.values(solutions).reduce((acc, vals) => {
   return acc + vals.qValue * vals.weight;
}, 0).toFixed(2);

const marginOfError = 1;


export { measured, solutions, wqiFinal, marginOfError };
