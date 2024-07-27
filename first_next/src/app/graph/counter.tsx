'use client'

import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);

    function handleClick() {
        console.log('hello world...');
        setCount(count + 1);
    }

    return (
        <div className="border-2 border-red-400 p-2">
            <p>You clicked {count} times</p>
            <button className="bg-slate-500 p-2 rounded-md hover:bg-slate-400 active:bg-slate-600 transition-all duration-200" onClick={handleClick}>Click me</button>
        </div>
    )
}