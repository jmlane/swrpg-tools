var React = require('react');
var CharacterTable = require('./CharacterTable.jsx');

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
  <div className="container" >
    <CharacterTable data={data.characters} />
  </div>,
  document.body);