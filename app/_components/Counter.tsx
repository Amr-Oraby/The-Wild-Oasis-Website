"use client";
import { useState } from "react";

function Counter({ user }: { user: any }) {
  const [count, setCount] = useState(0);
  console.log(user);
  return (
    <div className="p-2 bg-blue-500 w-fit flex gap-3">
      <button
        className="px-3 py-1 bg-white rounded-full"
        onClick={() => setCount((c) => c - 1)}
      >
        -
      </button>
      <span className="px-3 py-1 bg-white rounded-full"> {count}</span>
      <button
        className="px-3 py-1 bg-white rounded-full"
        onClick={() => setCount((c) => c + 1)}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
