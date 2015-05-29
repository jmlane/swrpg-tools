require('chai').should();
var Character = require('../character');

describe('Player', function () {
  var player = {
    'characters': []
  };

  it('can control one or more character(s)', function () {
    player.should.have.property('characters')
      .that.is.an('array');
  });
});


describe('Character', function () {
  var character;

  beforeEach(function () {
    character = new Character();
  });

  it('has a name', function () {
    character.should.have.property('name');
  });

  it('has a level', function () {
    character.should.have.property('level')
      .that.is.a('number');
  });

  it('has skills', function () {
    character.should.have.property('skills');
  });
});


describe('Skills', function () {
  var skill;

  before(function () {
    skill = {};
  });

  it('can be \'checked\'', function() {
  });
});