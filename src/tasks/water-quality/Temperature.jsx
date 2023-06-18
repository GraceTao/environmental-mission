import ThermostatIcon from '@mui/icons-material/Thermostat';
import IndicatorInfo from "./IndicatorInfo";
import {Box, Typography} from "@mui/material";

export default function Temperature() {
    return (
        <IndicatorInfo
           icon={<ThermostatIcon sx={{color: "blue", fontSize: "4vw", backgroundColor: "lightgray", borderRadius: 3}}/>}
           position={{ top: "55vh", left: "30vw" }}
           anchor={{ vertical: "bottom", horizontal: "center" }}
           page1={<p>hihi<br/>hi</p>}
           page2={<p>bye</p>}
        />
     );
}