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
    moves: [],
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
        // check to see if there has been a move made in picked square
        const moveCheck = (squareId) => {
          const existingMove = App.state.moves.find(
            (move) => move.squareId === squareId
          );
          return existingMove !== undefined;
        };

        if (moveCheck(square.id)) {
          return;
        }

        // determine which icon to add to the square

        // grabbing the last move from the array
        // const lastMove = App.state.moves[App.state.moves.length - 1]

        // this is the short had version of above
        const lastMove = App.state.moves.at(-1);

        // get opposite player from last move to make next player
        const getOppositePlayer = (playerId) => (playerId === 1 ? 2 : 1);

        const currentPlayer =
          App.state.moves.length === 0
            ? 1
            : getOppositePlayer(lastMove.playerId);
        const icon = document.createElement("i");

        if (currentPlayer === 1) {
          icon.classList.add("fa-solid", "fa-x", "turquoise");
        } else {
          icon.classList.add("fa-solid", "fa-o", "yellow");
        }

        App.state.moves.push({
          squareId: square.id,
          playerId: currentPlayer,
        });
        // resetting current player after each turn
        App.state.currentPlayer = currentPlayer === 1 ? 2 : 1;

        console.log(App.state);

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
