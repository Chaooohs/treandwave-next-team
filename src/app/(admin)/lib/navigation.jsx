'use client'
import { useState } from "react";
import Link from "next/link";


export default function NavigationMenu({ navLinks }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col bg-gray-200 w-1/4 mob:hidden">
        {navLinks.map((item, index) => (
            <div key={index} className="w-full px-5 py-5 border-b border-white">
                <Link  href={item.link}>
                    {item.name}
                </Link>
            </div>
        ))}
    </nav>
  );
}