import React from 'react';

type P = {
  //
};

type S = {
  date: Date;
};

export default class CustomTextInput extends React.Component<P, S> {
  textInput: HTMLInputElement | null;

  constructor(props: P) {
    super(props);

    this.textInput = null;

    this.focusTextInput = this.focusTextInput.bind(this);
    this.setTextInputRef = this.setTextInputRef.bind(this);
  }

  focusTextInput(): void {
    // 使用原生 DOM API 使 text 输入框获得焦点
    if (this.textInput) {
      this.textInput.focus();
    }
  }

  setTextInputRef(element: HTMLInputElement): void {
    console.log('CustomTextInput -> this.setTextInputRef -> element', element);
    this.textInput = element;
  }

  componentDidMount(): void {
    // 组件挂载后，让文本框自动获得焦点
    this.focusTextInput();
  }

  render(): JSX.Element {
    // 使用 `ref` 的回调函数将 text 输入框 DOM 节点的引用存储到 React
    // 实例上（比如 this.textInput）
    return (
      <div>
        <input type="text" ref={this.setTextInputRef} />
        <input type="button" value="Focus the text input" onClick={this.focusTextInput} />
      </div>
    );
  }
}
