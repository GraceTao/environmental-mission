import IndicatorInfo from "./IndicatorInfo";
import { Box, Typography } from "@mui/material";

function Page1() {
   return (
      <>
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
            <b>pH</b> is a measure of the acidity or basicity of a solution.
            <Typography
               fontFamily="cambria math"
               fontSize="1.2rem"
               align="center"
               lineHeight={2}
            >
               pH = &minus;log<sub>10</sub>(H<sup>+</sup>)
            </Typography>
            H<sup>+</sup> is the concentration of hydrogen ions.<br/>
            <br />A pH of 7 is considered neutral, while a pH between 0 and 7 is
            acidic and one between 7 and 14 is basic. Elevated pH levels can cause
            ammonia poisoning in aquatic organisms. Heavy metals dissolve in low
            pH waters, which can be toxic to the organisms. Algal blooms from
            excess nutrients also release CO<sub>2</sub> which lowers pH and
            causes ocean acidification.
            <b>
               {" "}
               A pH in the range of 6.5&ndash;9 is most suitable for aquatic
               life.
            </b>
         </Typography>
      </>
   );
}

function Page2() {
   const pHColors = [
      { color: "darkred", value: 0 },
      { color: "red", value: 1 },
      { color: "darkorange", value: 2 },
      { color: "orange", value: 3 },
      { color: "#d4c84a", value: 4 },
      { color: "#A6B93C ", value: 5 },
      { color: "#75A439 ", value: 6 },
      { color: "#46A439 ", value: 7 },
      { color: "#328541 ", value: 8 },
      { color: "#2E7042 ", value: 9 },
      { color: "#265946 ", value: 10 },
      { color: "#235243 ", value: 11 },
      { color: "#234752 ", value: 12 },
      { color: "#2A3F61 ", value: 13 },
      { color: "#2A2352 ", value: 14 },
   ];
   return (
      <Box >
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
            A pH test strip is a simple way to measure pH. The strip's color will
            change when dipped in water. Below is the pH value corresponding to
            the color. The strip used to test this water is also provided.{" "}
            <b>Record the pH of the water.</b>
         </Typography>
         <Box
            display="flex"
            flexDirection="row"
            p={2}
            justifyContent="space-evenly"
         >
            <Box display="flex" flexDirection="column">
               <Typography>pH strip before use: </Typography>
               <Box
                  sx={{ backgroundColor: "#EEE141 ", width: 30, height: 130 }}
               ></Box>
            </Box>
            <Box display="flex" flexDirection="column">
               <Typography>pH strip after use: </Typography>
               <Box sx={{ backgroundColor: "#469e3a", width: 30, height: 130 }}>
                  <div>
                     <Box
                        sx={{
                           backgroundColor: "#EEE141 ",
                           width: 30,
                           height: 90,
                        }}
                     ></Box>
                  </div>
               </Box>
            </Box>
         </Box>
         <Box display="flex" flexDirection="column" alignItems="center">
            <Typography align="center" pt={2}>
               strip bottom color and pH value
            </Typography>
            <Box alignItems="center">
               <Box display="flex" flexDirection="row" p={2} sx={{ pt: 0 }}>
                  {pHColors.map((pH) => (
                     <Box display="flex" flexDirection="column" key={pH.value}>
                        <Box
                           sx={{
                              backgroundColor: pH.color,
                              width: 25,
                              height: 40,
                           }}
                        ></Box>
                        <Typography align="center">{pH.value}</Typography>
                     </Box>
                  ))}
               </Box>
            </Box>
         </Box>
      </Box>
   );
}

export default function FC() {
   return (
      <IndicatorInfo
         icon={
            <img
               width="90%"
               alt="pH"
               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEd0lEQVR4nO2bz29UVRTHv9N2pi1VtNIWMEOaSESphfBTgwtro5aEFNCAowkmLNRKWEDbvKQB/oAOkVaiS11VV66NRusCV26kC5QESDDGOOWXYqIGkNYcc8mbZNLMve++N2/mTt98P8nd3Tltvt/37r3n3PMAQgghhBBCSCOSATAN4A8AwoFaaPC7r7nSHh9QdLh68JQJD9zgkw8nGtykAXD68N1QBkzxDYArA94vbsLf0ATUWvxzANqKJ6GVAOZ0kzPpJvn6410iF/fXxYDm/0x5ufoYuRcFzU0m8S8A6Fx6HO0GcFn3o4c7WuSHzweciy/1bsDhIUFr2iT+VQBrdTnBegDXdD/ufqxVLn3xEg3wNOK/s0ewoi3o1PNUUGK2GcCfuiBPZDtk/txuvgHeEvGP7hd0PmQS/y8A22yz40EA93TBNm1YKbe/38MlyPPFP/aaoKfTJP6/AIYQklcBLOqCDuzskrtze7kHjB0U9K42if8fgBwicsR0lDo5sqHhDcCzTwcdN4+jQj7VBX+8p40GdBg33ZlKxR8DsKD7A2u7aQDMBiz4GoamHcBnAa+WnHj3Sb4BzwUuQeKvIkpTK3pNWXFxvLU3KwsX9jW8Aanx1wV9vTYmnPe1NfICgOumQM3NKcmP9zEP8JbkAUM7BE3G8oP4pf+XdeKPALhvCrDq0YzMfvI8M2FPkwm/ORiUCYt/tJ8oFb7FdNIpjq0bH5FfZl9xLr7Uey1oZDgoKSvdFx5cSU4GTT40nJU754edCy/LwQA1Rg8INlrtC+o6GLd1E1qaUzI90e9ccFluBhTH4BZBU8pkgGqEwK80IOfUgMCuCC5BuaouQWoj4CbsxbgJrw63CfMY6rk9hjIR8+ojEWMpwqtqKWLOphRRpN1mX5h4m8U4BN8HiF/YtC7GWZej13S1NnwegCqVo0uZ0f0BXsjkggxQq0hFGK8kT73HK0kEL0GjUcXnpbwX26X8G2HFZ1uKF2tbiirz77YVn41ZXtUas7YHic/WRK+qrYm3TK2JPQCu6H7M5txcXM25P5drzmV7ulfT9vQfS9vTVUVu1iKb40CsGnxX/EBDfalHceFEA/V5GL+ShLsHUG3KNACODeASBLcfamf8tUi5wb0ANXvyzyy9kiSEEEIIIYSQ5UoGwGkA8wAKAPKahMd2HglJvkzmma9gHgnJfBlhr1Uwj4REV3+JOi/xZErW4nKC/APgJwBnAfRbxKMBIcmHqCKq3vqPAjZLGhCSQoRy7rcGE2hASCTi+JAGuDVgEcAzIeJFnZd4pNIrPct4UeclHgkQIgvgS0ODk20829FwiIUQ6wwNr7bxaAANWJ5vwDoAX3EJqr0BYjHOxByPewDCHUP7aIC7N+BsyHhR5yUeiTBUO306ZLyo8xKPhBgL/pOfjhAv6rzEIwHjbz/hmtKs+bbxos5LPBKzEDTAsQGFMrF+q2Be4pGYDSh3wTNZwbzEIzEbkPHFLVi0pdjMSzzCzdAtBa7FbslzLXZLhmsxIYQQQgghBA3E/+Q2LaNSr+VXAAAAAElFTkSuQmCC"
            ></img>
         }
         position={{ top: "0vh", left: "60vw" }}
         anchor={{ vertical: "bottom", horizontal: "center" }}
         page1={<Page1 />}
         page2={<Page2 />}
      />
   );
}
