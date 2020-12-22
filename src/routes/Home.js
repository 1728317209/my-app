import React from 'react';
import Table from '../components/Table';
import ModalParent from '../components/Modal';
import FancyButton from '../components/FancyButton'; // 这里导入的其实是包着 FancyButton 的 LogProps

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();

    this.state = { showModal: false };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({ showModal: true });
  }

  handleHide() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <div id="modal-root"></div>
        <h1>Home</h1>
        <FancyButton ref={this.ref} a={123} b={456}>
          Click me!
        </FancyButton>
        {false && 123}
        <Table />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={this.handleShow}>Show modal</button>
        <ModalParent />
      </div>
    );
  }
}
