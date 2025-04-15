"use client"
import { NavItem } from "@/types";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";

interface MobileNavProps {
  items: NavItem[];
}

export default function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event :MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
  
    // メモリリークの防止
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center p-2 hover:bg-slate-200 rounded-2xl">
        {isOpen || (
          <Menu className="h-6 w-6"></Menu>
        )}
      </button>
      
      {/* オーバーレイ（メニューが開いているときだけ表示） */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 z-40" area-hidden="true"></div>
      )}

      {/* スライドインメニュー */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 bottom-0 w-64 bg-white dark:bg-gray-900 z-50 shadow-lg transform transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="Flex items-center justify-between p-2 border-b">
            <Link href={"/"}>
              <div className="hover:bg-sky-100 rounded-md p-3"
                    onClick={() => setIsOpen(false)}>
                <span className="font-bold">Post Writer</span>
              </div>
            </Link>
          </div>

          <nav className="flex flex-col p-4">
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="py-1 text-lg border-b border-gray-200 dark:border-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <div className="hover:bg-slate-100 py-2 rounded-sm hover:text-blue-700">
                  <span className="px-3 text-sm">{item.title}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}