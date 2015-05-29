/*
 * Symbols
 */
function Symbol(name) {
  this.inspect = function () {
    return name;
  }
}

// Force
var dark = new Symbol('Dark');
var light = new Symbol('Light');

// Positive
var success = new Symbol('Success');
var advantage = new Symbol('Advantage');
var triumph = new Symbol('Triumph');

// Negative
var failure = new Symbol('Failure');
var threat = new Symbol('Threat');
var despair = new Symbol('Despair');

/*
 * Dice
 */
function Force() {
  this.values = [
    dark,
    dark,
    dark,
    dark,
    dark,
    dark,
    [dark, dark],
    light,
    light,
    [light, light],
    [light, light],
    [light, light]
  ];

  this.sides = this.values.length;
}

// Positive
function Ability() {
  this.values = [
    null,
    success,
    success,
    [success, success],
    advantage,
    advantage,
    [success, advantage],
    [advantage, advantage]
  ];

  this.sides = this.values.length;
}

function Boost() {
  this.values = [
    null,
    null,
    success,
    [success, advantage],
    [advantage, advantage],
    advantage
  ];

  this.sides = this.values.length;
}

function Proficiency() {
  this.values = [
    null,
    success,
    success,
    [success, success],
    [success, success],
    advantage,
    [success, advantage],
    [success, advantage],
    [success, advantage],
    [advantage, advantage],
    [advantage, advantage],
    triumph
  ];

  this.sides = this.values.length;
}

// Negative
function Difficulty() {
  this.values = [
    null,
    failure,
    [failure, failure],
    threat,
    threat,
    threat,
    [threat, threat],
    [failure, threat]
  ];

  this.sides = this.values.length;
}

function Setback() {
  this.values = [
    null,
    null,
    failure,
    failure,
    threat,
    threat
  ];

  this.sides = this.values.length;
}

function Challenge() {
  this.values = [
    null,
    failure,
    failure,
    [failure, failure],
    [failure, failure],
    threat,
    threat,
    [failure, threat],
    [failure, threat],
    [threat, threat],
    [threat, threat],
    despair
  ];

  this.sides = this.values.length;
}


module.exports = {
  ability: new Ability(),
  boost: new Boost(),
  proficiency: new Proficiency(),
  difficulty: new Difficulty(),
  setback: new Setback(),
  challenge: new Challenge(),
  force: new Force(),
  symbols: {
    dark: dark,
    light: light,
    success: success,
    advantage: advantage,
    triumph: triumph,
    failure: failure,
    threat: threat,
    despair: despair
  }
};