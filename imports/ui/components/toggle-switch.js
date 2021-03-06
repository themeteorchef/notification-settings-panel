import React from 'react';

export class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    const initialToggledState = props.toggled;
    this.state = { toggled: initialToggledState };
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }

  toggleSwitch() {
    const toggled = !this.state.toggled;
    this.setState({ toggled });
    this.refs.checkbox.checked = toggled;
    this.props.onToggle(this.props.id, toggled);
  }

  render() {
    const { onLabel, offLabel } = this.props;
    const { toggled } = this.state;
    return (<div
      className={ `ToggleSwitch ${toggled ? 'yes' : 'no'}` }
      onClick={ this.toggleSwitch }
    >
      <input ref="checkbox" type="checkbox" hidden defaultChecked={ toggled } />
      <div className="handle">
        <span className="handle-label">
          { toggled ? onLabel || 'On' : offLabel || 'Off' }
        </span>
      </div>
    </div>);
  }
}

ToggleSwitch.propTypes = {
  id: React.PropTypes.string.isRequired,
  toggled: React.PropTypes.bool.isRequired,
  onLabel: React.PropTypes.string,
  offLabel: React.PropTypes.string,
  onToggle: React.PropTypes.func,
};
