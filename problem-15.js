const numOfPathsDP = (n) => {
  let grid = Array(n + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));
  // Fill the edges with 1
  for (let i = 0; i <= n; i++) {
    grid[i][0] = 1;
    grid[0][i] = 1;
  }

  // Fill the inside of the grid
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }

  return grid[n][n];
};

module.exports = numOfPathsDP;
