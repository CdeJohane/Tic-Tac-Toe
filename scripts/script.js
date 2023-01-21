// Game Object module pattern
const gameObject = (() => {
  // Empty Array for the squares
  const squares = [];

  // Creating the board
  const createBoard = (() => {
    // eslint-disable-next-line space-before-blocks
    for (let row=1; row<=3; row++){
      for (let column = 1; column<=3; column++) {
        squares.push(gameSquare(row, column, 0));
        squares[squares.length -1].newSquare;
      }
    }
  });

  return {
    createBoard,
  };
})();

const gameSquare = (row, column, value) =>{
  // Get The board Element
  const board = document.getElementById('board');

  // create div for square
  const newSquare = (() => {
    const smallSquare = document.createElement('div');
    const height = 395/3;
    const width = 395/3;
    // Style the Square
    smallSquare.style.height = `${height}px`;
    smallSquare.style.width = `${width}px`;
    smallSquare.style.borderColor = 'black';
    smallSquare.style.borderStyle = 'dashed';
    smallSquare.style.borderWidth = '1px';

    // For when it clicks
    smallSquare.addEventListener('click', (e) =>{
      if (condition) {
        value = 1;
        smallSquare.style.backgroundColor = 'blue';
      }
    },
    );
    // Add it to the board
    board.append(smallSquare);
    console.log('flagged');
  })();

  return {
    row, column, value, newSquare,
  };
};

/** Check if Someone has won or they are no correct answers left */
// eslint-disable-next-line no-unused-vars, require-jsdoc
function verifyClick() {

}

gameObject.createBoard();

