var React = require('react');

var CharacterTable = React.createClass({
  render() {
    var rows = this.props.data.map((character) => {
      return (
        <tr>
          <th scope="row">{character.name}</th>
          <td>{character.career}</td>
          <td>{character.player}</td>
        </tr>
      )
    });

    return(
      <table className="table table-hover">
        <thead>
        <tr>
          <th>Name</th>
          <th>Career</th>
          <th>Player</th>
        </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
});

var data = {
  characters: [
    {
      name: "Shot Dun Yun",
      player: "Christian",
      career: "Colonist"
    },
    {
      name: "B1-L1",
      player: "Bill",
      career: "Bounty Hunter"
    }
  ]
};

React.render(
  React.createElement(CharacterTable, {data: data.characters}),
  document.getElementById('character-table'));
