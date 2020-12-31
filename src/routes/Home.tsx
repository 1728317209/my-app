import React from 'react';
import Table from '../components/Table';
import ModalParent from '../components/Modal';
import NameForm from '../components/NameForm';
import MouseTracker from '../components/MouseTracker';
import CustomTextInput from '../components/CustomTextInput';
import FancyButton from '../components/FancyButton'; // 这里导入的其实是包着 FancyButton 的 LogProps

type P = {
  //
};

type S = {
  showModal: boolean;
  showCustomTextInput: boolean;
};

export default class Home extends React.Component<P, S> {
  ref: React.RefObject<HTMLButtonElement>;

  constructor(props: P) {
    super(props);
    this.ref = React.createRef();

    this.state = {
      showModal: false,
      showCustomTextInput: true,
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleCustomTextInputShow = this.handleCustomTextInputShow.bind(this);
  }

  handleShow(): void {
    this.setState({ showModal: true });
  }

  handleHide(): void {
    this.setState({ showModal: false });
  }

  handleCustomTextInputShow(): void {
    this.setState({ showCustomTextInput: !this.state.showCustomTextInput });
  }

  render(): JSX.Element {
    return (
      <div>
        <div id="modal-root"></div>
        <h1>Home</h1>
        <FancyButton ref={this.ref} a={123} b={456}>
          Click me!
        </FancyButton>
        <NameForm />
        {false && 123}
        <Table />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>

        <button onClick={this.handleShow}>Show modal</button>
        <ModalParent />
        {this.state.showCustomTextInput && <CustomTextInput />}
        <button onClick={this.handleCustomTextInputShow}>CustomTextInput show or hide</button>
        <MouseTracker />
      </div>
    );
  }
}
