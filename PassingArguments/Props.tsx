function Parent() {
  const message = "Hello from Parent!";
  const age = 42;
  return <Child text={message} age={age} />;
}

function Child(props: { text: string; age: number }) {
  const { text, age } = props;
  return (
    <>
      <h1>Message from parent: {text}</h1>
      <h2>Age from parent: {age}</h2>
    </>
  );
}

const Props = () => {
  return <Parent />;
};

export default Props;
// 当需要在多个层级间传递数据时, props 传参回显的比较繁琐, 可以使用 Context API
