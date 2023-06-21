import DOGraph from "./DOGraph";
import PHGraph from "./PHGraph";
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
      <Box display="flex" flexDirection="column" key={name} sx={{backgroundColor: "#fff8", mt: -5}}>
         {graph}
         <Box display="flex" flexDirection="row" justifyContent="space-around">
            <Button onClick={handlePrevClick}>prev</Button>
            <Button onClick={handleNextClick}>next</Button>
         </Box>
      </Box>
   );

   return { name, graphWithArrows };
}

function GraphSlideShow() {
   const [open, setOpen] = useState({
      DO: true,
      pH: false,
   });

   const graphs = [
      makeGraph("DO", <DOGraph />, "pH", "pH", setOpen),
      makeGraph("pH", <PHGraph />, "DO", "DO", setOpen),
   ];
   return (
      <div>
         {graphs.map((graph) => open[graph.name] && graph.graphWithArrows)}
      </div>
   );
}

export default GraphSlideShow;
