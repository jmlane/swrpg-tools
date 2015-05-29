var React = require('react');

var InitiativeTool = React.createClass({
  getInitialState() {
    return {
      data: this.props.data,
      round: 1
    };
  },

  getClosestRow(target) {
    return target.closest('tr');
  },

  rowDragStart(e) {
    var dataTransfer = e.dataTransfer;
    dataTransfer.effectAllowed = 'move';
    dataTransfer.setDragImage(e.target, e.target.width, e.target.height);
    dataTransfer.setData('application/json', e.target);
    this.setState({draggedRow: e.target});
  },

  rowDragEnd(e) {
    this.setState({draggedRow: null});
  },

  rowDragOver(e) {
    if(e.dataTransfer.types.reduce((prev, curr) => {
        return prev || curr === 'application/json';
      }, false)) {
      e.preventDefault();
    }
  },

  rowDragEnter(e) {
    if (this.state.draggedRow) {
      e.preventDefault();
      var target = this.getClosestRow(e.target);
      if (this.state.draggedRow !== target) {
        var from = this.state.draggedRow.dataset.key;
        var to = target.dataset.key;
        var data = this.state.data;
        data.splice(to, 0, ...data.splice(from, 1));
        this.setState({
          data: data,
          draggedRow: target
        });
      }
    }
  },

  render() {
    console.log('render()');
    var isDraggedRow = (key) => {
      return this.state.draggedRow &&
        this.state.draggedRow.dataset.key == key;
    };

    var rows = this.state.data.map((row, i) => {
      var classNames = [];

      if (isDraggedRow(i)) classNames.push('active');

      return (
        <tr key={i}
            data-key={i}
            className={classNames}
            draggable="true"
            onDragStart={this.rowDragStart}
            onDragEnd={this.rowDragEnd}
            onDragOver={this.rowDragOver}
            onDragEnter={this.rowDragEnter}>
          <th scope="row">{i + 1}</th>
          <td>{row.name}</td>
          <td>{row.note}</td>
        </tr>
      );
    });

    return (
      <div id="initiative-tool">
        <h1>Initiative</h1>

        <div className="btn-toolbar" role="toolbar" aria-label="round toolbar">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary">Next In Order</button>
          </div>

          <div className="input-group" style={{width: '300px'}}>
            <input type="text" className="form-control" placeholder="Character" aria-describedby="basic-addon1" />
            <div className="input-group-btn">
              <button className="btn btn-default" type="button">Add</button>
            </div>
          </div>
        </div>

        <h2>Round {this.state.round}</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th><abbr title="Order number">#</abbr></th>
              <th>Character</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = InitiativeTool;
