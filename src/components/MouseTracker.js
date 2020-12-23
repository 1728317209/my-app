import React from 'react';
import PropTypes from 'prop-types';

class Cat extends React.Component {
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
        {this.props.render(this.state)}
      </div>
    );
  }
}

Mouse.propTypes = {
  render: PropTypes.any.isRequired,
};

export default class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>移动鼠标!</h1>
        <Mouse render={(mouse) => <Cat mouse={mouse} />} />
      </div>
    );
  }
}
