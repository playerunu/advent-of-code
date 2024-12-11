// The input grid
const grid = [
    "MMMSXXMASM",
    "MSAMXMSMSA",
    "AMXSXMAAMM",
    "MSAMASMSMX",
    "XMASAMXAMM",
    "XXAMMXXAMA",
    "SMSMSASXSS",
    "SAXAMASAAA",
    "MAMMMXMMMM",
    "MXMXAXMASX"
];

// The word to search for
const word = "XMAS";

// Possible directions to search in (rowDelta, colDelta)
const directions = [
    [0, 1],   // Right
    [1, 0],   // Down
    [1, 1],   // Down-right (diagonal)
    [1, -1],  // Down-left (diagonal)
    [0, -1],  // Left
    [-1, 0],  // Up
    [-1, -1], // Up-left (diagonal)
    [-1, 1]   // Up-right (diagonal)
];

// Function to check if a word exists at a given start position in a specific direction
const isWordAtPosition = (grid, word, row, col, rowDelta, colDelta) => {
    for (let i = 0; i < word.length; i++) {
        const newRow = row + i * rowDelta;
        const newCol = col + i * colDelta;
        if (
            newRow < 0 || newRow >= grid.length ||
            newCol < 0 || newCol >= grid[0].length ||
            grid[newRow][newCol] !== word[i]
        ) {
            return false;
        }
    }
    return true;
};

// Function to find all occurrences of a word in the grid
const findWordOccurrences = (grid, word) => {
    let count = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            // Check all directions
            for (const [rowDelta, colDelta] of directions) {
                if (isWordAtPosition(grid, word, row, col, rowDelta, colDelta)) {
                    count++;
                }
            }
        }
    }

    return count;
};

// Find and output the total number of occurrences
const totalOccurrences = findWordOccurrences(grid, word);
console.log(`Total occurrences of "${word}": ${totalOccurrences}`);
