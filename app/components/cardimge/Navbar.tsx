"use client"

import { Send } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className=" h-10 bg-blue-500 max-w-9xl mx-auto px-8 py-3 flex items-center justify-between">

        {/* LEFT MENU */}
        <div className="flex items-center gap-24 px-24 text-sm font-medium text-gray-700">
          <Link href="# " className="hover:text-black text-lime-50 ">Brendlar</Link>
          <Link href="/" className="hover:text-black text-lime-50 -white ">Bosh sahifa</Link>
          <Link href="/yetkazish " className="hover:text-black text-lime-50 ">Yetkazib berish va to‘lov</Link>
          <Link href="/rassrochka" className="hover:text-black text-lime-50 ">Muddatli to‘lov</Link>
          <Link href="/dokonlar" className="hover:text-black text-lime-50">Nout.uz do‘konlari manzillari</Link>
          <Link href="/kontaklar" className="hover:text-black text-lime-50">Kontaktlar</Link>
        </div>

        {/* RIGHT BUTTON */}
        <Link href={'https://t.me/amo_nout_bot '}>
          <div>
            <a
              href="#"
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <Send size={16} />
              Bizga TG orqali yozing
            </a>
          </div>
        </Link>


      </div>
    </nav>
  );
}