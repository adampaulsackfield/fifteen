import { makeMove, checkForSpaceToMove } from '../scripts/console-versions';

describe('Finding Empty Space', () => {
	it('should be able to find an empty space above the selected coords', () => {
		const startingBoard = [
			['5', '2', '9', '4'],
			['1', ' ', '8', '15'],
			['7', '12', '3', '12'],
			['11', '14', '10', '6'],
		];

		const emptySpace = '11'; // User will click 2,1

		expect(checkForSpaceToMove(2, 1)).toBe('hel');
	});
});
