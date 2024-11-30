import MobileNav from "./mobile-nav"
import Nav from "./nav"
export default function DashboardLayout({
    children, }: {
        children: React.ReactNode
    }) {
    return (
        <section  className="m-6">
            <div className="lg:hidden fixed right-2 top-2 h-full">
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