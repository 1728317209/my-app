import React from 'react';
import PropTypes from 'prop-types';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return <h1>date:, {this.state.date.toLocaleTimeString()}</h1>;
  }
}

Clock.propTypes = {
  /** 日期 */
  date: PropTypes.object,
};
