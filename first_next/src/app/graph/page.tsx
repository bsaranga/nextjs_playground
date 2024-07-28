'use client'
import { useEffect } from "react";
import Counter from "./counter";

export default function Graph() {
    
    useEffect(() => {
        console.log('Graph rendered...');
    }, []);

    return <>
        <div className="text-2xl">This is the graph page...</div>
        <Counter />
    </>
}