import { useState, createContext, useContext, ReactNode } from "react";

// 定义上下文的类型
interface MyContextType {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

// 1. 创建上下文
const MyContext = createContext<MyContextType | undefined>(undefined);

// 2. 创建 Provider 组件
const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState<string>("Hello, Context!");
  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

// 创建消费上下文的子组件
const Child: React.FC = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("Child must be used within a MyProvider");
  }

  const { value, setValue } = context;

  return (
    <div>
      <h2>Child Component</h2>
      <p>{value}</p>
      <button onClick={() => setValue("Value Updated!")}>Update Value</button>
    </div>
  );
};

// 主应用组件
const Context = () => {
  return (
    <MyProvider>
      <div>
        <h1>Parent Component</h1>
        <Child />
      </div>
    </MyProvider>
  );
};

export default Context;
