'use client'

import { useEffect } from "react";

export default function Header({foo}: {foo: string}) {

    useEffect(() => {
        console.log('Header rendered...');
    }, [])

    function handleClick() {
        console.log(foo);
    }
    return (
        <div className="flex justify-between px-4">
            <p>This is the header</p>
            <button onClick={handleClick} className="bg-slate-700 px-1 py-[1px] rounded-[2.5px]">Click me</button>
        </div>
    )
}