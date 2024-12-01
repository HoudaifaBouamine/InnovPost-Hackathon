import Header from "./header"
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section >
            <Header/>
            <main>
                {children}
            </main>
        </section>
    )
}