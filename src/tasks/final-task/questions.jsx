import { Typography } from "@mui/material";

const q1 = [
   <>
      To qualify for{" "}
      <a
         href="https://green-marine.org/certification/performance-indicators/aquatic-ecosystems/#portsetvoiemaritime"
         target="_blank"
      >
         Green Marine Level 3 Status in Aquatic Ecosystems
      </a>
      , ports must monitor the status of local aquatic ecosystems.{" "}
      <Typography color="royalblue">
         Drawing from today's tasks, what is one way that the Port of Corpus
         Christi monitors aquatic ecosystems and preserves aquatic health and
         biodiversity?
      </Typography>
   </>,
   {
      id: "choice1",
      label: `Promoting quieter engine technologies and reduced vessel speeds to help minimize 
      underwater noise pollution, which can disturb marine life`,
   },
   {
      id: "choice2",
      label: `Hosting community clean-up events on the shoreline`,
   },
   {
      id: "choice3",
      label: `Conducting water quality tests to ensure the proper balance of
      dissolved oxygen, pH, temperature, and pollutant levels in water`,
   },
   {
      id: "choice4",
      label: "Studying certain indicator species to assess the overall ecosystem health",
   },
];

const q2 = [
   <>
      To qualify for{" "}
      <a
         href="https://green-marine.org/certification/performance-indicators/greenhouse-gas-emissions/#portsetvoiemaritime"
         target="_blank"
      >
         Green Marine Level 4 Status in Greenhouse Gas Emissions
      </a>
      , ports must inventory greenhouse gases and air pollutants emitted from
      sources including vessels, cargo handling equipment, rails, and trucks.{" "}
      <Typography color="green">
         Select ALL greenhouse gases and air pollutants that the Port of Corpus
         Christi reports in their emissions tables.
      </Typography>
   </>,
   {
      id: "VOC",
      label: "Volatile organic compounds",
   },
   {
      id: "NOx",
      label: "Nitric oxides",
   },
   {
      id: "PM",
      label: "Particulate matter",
   },
   {
      id: "SOx",
      label: "Sulfur oxides",
   },
   {
      id: "CO2",
      label: "Carbon dioxide",
   },
];

const q3 = `As you’ve learned today, environment compliance specialists
work with people in many other fields. Name at least two other
occupations (from today’s mission) that environment compliance
specialists collaborate with to fulfill their duties. Or,
name two people you “texted” with today.`;

const q4 = `What does the Port of Corpus Christi do to ensure its
environmental goals?`;

const q5 = `What does the Port of Corpus Christi do to make sure its work has
minimal effects on the surrounding community?`;

export { q1, q2, q3, q4, q5 };
