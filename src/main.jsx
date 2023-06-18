import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./homepage/Home";
import WQIHome from "./tasks/water-quality/WQIHome";

function App() {

   return (
     <Router>
       <Routes>
         <Route exact path="/" element={<Home />}/>
         <Route path="/wqi-p1" element={<WQIHome />}/>
       </Routes> 
     </Router>
   );
 }


ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
