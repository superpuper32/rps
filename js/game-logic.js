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

const getRoundWinner = round => {
  let p1t;
  let p1v;
  let p2t;
  let p2v;

  switch (round) {
    case 1:
      p1t = playerOneMoveOneType;
      p1v = playerOneMoveOneValue;
      p2t = playerTwoMoveOneType;
      p2v = playerTwoMoveOneValue;
      break;

    case 2:
      p1t = playerOneMoveTwoType;
      p1v = playerOneMoveTwoValue;
      p2t = playerTwoMoveTwoType;
      p2v = playerTwoMoveTwoValue;
      break;

    case 3:
      p1t = playerOneMoveThreeType;
      p1v = playerOneMoveThreeValue;
      p2t = playerTwoMoveThreeType;
      p2v = playerTwoMoveThreeValue;
      break;

    default:
      return null;
  }

  return evaluateMove(p1t, p1v, p2t, p2v);
};


const evaluateMove = (p1t, p1v, p2t, p2v) => {
  // ensure that all moves are present
  if (!p1t || !p1v || !p2t || !p2v) {
    return null;
  }

  // if types are the same, winner is based on the highest value
  if (p1t === p2t) {
    if (p1v === p2v) {
      return TIE;
    }
    return p1v > p2v ? P1 : P2;
  }

  // types are different, rules RPS are apply
  switch (p1t) {
    case ROCK:
      return p2t === SCISSORS ? P1 : P2;

    case PAPER:
      return p2t === ROCK ? P1 : P2;

    case SCISSORS:
      return p2t === PAPER ? P1 : P2;

  }
};


const getGameWinner = () => {

};

const setComputerMoves = () => {

};
