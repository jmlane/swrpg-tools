var React = require('react');

var Header = React.createClass({
  render() {
    return (
      <div className="header clearfix">
        <h3 className="text-muted pull-left">Star Wars RPG Tools</h3>
        <nav>
          <ul className="nav nav-pills pull-right">
            <li role="presentation" className="active">
              <a href="#">Status</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
});

module.exports = Header;
