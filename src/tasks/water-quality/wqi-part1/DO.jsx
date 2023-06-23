import IndicatorInfo from "./IndicatorInfo";
import HomeIcon from "@mui/icons-material/Home";
import { Box, IconButton, Typography } from "@mui/material";

const doDay0 = 8.34;
const doDay5 = 5.87;

const graph = (
   <svg
      viewBox="0 0 1656 979"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      overflow="hidden"
   >
      <defs>
         <clipPath id="clip0">
            <rect x={1244} y={508} width={1656} height={979} />
         </clipPath>
         <clipPath id="clip1">
            <rect x={1483} y={679} width={1347} height={606} />
         </clipPath>
      </defs>
      <g clipPath="url(#clip0)" transform="translate(-1244 -508)">
         <rect x={1245} y={509} width={1653} height={976} fill="#FFFFFF" />
         <g>
            <path
               d="M1483.5 1206.54 2827.5 1206.54M1483.5 1131.54 2827.5 1131.54M1483.5 1055.53 2827.5 1055.53M1483.5 980.532 2827.5 980.532M1483.5 905.53 2827.5 905.53M1483.5 829.527 2827.5 829.527M1483.5 754.525 2827.5 754.525M1483.5 679.5 2827.5 679.5"
               stroke="#D9D9D9"
               strokeWidth="3.4375"
               strokeLinejoin="round"
               strokeMiterlimit={10}
               fill="none"
            />
         </g>
         <g>
            <path
               d="M1572.55 679.5 1572.55 1281.5M1662.55 679.5 1662.55 1281.5M1752.56 679.5 1752.56 1281.5M1841.56 679.5 1841.56 1281.5M1931.56 679.5 1931.56 1281.5M2020.57 679.5 2020.57 1281.5M2110.57 679.5 2110.57 1281.5M2200.57 679.5 2200.57 1281.5M2289.58 679.5 2289.58 1281.5M2379.58 679.5 2379.58 1281.5M2468.58 679.5 2468.58 1281.5M2558.58 679.5 2558.58 1281.5M2647.59 679.5 2647.59 1281.5M2737.59 679.5 2737.59 1281.5M2827.5 679.5 2827.5 1281.5"
               stroke="#D9D9D9"
               strokeWidth="3.4375"
               strokeLinejoin="round"
               strokeMiterlimit={10}
               fill="none"
            />
         </g>
         <g>
            <path
               d="M0 0 0.000360892 602"
               stroke="#BFBFBF"
               strokeWidth="3.4375"
               strokeLinejoin="round"
               strokeMiterlimit={10}
               fill="none"
               fillRule="evenodd"
               transform="matrix(1 0 0 -1 1483.5 1281.5)"
            />
         </g>
         <g>
            <path
               d="M1483.5 1281.5 2827.5 1281.5"
               stroke="#BFBFBF"
               strokeWidth="3.4375"
               strokeLinejoin="round"
               strokeMiterlimit={10}
               fill="none"
               fillRule="evenodd"
            />
         </g>
         <g clipPath="url(#clip1)">
            <path
               d="M1036 438 1125.04 498.016 1215.04 559.018 1304.04 604.02 1394.05 664.022 1483.05 709.023 1573.05 754.025 1663.05 800.026 1752.06 845.028 1842.06 890.029 1931.06 935.031 2021.07 965.032 2110.07 996.033 2200.07 1041.03 2290.08 1071.04 2379.08 1101.04 2469.08 1131.04 2558.08 1161.04 2648.09 1191.04 2737.09 1221.04 2827.09 1252.04 2917.1 1282.04 3006.1 1297.04 3096.1 1327.04 3185.1 1342.04 3275 1372"
               stroke="#7030A0"
               strokeWidth="8.02083"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeMiterlimit={10}
               fill="none"
            />
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 1424.28 1293)"
            >
               9
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 1392.98 1218)"
            >
               9.5
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 1403.38 1143)"
            >
               10
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 1372.08 1067)"
            >
               10.5
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 1403.38 992)"
            >
               11
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 1372.08 917)"
            >
               11.5
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 1403.38 841)"
            >
               12
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 1372.08 766)"
            >
               12.5
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 1403.38 691)"
            >
               13
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 1473 1347)"
            >
               5
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 1562.58 1347)"
            >
               6
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 1652.16 1347)"
            >
               7
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 1741.74 1347)"
            >
               8
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 1831.32 1347)"
            >
               9
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 1910.45 1347)"
            >
               10
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 2000.03 1347)"
            >
               11
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 2089.61 1347)"
            >
               12
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 2179.19 1347)"
            >
               13
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 2268.77 1347)"
            >
               14
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 2358.34 1347)"
            >
               15
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 2447.92 1347)"
            >
               16
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 2537.5 1347)"
            >
               17
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 2627.08 1347)"
            >
               18
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 2716.66 1347)"
            >
               19
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={41}
               transform="matrix(1 0 0 1 2806.24 1347)"
            >
               20
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={46}
               transform="matrix(6.12323e-17 -1 1 6.12323e-17 1346.39 1076)"
            >
               DO (mg/L)
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={46}
               transform="matrix(1 0 0 1 1993.85 1416)"
            >
               Temperature (
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={46}
               transform="matrix(1 0 0 1 2262.89 1416)"
            >
               °
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={46}
               transform="matrix(1 0 0 1 2278.43 1416)"
            >
               C)
            </text>
         </g>
         <g>
            <text
               fill="#595959"
               fontFamily="Calibri,Calibri_MSFontService,sans-serif"
               fontWeight={400}
               fontSize={64}
               transform="matrix(1 0 0 1 1891.65 605)"
            >
               Maximum DO
            </text>
         </g>
         <rect
            x="1245.5"
            y="509.5"
            width={1653}
            height={976}
            stroke="#D9D9D9"
            strokeWidth="3.4375"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            fill="none"
         />
      </g>
   </svg>
);

