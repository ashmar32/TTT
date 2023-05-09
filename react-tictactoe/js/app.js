const App = {
  // all of the selected HTML elements
  $: {
    actions: document.querySelector('[data-id="actions"]'),
    actionsItems: document.querySelector('[data-id="actions-items"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
    squares: document.querySelectorAll('[data-id="square"]'),
  },

  state: {
    currentPlayer: 1,
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
        console.log("this is the current player: ", App.state.currentPlayer);

        // check to see if there has been a move made in picked square
        if (square.hasChildNodes()) {
          return;
        }

        // determine which icon to add to the square
        const currentPlayer = App.state.currentPlayer;
        const icon = document.createElement("i");

        if (currentPlayer === 1) {
          icon.classList.add("fa-solid", "fa-x", "turquoise");
        } else {
          icon.classList.add("fa-solid", "fa-o", "yellow");
        }
        // resetting current player after each turn
        App.state.currentPlayer = App.state.currentPlayer === 1 ? 2 : 1;
        // adding icon to selected square per turn
        square.replaceChildren(icon);

        // check if game is a win or tie
        const winningPatterns = [
          [1, 2, 3],
          [1, 5, 9],
          [1, 4, 7],
          [2, 5, 8],
          [3, 5, 7],
          [3, 6, 9],
          [4, 5, 6],
          [7, 8, 9],
        ];
      });
    });
  },
};

window.addEventListener("load", App.init);
