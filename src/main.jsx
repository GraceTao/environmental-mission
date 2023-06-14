import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./homepage/Home";
import Task1 from "./tasks/Task1";

function App() {
   return (
     <Router>
       <Routes>
         <Route exact path="/" element={<Home />} />
         <Route path="/task1" element={<Task1 />} />
       </Routes>
     </Router>
   );
 }


ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
