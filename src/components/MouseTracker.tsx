import React from 'react';
import logo from '../assets/svg/loading-balls.svg';

type M = {
  x: number;
  y: number;
};

export class Cat extends React.Component<{ mouse: M }> {
  render(): JSX.Element {
    const mouse = this.props.mouse;
    return <img src={logo} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />;
  }
}

type P = {
  render: (mouse: M) => React.ReactNode;
};

type S = M;

class Mouse extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event: React.MouseEvent) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  static getDerivedStateFromProps(props: P, state: S) {
    console.log('getDerivedStateFromProps -> props, state', props, state);
    return null;
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {/* render prop 是一个用于告知组件需要渲染什么内容的函数 prop */}
        {/* 自组件的state + 父组件的render方法 决定了最终渲染的效果 */}
        {/* 不一定要叫render，其实就是一个普通的函数类型的prop，叫什么名字都可以 比如：show */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default class MouseTracker extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <h1>移动鼠标!</h1>
        {/* `children` render prop 的好处是可以写成 <Mouse>{children}</Mouse>，更加符合习惯 */}
        <Mouse render={(mouse) => <Cat mouse={mouse} />} />
      </div>
    );
  }
}

// 如果你出于某种原因真的想要 HOC，那么你可以轻松实现
// 使用具有 render prop 的普通组件创建一个！
export function withMouse(Component: typeof React.Component): typeof React.Component {
  return class withMouseComponent extends React.Component {
    render() {
      return <Mouse render={(mouse) => <Component {...this.props} mouse={mouse} />} />;
    }
  };
}
