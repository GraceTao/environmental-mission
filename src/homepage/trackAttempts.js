export function addAttempt(item) {
   const allAttempts = JSON.parse(localStorage.getItem("attempts"));
   const updatedAttempts = parseInt(allAttempts[item]) + 1;
   localStorage.setItem("attempts", JSON.stringify({...allAttempts, [item]: updatedAttempts}));
   return item + ": " + updatedAttempts;
}
