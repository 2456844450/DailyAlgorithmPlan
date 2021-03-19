//解数独  回溯 递归

function solveSudoku(gameArr) {
  var emptySpot = nextEmptySpot(gameArr);
  var r = emptySpot[0];
  var c = emptySpot[1];

  // if the game is unsolvable don't even try to solve it
  if (!isValidSudoku(gameArr)) return gameArr;

  // if no vacant spot is left, board is solved
  if (r === -1) {
    return gameArr;
  }

  var possArr = possibilities(r, c, gameArr);

  for (var k = 0; k < possArr.length && nextEmptySpot(gameArr)[0] !== -1; k++) {
    gameArr[r][c] = possArr[k];
    solveSudoku(gameArr);
  }

  // if no possible value leads to a solution reset this value
  if (nextEmptySpot(gameArr)[0] !== -1) gameArr[r][c] = 0;

  return gameArr;
}

function nextEmptySpot(gameArr) {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (gameArr[i][j] === 0) return [i, j];
    }
  }

  //都填满了
  return [-1, -1];
}

function possibilities(r, c, gameArr) {
  var possArr = [];
  var row = [];
  var col = [];
  var quad = [];
  var k = 0;
  var l = 0;

  if (r <= 2) k = 0;
  else if (r <= 5) k = 3;
  else k = 6;
  if (c <= 2) l = 0;
  else if (c <= 5) l = 3;
  else l = 6;

  for (var i = 0; i < 9; i++) {
    row.push(gameArr[i][c]);
  }

  for (var j = 0; j < 9; j++) {
    col.push(gameArr[r][j]);
  }

  for (var i = k; i < k + 3; i++) {
    for (var j = l; j < l + 3; j++) {
      quad.push(gameArr[i][j]);
    }
  }

  for (var n = 1; n < 10; n++) {
    if (
      row.indexOf(n) === -1 &&
      col.indexOf(n) === -1 &&
      quad.indexOf(n) === -1
    ) {
      possArr.push(n);
    }
  }

  return possArr;
}

function checkQuadrant(r, c, gameArr) {
  var quadrantArr = [];
  for (var i = r; i < r + 3; i++) {
    for (var j = c; j < c + 3; j++) {
      if (quadrantArr.indexOf(gameArr[i][j]) === -1 || gameArr[i][j] === 0) {
        quadrantArr.push(gameArr[i][j]);
      } else {
        return false;
      }
    }
  }

  return true;
}

function isValidSudoku(gameArr) {
  //3x3检查
  if (!checkQuadrant(0, 0, gameArr)) return false;
  if (!checkQuadrant(0, 3, gameArr)) return false;
  if (!checkQuadrant(0, 6, gameArr)) return false;

  if (!checkQuadrant(3, 0, gameArr)) return false;
  if (!checkQuadrant(3, 3, gameArr)) return false;
  if (!checkQuadrant(3, 6, gameArr)) return false;

  if (!checkQuadrant(6, 0, gameArr)) return false;
  if (!checkQuadrant(6, 3, gameArr)) return false;
  if (!checkQuadrant(6, 6, gameArr)) return false;

  //9x9 横检查
  for (var i = 0; i < gameArr.length; i++) {
    var rowNumbers = [];
    for (var j = 0; j < gameArr.length; j++) {
      if (rowNumbers.indexOf(gameArr[i][j]) === -1 || gameArr[i][j] === 0) {
        rowNumbers.push(gameArr[i][j]);
      } else {
        return false;
      }
    }
  }

  //9x9 竖检查
  for (var i = 0; i < gameArr.length; i++) {
    var colNumbers = [];
    for (var j = 0; j < gameArr.length; j++) {
      if (colNumbers.indexOf(gameArr[j][i]) === -1 || gameArr[j][i] === 0) {
        colNumbers.push(gameArr[j][i]);
      } else {
        return false;
      }
    }
  }

  return true;
}

var gameArr = [
  [2, 0, 3, 0, 0, 8, 6, 0, 7],
  [1, 4, 0, 7, 2, 6, 0, 0, 9],
  [5, 0, 7, 1, 3, 9, 4, 2, 8],
  [0, 2, 5, 0, 8, 1, 9, 0, 4],
  [4, 1, 0, 9, 0, 3, 2, 0, 5],
  [0, 7, 9, 2, 0, 5, 0, 3, 6],
  [6, 0, 2, 0, 1, 0, 0, 9, 3],
  [7, 0, 0, 5, 0, 2, 0, 0, 1],
  [0, 8, 1, 3, 6, 7, 0, 4, 0],
];

solveSudoku(gameArr);

console.log("Solved");
console.log(gameArr);
console.log(isValidSudoku(gameArr));
