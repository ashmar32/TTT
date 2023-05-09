const App = {
  // all of the selected HTML elements
  $: {
    actions: document.querySelector(".actions"),
    actionsItems: document.querySelector(".items"),
  },

  init() {
    App.$.actions.addEventListener("click", (event) => {
      App.$.actionsItems.classList.toggle("hidden");
    });
  },
};

window.addEventListener("load", App.init);
