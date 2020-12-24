/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

type P = {
  forwardedRef: React.ForwardedRef<any>;
};

type S = {
  date: Date;
};

export default function logProps(
  Component: typeof React.Component
): React.ForwardRefExoticComponent<P & React.RefAttributes<any>> {
  class LogProps extends React.Component<P, S> {
    componentDidUpdate(prevProps: P) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;

      // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  // 注意 React.forwardRef 回调的第二个参数 “ref”。
  // 我们可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
  // 然后它就可以被挂载到被 LogProps 包裹的子组件上。
  return React.forwardRef<any, P>((props, ref) => <LogProps {...props} forwardedRef={ref} />);
}
