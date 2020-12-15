import React from 'react';
import PropTypes from 'prop-types';

Welcome.propTypes = {
  /** 姓名 */
  name: PropTypes.string.isRequired,
};

export default function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
