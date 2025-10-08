"use client";

// --- Helper & Ikon ---
const LogoutIcon = (props: any) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
);
const DashboardIcon = (props: any) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
);
const PostIcon = (props: any) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
);
const ProjectIcon = (props: any) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
// --- End Helper ---

const navLinks = [
    { name: "Dashboard", href: "/dashboard", icon: DashboardIcon },
    { name: "Posts", href: "/dashboard/posts", icon: PostIcon },
    { name: "Projects", href: "/dashboard/projects", icon: ProjectIcon },
];

interface SidebarProps {
    onLogout: () => void;
}

export default function Sidebar({ onLogout }: SidebarProps) {
    return (
        <div className="flex flex-col h-full">
            {/* Nav Section */}
            <nav className="flex-1 px-4 py-6 space-y-2">
                {navLinks.map((link) => (
                    <a key={link.name} href={link.href} className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-200">
                        <link.icon className="h-5 w-5 mr-3" />
                        {link.name}
                    </a>
                ))}
            </nav>
            {/* Logout Section */}
            <div className="py-4 border-t border-gray-700">
                <button onClick={onLogout} className="flex items-center w-full px-4 py-2 text-gray-300 hover:bg-red-700 hover:text-white rounded-md transition-colors duration-200">
                    <LogoutIcon className="h-5 w-5 mr-3" />
                    Logout
                </button>
            </div>
        </div>
    );
}
