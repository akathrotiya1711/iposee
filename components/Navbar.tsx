"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Coins,
  TrendingUp,
  Calendar,
  BarChart3,
  Info,
  Mail,
  User,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { icon: <Coins size={18} />, label: "Gold" },
    { icon: <TrendingUp size={18} />, label: "Silver" },
    { icon: <Calendar size={18} />, label: "Upcoming IPO" },
    { icon: <BarChart3 size={18} />, label: "Current GMP" },
    { icon: <Info size={18} />, label: "About Us" },
    { icon: <Mail size={18} />, label: "Contact Us" },
    { icon: <User size={18} />, label: "Author" },
  ];

  return (
    <nav className="w-full bg-gray-100 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-black">IPO</span>
            <span className="text-yellow-500">See</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
            {navItems.map((item) => (
              <NavItem key={item.label} icon={item.icon} label={item.label} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4 border-t border-gray-200 animate-slideDown">
            {navItems.map((item) => (
              <NavItem key={item.label} icon={item.icon} label={item.label} />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <Link
      href="#"
      className="flex items-center gap-2 px-2 py-1 rounded hover:text-yellow-500 transition duration-200"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
