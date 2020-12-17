import React from 'react';
import FancyButton from '../components/FancyButton'; // 这里导入的其实是包着 FancyButton 的 LogProps

export default function Home() {
  const ref = React.createRef();
  console.log('About -> ref', ref);
  setTimeout(() => {
    // 当 ref 挂载完成，ref.current 将指向 <FancyButton /> 中的 <button /> DOM 节点。
    // ref 是 LogProps，因为导入的 FancyButton 其实是包着 FancyButton 的 LogProps
    console.log('About -> ref', ref);
  }, 3000);
  return (
    <div>
      <h1>Home</h1>
      <FancyButton ref={ref} a={123} b={456}>
        Click me!
      </FancyButton>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}
