import React from 'react';

type P = {
  //
};

type S = {
  value: string;
};

// export default class NameForm extends React.Component<P, S> {
//   constructor(props: P) {
//     super(props);
//     this.state = { value: '' };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
//     alert('提交的名字: ' + this.state.value);
//     event.preventDefault();
//   }

//   render(): JSX.Element {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           名字:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="提交" />
//       </form>
//     );
//   }
// }

export default class NameForm extends React.Component<P, S> {
  input: React.RefObject<HTMLInputElement>;

  constructor(props: P) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    console.log('NameForm -> constructor -> this.input', this.input);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    let value = '';
    console.log('NameForm -> handleSubmit -> this.input', this.input);
    if (this.input.current) {
      value = this.input.current.value;
    }
    alert('A name was submitted: ' + value);
    event.preventDefault();
  }

  render(): JSX.Element {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
