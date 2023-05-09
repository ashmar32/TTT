// get the div element .actions and .items
const actions = document.querySelector(".actions");
// actionsItems gets the div from the above created actions query
const actionsItems = actions.querySelector(".items");
// addEventListener
actions.addEventListener("click", (event) => {
  // this allows us to toggle the hidden class each time the click happens from the event listener on the actions class
  actionsItems.classList.toggle("hidden");
});
