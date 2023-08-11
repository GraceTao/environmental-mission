const measured = {
   day0DO: <>8.34 mg&nbsp;/&nbsp;L</>,
   day5DO: <>5.87 mg&nbsp;/&nbsp;L</>,
   FC: <>4.5 col&nbsp;/&nbsp;100&nbsp;mL</>,
   pH: 8,
   tempUp: <>11.53&nbsp;&deg;C</>,
   tempDown: <>13.91&nbsp;&deg;C</>,
   Phosphates: <>1150 ng&nbsp;/&nbsp;mL</>,
   Nitrates: <>14.5 &#181;g&nbsp;/&nbsp;fl&nbsp;oz</>,
   Turbidity: <>1 foot 1 inch</>,
   TSEmptyBeakerMass: <>55.0&nbsp;g</>,
   TSWaterAdded: <>50&nbsp;mL</>,
   TSFullBeakerMass: <>55.015&nbsp;g</>,
};
const solutions = {
   DO: {
      fullName: "Dissolved oxygen",
      converted: 78.3,
      units: "% saturation",
      qValue: 87,
      weight: 0.17,
   },
   FC: {
      fullName: "Fecal coliform",
      converted: 4.5,
      units: "col / 100 mL",
      qValue: 83,
      weight: 0.16,
      preFilled: true,
   },
   pH: { fullName: "pH", converted: 8, units: "", qValue: 81, weight: 0.11 },
   BOD: {
      fullName: "Biochemical oxygen demand",
      converted: 2.47,
      units: "ppm",
      qValue: 71,
      weight: 0.11,
      preFilled: true,
   },
   deltaTemp: {
      fullName: <>&Delta; Temperature (upstream &minus; downstream)</>,
      converted: -2.38,
      units: <>&deg;C</>,
      qValue: 86,
      weight: 0.1,
   },
   Phosphates: {
      fullName: "Phosphates",
      converted: 1.15,
      units: "ppm",
      qValue: 37,
      weight: 0.1,
   },
   Nitrates: {
      fullName: "Nitrates",
      converted: 0.49,
      units: "ppm",
      qValue: 96,
      weight: 0.1,
   },
   Turbidity: {
      fullName: "Turbidity",
      converted: 21,
      units: "NTU",
      qValue: 60,
      weight: 0.08,
      preFilled: true,
   },
   TS: {
      fullName: "Total solids",
      converted: 300,
      units: "ppm",
      qValue: 59,
      weight: 0.07,
   },
};

const wqiFinal = Object.values(solutions)
   .reduce((acc, vals) => {
      return acc + vals.qValue * vals.weight;
   }, 0)
   .toFixed(2);

// wqiFinal = 75.62

const marginOfError = 2;

export { measured, solutions, wqiFinal, marginOfError };

