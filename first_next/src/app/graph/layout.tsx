export default function GraphLayout({ children,}: Readonly<{children: React.ReactNode;}>) {
    console.log('Graph layout rendered...');
    return (
        <div className="border-2 border-green-500 h-full">
          {children}
        </div>
    )
}