import {Navbar} from "@/components/navbar";

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Navbar/>
            <div className="pt-16">
                {children}
            </div>
        </div>
    );
}