/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


window.copySliceBoard = function(array) {
  // var result = [];
  // for(var i = 0; i < array.length; i++) {
  //   result.push( array[i].slice(0));
  // }
  // return result;
  var board = JSON.stringify(array);
  var newboard = JSON.parse(board);
  return newboard;
};


window.findNRooksSolution = function(num) {
  var board = new Board({n:num});

  for(var i = 0; i < board.rows().length; i++) {

   board.togglePiece(i,i);

  }

  return board.rows();
};

window.findAllRooksSolution = function(num) {
  // var board = new Board({n:num});
  var results = [];

  var recurse = function(rows, currentBoard) {
    currentBoard = currentBoard || new Board({n:num});
    rows = rows || 0;

    if(rows === num) {
      results.push(currentBoard);
    
    } else {

      for(var col = 0; col < num; col++) {
        currentBoard.togglePiece(rows, col);

        //if no colisions
        if( !(currentBoard.hasAnyColConflicts() ||
              currentBoard.hasAnyRowConflicts()) ) {
          // recurse to next row using current board
          var nextBoard = new Board(copySliceBoard(currentBoard.rows()));
          recurse(rows + 1, nextBoard);
        }

        currentBoard.togglePiece(rows, col);

      }

    }

  };

  recurse();

  return  results;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(num) {



  var solutionCount = findAllRooksSolution(num).length;
  console.log('Number of solutions for ' + num + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
