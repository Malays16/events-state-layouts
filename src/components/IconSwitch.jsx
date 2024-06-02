import PropTypes from 'prop-types';

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className="icon-switch" onClick={onSwitch}>
      <i className="material-icons">{icon}</i>
    </div>
  );
};

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired
};

export default IconSwitch;