var React = require('react');

module.exports = React.createClass({
  render: function () {
    var rows = this.props.data.map((character) => {
      return (
        <tr>
          <th scope="row">{character.name}</th>
          <td>{character.career}</td>
          <td>{character.player}</td>
        </tr>
      )
    });

    return (
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
    )
  }
});