function Page1() {
   return (
      <Box>
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
            <b>Dissolved oxygen (DO)</b> is the amount of oxygen (O<sub>2</sub>)
            present in the water. Aquatic organisms need this oxygen to survive.
            Nutrient-rich waters stimulate algal blooms, which is a rapid
            increase in algae growth. Microorganisms use oxygen to decompose
            this algae, which depletes the water of oxygen, lowering DO levels.
            This can lead to eutrophication, which is a process whereby aquatic
            organisms die off due to lack of oxygen. Hypoxic areas have low
            levels of oxygen and are considered “dead zones” since they support
            very little life. Too little or too much DO can harm water quality.
            <br />
            <br />
            The <b>biochemical oxygen demand (BOD)</b> measures the amount of
            oxygen consumed by microorganisms to decompose organic matter.
            The BOD5 is the five-day oxygen consumption. BOD5 is calculated as the difference 
            between the DO of a sample of the water taken immediately and the DO of a sample incubated 
            in the dark at 20&deg;C for 5 days.
         </Typography>
      </Box>
   );
}

function Page2() {
   return (
      <Box display="flex" flexDirection="column" justifyContent="center">
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
            The <b>DO saturation %</b> is the ratio of concentration of DO
            (measured DO) to the maximum amount of oxygen that will dissolve
            under stable equilibrium conditions (i.e. 100% saturation). <br />
            <br />
            <Typography
               fontFamily="Cambria Math"
               fontSize="1.2rem"
               textAlign="center"
            >
               % saturation = 100% * (measured DO) / (max DO)
            </Typography>
            <br />
            The DO (at day 0) was measured to be <b>{doDay0} mg / L</b>. Given the following
            graph displaying the maximum oxygen concentration at different
            temperatures, calculate the % saturation and record it. Use the average
            temperature between upstream and downstream as the temperature
            value.
            <Box p={3}>
               {graph}
            </Box>
            Furthermore, after 5 days at 20&deg;C, the DO was measured to be 
            <b> {doDay5} mg / L</b>. Record the BOD5.
         </Typography>
         
      </Box>
   );
}

export default function DO() {
   return (
      <IndicatorInfo
         icon={
            <img
               width="100%"
               alt="dissolved oxygen"
               src="data:image/png;base64,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"
            ></img>
         }
         position={{ top: "63vh", left: "54vw" }}
         anchor={{ vertical: "bottom", horizontal: "center" }}
         page1={<Page1 />}
         page2={<Page2 />}
      />
   );
}
