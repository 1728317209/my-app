import React from 'react';
import styles from './FancyButton.module.css';
console.log('styles', styles);

type P = {
  a: number;
  b: number;
  children: any;
};

// 如果你命名了渲染函数，DevTools 也将包含其名称（例如 “ForwardRef(myFunction)”）
const FancyButton = React.forwardRef<HTMLButtonElement, P>(function myFunction(props, ref) {
  // eslint-disable-next-line react/prop-types
  console.log('myFunction -> props.children', props.children);
  // eslint-disable-next-line react/prop-types
  console.log('myFunction -> React.Children.toArray(children)', React.Children.toArray(props.children));
  // eslint-disable-next-line react/prop-types
  const ret = React.Children.map(props.children, function (params: React.ReactNode) {
    console.log('myFunction -> params', params);
    return params;
  });
  console.log('myFunction -> props', props);
  return <button className={styles.fancyButton} ref={ref} />;
});

// 我们导出 LogProps，而不是 FancyButton。
// 虽然它也会渲染一个 FancyButton。
// export default logProps(FancyButton);

export default FancyButton;
