import React from 'react';
import PropTypes from 'prop-types';

Welcome.propTypes = {
  /** 姓名 */
  name: PropTypes.string.isRequired,
};

type P = {
  name: string;
};

export default function Welcome(props: P): JSX.Element {
  return <h1>Hello, {props.name}</h1>;
}
