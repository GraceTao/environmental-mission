import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./homepage/Home";
import WQI from "./tasks/WQI";
import PageTracker from "./components/PageTracker";

function App() {
   return (
     <Router>
       <Routes>
         <Route exact path="/" element={<Home />}/>
         <Route path="/wqi-home" element={<WQI />}/>
       </Routes> 
     </Router>
   );
 }


ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
