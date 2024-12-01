
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section >
        
            <main>
                {children}
            </main>
        </section>
    )
}