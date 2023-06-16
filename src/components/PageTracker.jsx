import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageTracker({ children }) {
   const location = useLocation();
   const [visits, setVisits] = useState({"/": 0});

   useEffect(() => {
      setVisits((prevVisits) => {
        const updatedVisits = { ...prevVisits };
        updatedVisits[location.pathname] = updatedVisits[location.pathname] + 1;

        return updatedVisits;
      });
   }, [location.pathname]);

   console.log(location.pathname + visits[location.pathname]);

   const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { visits });
    }
    return child;
  });

  return <div>{childrenWithProps}</div>;
}
