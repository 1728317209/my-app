import React from 'react';

type P = {
  //
};

type S = {
  date: Date;
};

export default class Clock extends React.Component<P, S> {
  timerId: number | undefined;

  constructor(props: P) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount(): void {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
    });
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  render(): JSX.Element {
    return <h1>date:, {this.state.date.toLocaleTimeString()}</h1>;
  }
}
