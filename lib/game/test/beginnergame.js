require('chai').should();

function Skill(skill, rank) {
  this.check = function check() {
    return void 0;
  }
}

var vex = {
  name: '41-VEX',
  stats: {
    'brawn': 2,
    'agility': 2,
    'intellect': 4,
    'cunning': 1,
    'willpower': 1,
    'presence': 2
  },
  skills: {
    'cool': new Skill('cool', 1)
  }
};

var lowhhrick = {name: 'Lowhhrick'},
  oskara = {name: 'oskara'},
  pash = {name: 'Pash'};

describe.skip('Beginner Box Adventure', function () {

  describe('Encounter 1: On The Run', function () {

    describe('Skill Checks', function () {

      describe('Hiding from thugs', function () {

        it('Requires a successful \'stealth\' skill check', function () {
          oskara.skills.stealth.check();
        });

        describe('Climbing up in the support struts above the room', function () {
          it('Requires a successful \'Athletics\' skill check', function () {
            lowhhrick.skills.athletics.check();
          })
        });

        describe('Hiding in plain sight', function () {
          it('Requires a successful \'Cool\' skill check', function () {
            vex.skills.cool.check();
          })
        })
      });
    });
  });
});