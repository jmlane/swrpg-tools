const React = require('react');
const ClickToEdit = require('./ClickToEdit.jsx');

const GroupStatusTable = React.createClass({
  getDefaultProps() {
    return {
      characters: []
    };
  },

  render() {
    const rows = this.props.characters.map((character, i) => {
      return (
        <tr key={i}>
          <th scope="row">{character.name}</th>
          <td><ClickToEdit value={character.soak} type="number"/></td>
          <td>{character.defense}</td>
          <td>{character.woundThreshold}</td>
          <td>{character.wounds}</td>
          <td>{character.strainThreshold}</td>
          <td>{character.strain}</td>
        </tr>
      );
    });

    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>Name</th>
          <th>Soak</th>
          <th>Defense</th>
          <th><abbr title="Wound Threshold">W/T</abbr></th>
          <th>Wounds</th>
          <th><abbr title="Strain Threshold">S/T</abbr></th>
          <th>Strain</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    );
  }
});

module.exports = GroupStatusTable;
