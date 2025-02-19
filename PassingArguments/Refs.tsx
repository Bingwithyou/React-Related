// Refs 允许你直接访问某个组件中的 DOM 元素或组件实例。
// 通常情况下，Refs 主要用于获取 DOM 引用，而不建议用于组件间传值。
import { useRef, forwardRef, useImperativeHandle, Ref } from "react";

// 定义子组件的方法类型
interface ChildHandle {
  getValue: () => string;
  clearInput: () => void;
}

// 使用 forwardRef 来允许父组件引用子组件
const Child = forwardRef<ChildHandle, {}>(function Child(
  props,
  ref: Ref<ChildHandle>
) {
  const inputRef = useRef<HTMLInputElement>(null);
  // 使用 useImperativeHandle 来暴露方法给父组件
  useImperativeHandle(ref, () => ({
    getValue: () => {
      return inputRef.current ? inputRef.current.value : ""; // 获取输入框的值
    },
    clearInput: () => {
      // 'inputRef.current' is possibly 'null'
      if (inputRef.current) {
        inputRef.current.value = ""; // 清空输入框
      }
    },
  }));

  return (
    <div>
      <h2>Child Component</h2>
      <input type="text" ref={inputRef} placeholder="Type something..." />
    </div>
  );
});

const Parent = () => {
  const childRef = useRef<ChildHandle>(null);

  const handleGetValue = () => {
    if (childRef.current) {
      alert(`Input value is: ${childRef.current.getValue()}`);
    }
  };

  const handleClearValue = () => {
    if (childRef.current) {
      childRef.current.clearInput();
    }
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {/* 使用 ref 引用子组件的方法 */}
      <Child ref={childRef} />
      <button onClick={handleGetValue}>Get Input Value</button>
      <button onClick={handleClearValue}>Clear Input</button>
    </div>
  );
};

const Refs = () => {
  return <Parent />;
};
export default Refs;
