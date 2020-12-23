import React from 'react';
import PropTypes from 'prop-types';

export class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src="/cat.jpg"
        style={{ position: 'absolute', left: mouse.x, top: mouse.y }}
      />
    );
  }
}

Cat.propTypes = {
  mouse: PropTypes.any.isRequired,
};

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
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
        {this.props.children(this.state)}
      </div>
    );
  }
}

Mouse.propTypes = {
  children: PropTypes.any.isRequired,
};

export default class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>移动鼠标!</h1>
        {/* `children` render prop 的好处是可以写成 <Mouse>{children}</Mouse>，更加符合习惯 */}
        <Mouse>{(mouse) => <Cat mouse={mouse} />}</Mouse>
      </div>
    );
  }
}

// 如果你出于某种原因真的想要 HOC，那么你可以轻松实现
// 使用具有 render prop 的普通组件创建一个！
export function withMouse(Component) {
  return class withMouseComponent extends React.Component {
    render() {
      return (
        <Mouse>{(mouse) => <Component {...this.props} mouse={mouse} />}</Mouse>
      );
    }
  };
}
