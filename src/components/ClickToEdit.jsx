const React = require('react');

const ClickToEdit = React.createClass({
  getDefaultProps() {
    return {
      type: 'text',
      label: void 0,
      value: void 0
    };
  },

  getInitialState() {
    return {
      value: this.props.value,
      active: false
    };
  },

  clickHandler() {
    this.setState({
      active: true
    });
    document.addEventListener('click', this.finalizeHandler);
  },

  finalizeHandler(event) {
    event.preventDefault();
    this.setState({
      active: false
    });
    document.removeEventListener('click', this.finalizeHandler);
  },

  render() {
    const edittable = () => {
      return (
        <div ref="edittable" className="input-group input-group-sm">
          <input type={this.props.type}
                 className="form-control"
                 aria-label={this.props.label}
                 value={this.state.value}
            />
        </div>
      );
    };

    const inactive = () => {
      return <div onClick={this.clickHandler}>{this.props.value}</div>
    };

    return this.state.active ? edittable() : inactive();
  }
});

module.exports = ClickToEdit;
