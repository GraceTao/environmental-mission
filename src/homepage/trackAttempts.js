export function addAttempt(item) {
   const allAttempts = JSON.parse(sessionStorage.getItem("attempts"));
   const updatedAttempts = parseInt(allAttempts[item]) + 1;
   sessionStorage.setItem("attempts", JSON.stringify({...allAttempts, [item]: updatedAttempts}));
   return item + ": " + updatedAttempts;
}
