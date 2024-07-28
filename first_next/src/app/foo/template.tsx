'use client'

import { useEffect } from "react"
import setCookiesServerAction from "../actions";

export default function Template({children}: {children: React.ReactNode}) {
    
    useEffect(() => {
        setCookiesServerAction();
        console.log('Template rendered...');
    }, [])

    return (
        <div className="border-2 border-blue-500 h-full">
          {children}
        </div>
    )
}