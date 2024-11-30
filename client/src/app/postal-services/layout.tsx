import MobileNav from "./mobile-nav"
import Nav from "./nav"
export default function DashboardLayout({
    children, }: {
        children: React.ReactNode
    }) {
    return (
        <section>
            <div className="lg:hidden">
                <MobileNav />
            </div>
            <div className="hidden lg:block">
                <Nav />
            </div>
            <main>

                {children}
            </main>
        </section>
    )
}