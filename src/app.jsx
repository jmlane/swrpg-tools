var React = require('react');
var Header = require('./components/Header.jsx');
var CharacterTable = require('./CharacterTable.jsx');
var CharacterSheet = require('./CharacterSheet.jsx');

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
    },
    {
      name: "Onin",
      player: "Kyle",
      career: "Hired Gun"
    },
    {
      name: "Tuck Cosmicfall",
      player: "Heather",
      career: "Bounty Hunter"
    },
    {
      name: "Prof. Bidbits",
      player: "Kris",
      career: "Colonist"
    }
  ]
};

React.render(
  <div className="container" >
    <Header />
    <CharacterTable data={data.characters} />
    <CharacterSheet name={data.characters[0].name} player={data.characters[0].player} />
  </div>,
  document.body);
