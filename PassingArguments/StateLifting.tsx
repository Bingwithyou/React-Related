import { useState } from "react";
interface PanelProps {
  title: string;
  children: React.ReactNode;
}

// const Panel: React.FC<PanelProps> = ({ title, children }) => {
//   const [isActive, setIsActive] = useState(false);
//   return (
//     <section className="panel">
//       <h3>{title}</h3>
//       {isActive ? (
//         <p>{children}</p>
//       ) : (
//         <button onClick={() => setIsActive(true)}>Show</button>
//       )}
//     </section>
//   );
// };

// export default function Accordion() {
//   return (
//     <>
//       <h2>Almaty, Kazakhstan</h2>
//       <Panel title="About">
//         With a population of about 2 million, Almaty is Kazakhstan's largest
//         city. From 1929 to 1997, it was its capital city.
//       </Panel>
//       <Panel title="Etymology">
//         The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
//         "apple" and is often translated as "full of apples". In fact, the region
//         surrounding Almaty is thought to be the ancestral home of the apple, and
//         the wild <i lang="la">Malus sieversii</i> is considered a likely
//         candidate for the ancestor of the modern domestic apple.
//       </Panel>
//     </>
//   );
// }

interface PanelProps {
  title: string;
  isActive: boolean;
  children: React.ReactNode;
  onShow: () => void;
}

const Panel: React.FC<PanelProps> = ({ title, isActive, children, onShow }) => {
  // 每个组件的 state 状态都是独立的, 通过状态提升使组件间共享一个状态, 自组件调用父组件的方法, 也可以修改副组件的数据
  //   const [isActive, setIsActive] = useState(false);
  return (
    <section>
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
};

const StateLifiting = () => {
  // 使用 0 和 1 分别控制上方和下方的 Panel
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <>
        {/* 每个 panel 的展开功能都是独立控制的, 改造使其同时只有一个面板是展开的 */}
        <h2>Almaty, Kazakhstan</h2>
        <Panel
          title="About"
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        >
          With a population of about 2 million, Almaty is Kazakhstan&apos;s
          largest city. From 1929 to 1997, it was its capital city.
        </Panel>

        <Panel
          title="Etymology"
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
        >
          The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word
          for &quot;apple&quot; and is often translated as &quot;full of
          apples&quot;. In fact, the region surrounding Almaty is thought to be
          the ancestral home of the apple, and the wild{" "}
          <i lang="la">Malus sieversii</i> is considered a likely candidate for
          the ancestor of the modern domestic apple.
        </Panel>
      </>
    </>
  );
};

export default StateLifiting;
