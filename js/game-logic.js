// All code should be written in this file.
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;

let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;

let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;

let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

const P1 = 'Player One';
const P2 = 'Player Two';
const TIE = 'Tie';
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

const setPlayerMoves = (player, m1t, m1v, m2t, m2v, m3t, m3v) => {
  // moveOneType: m1v, etc.

  debugger;
  if (!m1t || !m1v || !m2t || !m2v || !m3t || !m3v) {
    return;
  }

  if (!validTypes(m1t, m2t, m3t)) {
    return;
  }

  if (!validValues(m1v, m2v, m3v)) {
    return;
  }

  switch(player) {
    case P1:
    playerOneMoveOneType = m1t;
    playerOneMoveOneValue = m1v;
    playerOneMoveTwoType = m2t;
    playerOneMoveTwoValue = m2v;
    playerOneMoveThreeType = m3t;
    playerOneMoveThreeValue = m3v;
    break;

    case P2:
    playerTwoMoveOneType = m1t;
    playerTwoMoveOneValue = m1v;
    playerTwoMoveTwoType = m2t;
    playerTwoMoveTwoValue = m2v;
    playerTwoMoveThreeType = m3t;
    playerTwoMoveThreeValue = m3v;
    break;
  }
};

const validTypes = (t1, t2, t3) =>
  validType(t1) && validType(t2) && validType(t3);

const validType = (type) => type === ROCK || type === PAPER || type === SCISSORS;

const validValues = (v1, v2, v3) =>
  v1 >= 1 && v2 >= 1 && v3 >= 1 && v1 + v2 + v3 <= 99;

const getRoundWinner = () => {

}

const getGameWinner = () => {

}

const setComputerMoves = () => {

}
