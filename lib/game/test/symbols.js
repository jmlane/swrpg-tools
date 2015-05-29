require('chai').should();

var dice = require('../dice.js');

describe('Symbols', function () {

  describe('Positive', function () {

    describe('Success', function () {

      it('is canceled by a Failure symbol');

      it('is required--at least one uncanceled--for a successful result');

      it('determines the magnitude of success');
      // E.g. four net Successes would inflict four additional damage in combat.
    });

    describe('Advantage', function () {

      it('indicates an opportunity for a positive consequence');

      it('does not affect the success or failure of an outcome');

      it('is canceled by a Threat symbol');
    });

    describe('Triumph', function () {

      it('indicates a significant boon or beneficial outcome');

      it('counts as one Success');

      it('can be used to trigger incredibly potent effects');

      it('applies both effects simultaneously');
    });
  });

  describe('Negative', function () {

    describe('Failure', function () {

      it('cancels a Success symbol');

      it('uncanceled Failure symbols do not cause any additional effects');
    });

    describe('Threat', function () {

      it('indicates the possibility of a negative consequence');

      it('does not affect the success or failure of an outcome');

      it('cancels an Advantage symbol');
    });

    describe('Despair', function () {

      it('indicates a significant bane or detrimental outcome');

      it('counts as one Failure');

      it('can be used to trigger potent negative effects');

      it('applies both effects simultaneously');
    });
  });
});
