import React from 'react';
import FancyButton from '../components/FancyButton';

export default function Home() {
  const ref = React.createRef();
  console.log('About -> ref', ref);
  setTimeout(() => {
    console.log('About -> ref', ref); // 当 ref 挂载完成，ref.current 将指向 <FancyButton /> 中的 <button /> DOM 节点。
  }, 3000);
  return (
    <div>
      <h1>Home</h1>
      <FancyButton ref={ref}>Click me!</FancyButton>;
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
