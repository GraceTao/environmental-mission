import { Box, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";

function Timer({ time }) {
   return (
      <Typography fontSize="1.3rem" align="center" fontWeight="bold" lineHeight={2}>
         {String(Math.floor(time / 60000)).padStart(2, "0")}:
         {String(Math.floor((time / 1000) % 60)).padStart(2, "0")}.
         {String((time / 10) % 100).padStart(2, "0")}
      </Typography>
   );
}

export default function StopWatch() {
   const [stopWatchActive, setStopWatchActive] = useState(false);
   const [stopWatchPaused, setStopWatchPaused] = useState(false);
   const [timeElapsed, setTimeElapsed] = useState(0);

   useEffect(() => {
      let timer = null;
      if (stopWatchActive && !stopWatchPaused) {
         timer = setInterval(
            () => setTimeElapsed((prevTime) => prevTime + 10),
            10
         );
      } else {
         clearInterval(timer);
      }

      return () => clearInterval(timer);
   }, [stopWatchActive, stopWatchPaused, timeElapsed]);

   return (
      <Box>
         <Typography fontSize="1.2rem" align="center">
            (Defective) Stopwatch
         </Typography>
         <Timer time={timeElapsed} /><br/>
         {stopWatchActive ? (
            stopWatchPaused ? (
               <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-around"
               >
                  <Button
                     variant="contained"
                     onClick={() => {
                        setStopWatchActive(!stopWatchActive);
                        setStopWatchPaused(!stopWatchPaused);
                        setTimeElapsed(0);
                     }}
                  >
                     Reset
                  </Button>
                  <Button
                     variant="contained"
                     onClick={() => setStopWatchPaused(!stopWatchPaused)}
                  >
                     Resume
                  </Button>
               </Box>
            ) : (
               <Box display="flex" justifyContent="center">
                  <Button
                     variant="contained"
                     onClick={() => setStopWatchPaused(!stopWatchPaused)}
                  >
                     Stop
                  </Button>
               </Box>
            )
         ) : (
            <Box display="flex" justifyContent="center">
               <Button
                  variant="contained"
                  onClick={() => setStopWatchActive(!stopWatchActive)}
               >
                  Start
               </Button>
            </Box>
         )}
      </Box>
   );
}
