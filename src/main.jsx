import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./homepage/Home";
import WQIHome from "./tasks/water-quality/wqi-part1/WQIHome";
import WQIPart2 from "./tasks/water-quality/wqi-part2/WQIPart2";
import WQIPart3 from "./tasks/water-quality/wqi-part3/WQIPart3";
import FinalTaskLogin from "./tasks/final-task/FinalTaskLogin";
import Email from "./tasks/email/Documents";


function App() {
   return (
      <Router>
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/wqi-p1" element={<WQIHome />} />
            <Route path="/wqi-p2" element={<WQIPart2 />} />
            <Route path="/wqi-p3" element={<WQIPart3 />} />
            <Route path="/account" element={<FinalTaskLogin />} />
            <Route path="/email" element={<Email />} />

            
         </Routes>
      </Router>
   );
}

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
