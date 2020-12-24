/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import ReactDOM from 'react-dom';
// 在 DOM 中有两个容器是兄弟级 （siblings）

class Modal extends React.Component<{ children: React.ReactNode }> {
  el: HTMLDivElement;
  modalRoot: HTMLElement | null;

  constructor(props: any) {
    super(props);
    this.el = document.createElement('div');
    this.modalRoot = null;
  }

  componentDidMount() {
    // 在 Modal 的所有子元素被挂载后，
    // 这个 portal 元素会被嵌入到 DOM 树中，
    // 这意味着子元素将被挂载到一个分离的 DOM 节点中。
    // 如果要求子组件在挂载时可以立刻接入 DOM 树，
    // 例如衡量一个 DOM 节点，
    // 或者在后代节点中使用 ‘autoFocus’，
    // 则需添加 state 到 Modal 中，
    // 仅当 Modal 被插入 DOM 树中才能渲染子元素。
    this.modalRoot = document.getElementById('modal-root');
    if (this.modalRoot) {
      this.modalRoot.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    if (this.modalRoot) {
      this.modalRoot.removeChild(this.el);
    }
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

type P = {
  //
};

type S = {
  clicks: number;
};

interface SchedulerInteraction {
  id: number;
  name: string;
  timestamp: number;
}

export default class Parent extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = { clicks: 0 };
    this.onRender = this.onRender.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onRender(
    id: string, // 发生提交的 Profiler 树的 “id”
    phase: 'mount' | 'update', // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
    actualDuration: number, // 本次更新 committed 花费的渲染时间
    baseDuration: number, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
    startTime: number, // 本次更新中 React 开始渲染的时间
    commitTime: number, // 本次更新中 React committed 的时间
    interactions: Set<SchedulerInteraction> // 属于本次更新的 interactions 的集合
  ): void {
    console.log('id', id);
    console.log('phase', phase);
    console.log('actualDuration', actualDuration);
    console.log('baseDuration', baseDuration);
    console.log('startTime', startTime);
    console.log('commitTime', commitTime);
    console.log('interactions', interactions);
  }

  handleClick(): void {
    // 当子元素里的按钮被点击时，
    // 这个将会被触发更新父元素的 state，
    // 即使这个按钮在 DOM 中不是直接关联的后代
    this.setState((state) => ({
      clicks: state.clicks + 1,
    }));
  }

  render(): JSX.Element {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools to observe that the button is not a child of the div with the onClick handler.
        </p>
        <React.Profiler id="modal" onRender={this.onRender}>
          <Modal>
            <Child />
          </Modal>
        </React.Profiler>
      </div>
    );
  }
}

function Child() {
  // 这个按钮的点击事件会冒泡到父元素
  // 因为这里没有定义 'onClick' 属性
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}
