'use client'

import { useEffect } from "react"

export default function Template({children}: {children: React.ReactNode}) {
    
    useEffect(() => {
        console.log('Template rendered...');
    }, [])

    return (
        <div className="border-2 border-blue-500 h-full">
          {children}
        </div>
    )
}