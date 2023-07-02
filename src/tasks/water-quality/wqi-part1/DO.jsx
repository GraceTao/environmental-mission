import IndicatorInfo from "./IndicatorInfo";
import HomeIcon from "@mui/icons-material/Home";
import { Box, IconButton, Typography } from "@mui/material";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import {measured} from "../solns";

const graph = (
   <>
  {/* Hello world */}
  <svg
    viewBox="0 0 1647 984"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    overflow="hidden"
  >
    <defs>
      <clipPath id="clip0">
        <rect x={1082} y={246} width={1647} height={984} />
      </clipPath>
      <clipPath id="clip1">
        <rect x={1321} y={417} width={1338} height={610} />
      </clipPath>
    </defs>
    <g clipPath="url(#clip0)" transform="translate(-1082 -246)">
      <rect x={1083} y={247} width={1644} height={981} fill="#FFFFFF" />
      <g>
        <path
          d="M1321.5 948.531 2655.5 948.531M1321.5 872.529 2655.5 872.529M1321.5 796.526 2655.5 796.526M1321.5 720.524 2655.5 720.524M1321.5 644.521 2655.5 644.521M1321.5 568.519 2655.5 568.519M1321.5 492.516 2655.5 492.516M1321.5 417.5 2655.5 417.5"
          stroke="#D9D9D9"
          strokeWidth="3.4375"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          fill="none"
        />
      </g>
      <g>
        <path
          d="M1416.55 417.5 1416.55 1024.5M1512.55 417.5 1512.55 1024.5M1607.55 417.5 1607.55 1024.5M1702.56 417.5 1702.56 1024.5M1797.56 417.5 1797.56 1024.5M1893.56 417.5 1893.56 1024.5M1988.57 417.5 1988.57 1024.5M2083.57 417.5 2083.57 1024.5M2179.57 417.5 2179.57 1024.5M2274.57 417.5 2274.57 1024.5M2369.58 417.5 2369.58 1024.5M2465.58 417.5 2465.58 1024.5M2560.58 417.5 2560.58 1024.5M2655.5 417.5 2655.5 1024.5"
          stroke="#D9D9D9"
          strokeWidth="3.4375"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          fill="none"
        />
      </g>
      <g>
        <path
          d="M0 0 0.000360892 607"
          stroke="#BFBFBF"
          strokeWidth="3.4375"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          fill="none"
          fillRule="evenodd"
          transform="matrix(1 0 0 -1 1321.5 1024.5)"
        />
      </g>
      <g>
        <path
          d="M1321.5 1024.5 2655.5 1024.5"
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
          d="M1226.5 447.5 1321.54 492.516 1416.55 538.518 1512.55 584.519 1607.55 629.521 1702.56 675.522 1797.56 705.523 1893.56 735.524 1988.57 781.526 2083.57 811.527 2179.57 842.528 2274.57 872.529 2369.58 902.53 2465.58 933.531 2560.58 963.532 2655.5 993.5"
          stroke="#4472C4"
          strokeWidth="6.875"
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
          transform="matrix(1 0 0 1 1262.36 1036)"
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
          transform="matrix(1 0 0 1 1231.05 960)"
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
          transform="matrix(1 0 0 1 1241.46 884)"
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
          transform="matrix(1 0 0 1 1210.15 808)"
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
          transform="matrix(1 0 0 1 1241.46 732)"
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
          transform="matrix(1 0 0 1 1210.15 656)"
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
          transform="matrix(1 0 0 1 1241.46 580)"
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
          transform="matrix(1 0 0 1 1210.15 504)"
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
          transform="matrix(1 0 0 1 1241.46 429)"
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
          transform="matrix(1 0 0 1 1311.08 1089)"
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
          transform="matrix(1 0 0 1 1406.37 1089)"
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
          transform="matrix(1 0 0 1 1501.67 1089)"
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
          transform="matrix(1 0 0 1 1596.97 1089)"
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
          transform="matrix(1 0 0 1 1681.82 1089)"
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
          transform="matrix(1 0 0 1 1777.12 1089)"
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
          transform="matrix(1 0 0 1 1872.42 1089)"
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
          transform="matrix(1 0 0 1 1967.71 1089)"
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
          transform="matrix(1 0 0 1 2063.01 1089)"
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
          transform="matrix(1 0 0 1 2158.31 1089)"
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
          transform="matrix(1 0 0 1 2253.61 1089)"
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
          transform="matrix(1 0 0 1 2348.91 1089)"
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
          transform="matrix(1 0 0 1 2444.21 1089)"
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
          transform="matrix(1 0 0 1 2539.5 1089)"
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
          transform="matrix(1 0 0 1 2634.8 1089)"
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
          transform="matrix(6.12323e-17 -1 1 6.12323e-17 1184.46 873)"
        >
          Max DO (mg / L)
        </text>
      </g>
      <g>
        <text
          fill="#595959"
          fontFamily="Calibri,Calibri_MSFontService,sans-serif"
          fontWeight={400}
          fontSize={46}
          transform="matrix(1 0 0 1 1789.74 1159)"
        >
          Temperature (deg. C)
        </text>
      </g>
      <g>
        <text
          fill="#595959"
          fontFamily="Calibri,Calibri_MSFontService,sans-serif"
          fontWeight={400}
          fontSize={64}
          transform="matrix(1 0 0 1 1516.45 342)"
        >
          Temperature vs Maximum DO
        </text>
      </g>
      <rect
        x="1083.5"
        y="247.5"
        width={1644}
        height={981}
        stroke="#D9D9D9"
        strokeWidth="3.4375"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        fill="none"
      />
    </g>
  </svg>
</>

)

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
            oxygen consumed by microorganisms to decompose organic matter. The
            BOD5 is the five-day oxygen consumption. BOD5 is calculated as the
            difference between the DO of a sample of the water taken immediately
            and the DO of a sample incubated in the dark at 20&deg;C for 5 days.
         </Typography>
      </Box>
   );
}

function Page2() {
   return (
      <Box display="flex" flexDirection="column" alignItems="center">
         <Typography
            sx={{
               p: 2,
               fontSize: { sm: "1rem", lg: "1.2rem" },
            }}
         >
            The <b>DO saturation %</b> is the ratio of concentration of DO
            (measured DO) to the maximum amount of oxygen that will dissolve
            under stable equilibrium conditions (i.e. 100% saturation). <br />
            <MathJaxContext>
               <MathJax style={{ fontSize: "1rem", paddingTop: 5, paddingBottom: 5 }}>
                  {`$$${`\\text{% saturation} = 100 \\text{%} \\times \\frac{\\text{measured DO}}{\\text{max DO}}`}$$`}
               </MathJax>
            </MathJaxContext>
            The DO was measured to be <b>{measured.day0DO}&nbsp;mg&nbsp;/&nbsp;L</b>.
            Given the following graph displaying the maximum oxygen
            concentration at different temperatures, calculate the % saturation
            and record it. 
            <br/><span style={{color: "blue"}}>Use the average temperature between upstream and
            downstream as the temperature value.</span>
            
         </Typography>
         <Box width="70%" pb={2}>

         {graph}
         </Box>
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
         page1={<Page1 />}
         page2={<Page2 />}
      />
   );
}
