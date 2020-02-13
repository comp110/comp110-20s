export let array2d = (rows: number, cols: number): number[][] => {
    let result = [];
    for (let row = 0; row < rows; row++) {
        result[row] = [];
        for (let col = 0; col < cols; col++) {
            result[row][col] = 0;
        }
    }
    return result;
};

export let rows: number = 10;
export let cols: number = 12;
export let cells: number[][] = array2d(rows, cols);


/**
 * The isLive function should return true when a row, col is live (1)
 * and false when it is dead (0).
 * 
 * There is an important edge case to consider!
 * 
 * When row or column is < 0 or >= rows / cols, then we should "wrap"
 * the row or column around to the other side of the cells. Think of
 * this like pacman exiting one side of the screen and coming out of
 * the opposite.
 * 
 * The specific edge cases we must handle for row are when:
 *  - row is -1
 *  - row is rows
 *  - col is -1
 *  - col is cols
 */
export let isLive = (row: number, col: number): boolean => {
    // TODO
    return false;
};

/**
 * Given a row and column, check the surrounding 8 cells and count
 * the number which are live.
 */
export let countLiveNeighbors = (row: number, col: number): number => {
    // TODO
    return 0;
}

/**
 * Given the state of all cells currently, compute the next state of
 * all cells and replace the cells property with the next state.
 * 
 * This method is called by the controller once when the "Step" button
 * is pressed. It is called continuously every quarter second when the
 * "Start" button is pressed.
 */
export let step = (): void => {
    let next: number[][] = array2d(rows, cols);
    
    // TODO

    cells = next;
}

/**
 * The rules in conway's game of life are:
 * 
 * 1. Underpopulation: A live cell with fewer than 2 live neighbors dies.
 * 2. Stasis: A live cell with 2 or 3 live neighbors lives.
 * 3. Overpopulation: A live cell with more than 3 live neighbors dies.
 * 4. Reproduction: A dead cell with 3 live neighbors comes to life.
 */
export let rules = (row: number, col: number): number => {
    // TODO: Fix this logic.
    if (isLive(row, col)) {
        return 0; // Dead
    } else {
        return 1; // Alive
    }
}

/**
 * This method is called by the controller when the game is stopped
 * and the user clicks on a particular cell.
 */
export let toggle = (row: number, col: number): void => {
    if (cells[row][col] > 0) {
        cells[row][col] = 0;
    } else {
        cells[row][col] = 1;
    }
}

/**
 * This method is called by the controller when the user resets the game.
 */
export let reset = (): void => {
    cells = array2d(rows, cols);
};