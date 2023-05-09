const App = {
  // all of the selected HTML elements
  $: {
    actions: document.querySelector('[data-id="actions"]'),
    actionsItems: document.querySelector('[data-id="actions-items"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
    squares: document.querySelectorAll('[data-id="square"]'),
  },

  init() {
    App.registerEventListeners();
  },

  //   function created to use in int to runa ll the event listeners
  registerEventListeners() {
    App.$.actions.addEventListener("click", (event) => {
      App.$.actionsItems.classList.toggle("hidden");
    });

    App.$.resetBtn.addEventListener("click", (event) => {
      console.log("reset stuff:");
    });

    App.$.newRoundBtn.addEventListener("click", (event) => {
      console.log("new round");
    });

    App.$.squares.forEach((square) => {
      square.addEventListener("click", (event) => {
        console.log("this is the id of the square clicked: ", event.target.id);
      });
    });
  },
};

window.addEventListener("load", App.init);
