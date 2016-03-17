const React = require('react');
const $ = require('jquery');

const IsNodeOrAChildOf = (node, target) => {
  return $(target).find(node).length > 0;
};

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
    if (IsNodeOrAChildOf(event.target, React.findDOMNode(this.refs.edittable))) {
      return;
    }
    event.preventDefault();
    this.setState({
      active: false,
      value: React.findDOMNode(this.refs.input).value
    });
    document.removeEventListener('click', this.finalizeHandler);
  },

  render() {
    const edittable = () => {
      return (
        <div ref="edittable" className="input-group">
          <input ref="input"
                 type={this.props.type}
                 className="form-control"
                 aria-label={this.props.label}
                 defaultValue={this.state.value}
            />
        </div>
      );
    };

    const inactive = () => {
      return <div onClick={this.clickHandler}>{this.state.value}</div>
    };

    return this.state.active ? edittable() : inactive();
  }
});

module.exports = ClickToEdit;
