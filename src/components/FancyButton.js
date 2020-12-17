import React from 'react';
import PropTypes from 'prop-types';
import logProps from './logProps';

// 如果你命名了渲染函数，DevTools 也将包含其名称（例如 “ForwardRef(myFunction)”）
const FancyButton = React.forwardRef(function myFunction(props, ref) {
  return (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
  );
});

FancyButton.propTypes = {
  /** 姓名 */
  children: PropTypes.any.isRequired,
};

// 我们导出 LogProps，而不是 FancyButton。
// 虽然它也会渲染一个 FancyButton。
export default logProps(FancyButton);

// export default FancyButton;
