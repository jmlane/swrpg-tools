var React = require('react');

var CharacterTable = React.createClass({
  getInitialState() {
    return {
      characters: []
    }
  },

  componentDidMount() {
    $.ajax('/api/characters')
      .done((data) => {
        if (!this.isMounted) return;
        this.setState({
          characters: data
        });
      });
  },

  render: function () {
    var rows = this.state.characters.map((character) => {
      return (
        <tr>
          <th scope="row">{character.name}</th>
          <td>{character.career}</td>
          <td>{character.player}</td>
        </tr>
      )
    });

    return (
      <div>
        <h2>Characters</h2>
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
      </div>
    )
  }
});

module.exports = CharacterTable;
