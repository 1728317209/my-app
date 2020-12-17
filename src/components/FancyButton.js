import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/display-name
const FancyButton = React.forwardRef((props, ref) => {
  return (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
  );
});

FancyButton.propTypes = {
  /** 姓名 */
  children: PropTypes.any.isRequired,
};

export default FancyButton;
