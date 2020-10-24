import React from "react";

export default function Foo({ start }: { start: number }) {
  const [count, setCount] = React.useState(start || 0);
  return <span onClick={() => setCount(count + 1)}>{count}</span>;
}
