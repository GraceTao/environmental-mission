import DOGraph from "./DOGraph";
import PHGraph from "./PHGraph";
import FCGraph from "./FCGraph";
import BODGraph from "./BODGraph";
import TemperatureGraph from "./TemperatureGraph";
import PhosphatesGraph from "./PhosphatesGraph";
import NitratesGraph from "./NitratesGraph";
import TurbidityGraph from "./TurbidityGraph";
import TSGraph from "./TSGraph";
import { useState } from "react";
import { Box, Button } from "@mui/material";

function makeGraph(name, graph, prev, next, setOpen) {
   const handlePrevClick = () => {
      setOpen((graphs) => ({ ...graphs, [name]: false, [prev]: true }));
   };
   const handleNextClick = () => {
      setOpen((graphs) => ({ ...graphs, [name]: false, [next]: true }));
   };
   const graphWithArrows = (
      <Box display="flex" flexDirection="column" key={name} sx={{mt: -5}}>
         {graph}
         <Box display="flex" flexDirection="row" justifyContent="space-between">
            <Button variant="contained" onClick={handlePrevClick} sx={{width: "50%", borderRadius: 0, boxShadow: 0}}>prev</Button>
            <Button variant="contained" onClick={handleNextClick} sx={{width: "50%", borderRadius: 0, boxShadow: 0}}>next</Button>
         </Box>
      </Box>
   );

   return { name, graphWithArrows };
}

function GraphSlideShow() {
   const [open, setOpen] = useState({
      DO: true,
      FC: false,
      pH: false,
      BOD: false,
      deltaTemp: false,
      Phosphates: false,
      Nitrates: false,
      Turbidity: false,
      TS: false,
   });

   const graphs = [
      makeGraph("DO", <DOGraph />, "TS", "FC", setOpen),
      makeGraph("FC", <FCGraph />, "DO", "pH", setOpen),
      makeGraph("pH", <PHGraph />, "FC", "BOD", setOpen),
      makeGraph("BOD", <BODGraph />, "pH", "deltaTemp", setOpen),
      makeGraph("deltaTemp", <TemperatureGraph />, "BOD", "Phosphates", setOpen),
      makeGraph("Phosphates", <PhosphatesGraph />, "deltaTemp", "Nitrates", setOpen),
      makeGraph("Nitrates", <NitratesGraph />, "Phosphates", "Turbidity", setOpen),
      makeGraph("Turbidity", <TurbidityGraph />, "Nitrates", "TS", setOpen),
      makeGraph("TS", <TSGraph />, "Turbidity", "DO", setOpen),
   ];
   return (
      <Box mb={3}>
         {graphs.map((graph) => open[graph.name] && graph.graphWithArrows)}
      </Box>
   );
}

export default GraphSlideShow;
