const React = require('react');
const GroupStatusTable = require('./GroupStatusTable.jsx');

const GroupTracker = React.createClass({
  render() {
    return (
      <div>
        <GroupStatusTable characters={this.props.characters} />
        {/*<GroupObligationTable />)*/}
        {/*<DestinyPool />*/}
      </div>
    );
  }
});

module.exports = GroupTracker;
