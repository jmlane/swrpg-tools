var React = require('react');
var Header = require('./components/Header.jsx');
var CharacterTable = require('./CharacterTable.jsx');

React.render(
  <div className="container" >
    <Header />
    <CharacterTable />
  </div>,
  document.body);
