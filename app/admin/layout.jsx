"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PlusCircle, List, LayoutDashboard } from "lucide-react";

export default function page({ children }) {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  // ⛔ Agar loading ho rahi hai to wait
  if (status === "loading") {
    return <p className="text-white p-4">Checking auth...</p>;
  }

  // ⛔ Agar login nahi to /login bhej do
  if (!session) {
    redirect("/login");
  }

  const links = [
    { href: "/admin", label: "Dashboard", icon: <LayoutDashboard size={20}/> },
    { href: "/admin/addPortfolio", label: "Add", icon: <PlusCircle size={20}/> },
    { href: "/admin/listPortfolio", label: "List", icon: <List size={20}/> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-16 md:w-64 bg-gray-800 p-2 md:p-4 flex flex-col gap-4">
        <h1 className="hidden md:block text-xl font-bold mb-6">Admin</h1>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-2 p-2 rounded hover:bg-gray-700 ${
              pathname === link.href ? "bg-gray-700" : ""
            }`}
          >
            {link.icon}
            <span className="hidden md:inline">{link.label}</span>
          </Link>
        ))}
      </aside>

      {/* Content */}
      <main className="flex-1 p-4 md:p-6">{children}</main>
    </div>
  );
}
