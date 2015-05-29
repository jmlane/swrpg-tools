var React = require('react');

var CharacterSheet = React.createClass({
  render() {
    return (
      <div>
        Character
        {this.props.player}
        <h2>{this.props.name}</h2>

        <dl className="dl-horizontal">
          <dt>Species</dt> <dd></dd>
          <dt>Career</dt> <dd></dd>
          <dt>Specializations</dt> <dd></dd>
        </dl>

        <dl>
          <dt>Soak Value</dt> <dd></dd>
          <dt>Wounds Threshold</dt> <dd></dd>
          <dt>Wounds Current</dt> <dd></dd>
          <dt>Strain Threshold</dt> <dd></dd>
          <dt>Strain Current</dt> <dd></dd>
          <dt>Defense Melee</dt> <dd></dd>
          <dt>Defense Ranged</dt> <dd></dd>
        </dl>

        <h3>Characteristics</h3>

        <div className="row">
          <div className="col-xs-2">Brawn</div>
          <div className="col-xs-2">Agility</div>
          <div className="col-xs-2">Intellect</div>
          <div className="col-xs-2">Cunning</div>
          <div className="col-xs-2">Willpower</div>
          <div className="col-xs-2">Presence</div>
        </div>

        <h3>Skills</h3>
      </div>
    );
  }
});

module.exports = CharacterSheet;
