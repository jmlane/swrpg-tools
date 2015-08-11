var React = require('react');
var Header = require('./components/Header.jsx');
var GroupTracker = require('./components/GroupTracker.jsx');

var data = {
  characters: [
    {
      name: "Shot Dun Yun",
      player: "Christian",
      career: "Colonist",
      soak: 0
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
    <GroupTracker characters={data.characters} />
  </div>,
  document.body);
