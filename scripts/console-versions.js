// Bounds for the 2D array
const UPPER_BOUND = 4;
const LOWER_BOUND = 0;

// Blank Space Location
const blankSpace = {
	row: '',
	col: '',
};

// Example Board
const exampleGameBoard = [
	['5', '2', ' ', '4'],
	['1', '8', '9', '15'],
	['7', '12', '3', '12'],
	['11', '14', '10', '6'],
];

// Check for legal move
export const checkForSpaceToMove = (row, col) => {
	// Check right side of clicked tile
	if (col + 1 < UPPER_BOUND && exampleGameBoard[row][col + 1] == ' ') {
		console.log(`Right Match: [${row}][${col + 1}]`);
		blankSpace.row = row;
		blankSpace.col = col + 1;

		return true;
	}

	// Check left side of clicked tile
	if (col - 1 >= LOWER_BOUND && exampleGameBoard[row][col - 1] == ' ') {
		console.log(`Left Match: [${row}][${col - 1}]`);
		blankSpace.row = row;
		blankSpace.col = col - 1;

		return true;
	}

	// Check top side of clicked tile
	if (row - 1 >= LOWER_BOUND && exampleGameBoard[row - 1][col] == ' ') {
		console.log(`Top Match: [${row - 1}][${col}]`);
		blankSpace.row = row - 1;
		blankSpace.col = col;

		return true;
	}

	// Check bottom side of clicked tile
	if (row + 1 < UPPER_BOUND && exampleGameBoard[row + 1][col] == ' ') {
		console.log(`Bottom Match: [${row + 1}][${col}]`);
		blankSpace.row = row + 1;
		blankSpace.col = col;

		return true;
	}

	return false;
};

// Make Move Function Checks for a match and if so then swaps the empty tile with the clicked one.
export const makeMove = (row, col) => {
	if (checkForSpaceToMove(row, col)) {
		let temp = exampleGameBoard[1][2];
		exampleGameBoard[blankSpace.row][blankSpace.col] = temp;
		exampleGameBoard[1][2] = ' ';
	}
};

console.log('start', exampleGameBoard);
makeMove(1, 2);
console.log('end', exampleGameBoard);
