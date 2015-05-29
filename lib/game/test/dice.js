var chai = require('chai');
var should = chai.should();
chai.use(require('chai-things'));
var dice = require('../dice.js');

describe('Dice', function () {
  var dark = dice.symbols.dark,
    light = dice.symbols.light,
    success = dice.symbols.success,
    advantage = dice.symbols.advantage,
    triumph = dice.symbols.triumph,
    failure = dice.symbols.failure,
    threat = dice.symbols.threat,
    despair = dice.symbols.despair;

  describe('Positive', function () {

    describe('Ability', function () {
      var die;

      before(function () {
        die = dice.ability;
      });

      it('is a green eight-sided dice', function () {
        die.should.have.property('sides').equal(8);
      });

      it('represents the character\'s aptitude or skill during skill checks');

      describe('has these sides', function() {

        it('1: Blank', function () {
          should.not.exist(die.values[0]);
        });

        it('2: Success', function () {
          die.values[1].should.equal(success);
        });

        it('3: Success', function () {
          die.values[2].should.equal(success);
        });

        it('4: Success, success', function () {
          var side = die.values[3];
          side.should.not.include.something.that.is.not.equal(success);
          side.should.have.length(2);
        });

        it('5: Advantage', function () {
          die.values[4].should.equal(advantage);
        });

        it('6: Advantage', function () {
          die.values[5].should.equal(advantage);
        });

        it('7: Success, advantage', function () {
          var side = die.values[6];
          side.should.include.something.that.equals(success);
          side.should.include.something.that.equals(advantage);
          side.should.have.length(2);
        });

        it('8: Advantage, advantage', function () {
          var side = die.values[7];
          side.should.not.include.something.that.is.not.equal(advantage);
          side.should.have.length(2);
        });
      });
    });

    describe('Boost', function () {
      var die;

      before(function () {
        die = dice.boost;
      });

      it('is a light blue six-sided dice', function () {
        die.should.have.property('sides').equal(6);
      });

      it('represents the benefits gained through luck, chance, and advantageous actions');

      describe('has these sides', function() {

        it('1: Blank', function () {
          should.not.exist(die.values[0]);
        });

        it('2: Blank', function () {
          should.not.exist(die.values[1]);
        });

        it('3: Success', function () {
          die.values[2].should.equal(success);
        });

        it('4: Success, advantage', function () {
          var side = die.values[3];
          side.should.include.something.that.equals(success);
          side.should.include.something.that.equals(advantage);
          side.should.have.length(2);
        });

        it('5: Advantage, advantage', function () {
          var side = die.values[4];
          side.should.not.include.something.that.is.not.equal(advantage);
          side.should.have.length(2);
        });

        it('6: Advantage', function () {
          die.values[5].should.equal(advantage);
        });
      });
    });

    describe('Proficiency', function () {
      var die;

      beforeEach(function () {
        die = dice.proficiency;
      });

      it('is a yellow twelve-sided dice', function () {
        die.should.have.property('sides').equal(12);
      });

      it('represents a combination of a character\'s innate ability and training');

      it('is the upgraded version of Ability dice');

      describe('has these sides', function() {

        it('1: Blank', function () {
          should.not.exist(die.values[0]);
        });

        it('2: Success', function () {
          die.values[1].should.equal(success);
        });

        it('3: Success', function () {
          die.values[2].should.equal(success);
        });

        it('4: Success, success', function () {
          var side = die.values[3];
          side.should.not.include.something.that.is.not.equal(success);
          side.should.have.length(2);
        });

        it('5: Success, success', function () {
          var side = die.values[4];
          side.should.not.include.something.that.is.not.equal(success);
          side.should.have.length(2);
        });

        it('6: Advantage', function () {
          die.values[5].should.equal(advantage);
        });

        it('7: Success, advantage', function () {
          var side = die.values[6];
          side.should.include.something.that.equals(success);
          side.should.include.something.that.equals(advantage);
          side.should.have.length(2);
        });

        it('8: Success, advantage', function () {
          var side = die.values[7];
          side.should.include.something.that.equals(success);
          side.should.include.something.that.equals(advantage);
          side.should.have.length(2);
        });

        it('9: Success, advantage', function () {
          var side = die.values[8];
          side.should.include.something.that.equals(success);
          side.should.include.something.that.equals(advantage);
          side.should.have.length(2);
        });

        it('10: Advantage, advantage', function () {
          var side = die.values[9];
          side.should.not.include.something.that.is.not.equal(advantage);
          side.should.have.length(2);
        });

        it('11: Advantage, advantage', function () {
          var side = die.values[10];
          side.should.not.include.something.that.is.not.equal(advantage);
          side.should.have.length(2);
        });

        it('12: Triumph', function () {
          die.values[11].should.equal(triumph);
        });
      });
    });
  });

  describe('Negative', function () {

    describe('Difficulty', function () {
      var die;

      beforeEach(function () {
        die = dice.difficulty;
      });

      it('is a purple eight-sided dice', function () {
        die.should.have.property('sides').equal(8);
      });

      it('represents the inherent challenge or complexity of a particular task');

      describe('has these sides', function() {

        it('1: Blank', function () {
          should.not.exist(die.values[0]);
        });

        it('2: Failure', function () {
          die.values[1].should.equal(failure);
        });

        it('3: Failure, failure', function () {
          var side = die.values[2];
          side.should.not.include.something.that.is.not.equal(failure);
          side.should.have.length(2);
        });

        it('4: Threat', function () {
          die.values[3].should.equal(threat);
        });

        it('5: Threat', function () {
          die.values[4].should.equal(threat);
        });

        it('6: Threat', function () {
          die.values[5].should.equal(threat);
        });

        it('7: Threat, threat', function () {
          var side = die.values[6];
          side.should.not.include.something.that.is.not.equal(threat);
          side.should.have.length(2);
        });

        it('8: Failure, threat', function () {
          var side = die.values[7];
          side.should.include.something.that.equals(failure);
          side.should.include.something.that.equals(threat);
          side.should.have.length(2);
        });
      });
    });

    describe('Setback', function () {
      var die;

      beforeEach(function () {
        die = dice.setback;
      });

      it('is a black six-sided dice', function () {
        die.should.have.property('sides').equal(6);
      });

      it('represents problems or minor obstacles during task resolution');

      describe('has these sides', function() {

        it('1: Blank', function () {
          should.not.exist(die.values[0]);
        });

        it('2: Blank', function () {
          should.not.exist(die.values[1]);
        });

        it('3: Failure', function () {
          die.values[2].should.equal(failure);
        });

        it('4: Failure', function () {
          die.values[3].should.equal(failure);
        });

        it('5: Threat', function () {
          die.values[4].should.equal(threat);
        });

        it('6: Threat', function () {
          die.values[5].should.equal(threat);
        });
      });
    });

    describe('Challenge', function () {
      var die;

      beforeEach(function () {
        die = dice.challenge;
      });

      it('is a red twelve-sided dice', function () {
        die.should.have.property('sides').equal(12);
      });

      it('represents the most extreme adversity or opposition');

      it('is the upgraded version of Challenge dice');

      describe('has these sides', function() {

        it('1: Blank', function () {
          should.not.exist(die.values[0]);
        });

        it('2: Failure', function () {
          die.values[1].should.equal(failure);
        });

        it('3: Failure', function () {
          die.values[2].should.equal(failure);
        });

        it('4: Failure, failure', function () {
          var side = die.values[3];
          side.should.not.include.something.that.is.not.equal(failure);
          side.should.have.length(2);
        });

        it('5: Failure, failure', function () {
          var side = die.values[4];
          side.should.not.include.something.that.is.not.equal(failure);
          side.should.have.length(2);
        });

        it('6: Threat', function () {
          die.values[5].should.equal(threat);
        });

        it('7: Threat', function () {
          die.values[6].should.equal(threat);
        });

        it('8: Failure, threat', function () {
          var side = die.values[7];
          side.should.include.something.that.equals(failure);
          side.should.include.something.that.equals(threat);
          side.should.have.length(2);
        });

        it('9: Failure, threat', function () {
          var side = die.values[8];
          side.should.include.something.that.equals(failure);
          side.should.include.something.that.equals(threat);
          side.should.have.length(2);
        });

        it('10: Threat, threat', function () {
          var side = die.values[9];
          side.should.not.include.something.that.is.not.equal(threat);
          side.should.have.length(2);
        });

        it('11: Threat, threat', function () {
          var side = die.values[10];
          side.should.not.include.something.that.is.not.equal(threat);
          side.should.have.length(2);
        });

        it('12: Despair', function () {
          die.values[11].should.equal(despair);
        });
      });
    });
  });

  describe('Force', function () {
    var die;

    beforeEach(function () {
      die = dice.force;
    });

    it('is a white twelve-sided dice', function () {
      die.should.have.property('sides').equal(12);
    });

    it('represents the power and pervasiveness of the Force');

    it('is only used when players generate their starting Destiny pool');

    describe('has these sides', function() {

      it('1: Dark', function () {
        die.values[0].should.equal(dark);
      });

      it('2: Dark', function () {
        die.values[1].should.equal(dark);
      });

      it('3: Dark', function () {
        die.values[2].should.equal(dark);
      });

      it('4: Dark', function () {
        die.values[3].should.equal(dark);
      });

      it('5: Dark', function () {
        die.values[4].should.equal(dark);
      });

      it('6: Dark', function () {
        die.values[5].should.equal(dark);
      });

      it('7: Dark, dark', function () {
        var side = die.values[6];
        side.should.not.include.something.that.is.not.equal(dark);
        side.should.have.length(2);
      });

      it('8: Light', function () {
        die.values[7].should.equal(light);
      });

      it('9: Light', function () {
        die.values[8].should.equal(light);
      });

      it('10: Light, light', function () {
        var side = die.values[9];
        side.should.not.include.something.that.is.not.equal(light);
        side.should.have.length(2);
      });

      it('11: Light, light', function () {
        var side = die.values[10];
        side.should.not.include.something.that.is.not.equal(light);
        side.should.have.length(2);
      });

      it('12: Light, light', function () {
        var side = die.values[11];
        side.should.not.include.something.that.is.not.equal(light);
        side.should.have.length(2);
      });
    });
  });
});
