"use client";

import Link from "next/link";
import {
  FaTelegramPlane,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-gray-800 pb-10">

          {/* Contact */}
          <div>
            <img src="https://nout.uz/wp-content/uploads/2025/03/logotype-nout-1.svg" alt="" />

            <p className="text-gray-400 mt-5 leading-7">
              Savollaringiz bormi? Biz bilan bog‘laning!
            </p>

            <h2 className="text-2xl font-bold mt-5">
              +998 (77) 144-00-55
            </h2>

            <p className="text-gray-400 mt-4">
              Bizning kontaktlarimiz
            </p>

            <p className="text-gray-500 mt-2 text-sm">
              DU – YA : 10:00 dan 22:00 gacha,
              dam olish kunisiz
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-6 text-2xl">
              <a
                href="#"
                className="hover:text-red-500 duration-300"
              >
                <Link href={'https://t.me/nout_uz'}>
                  <FaTelegramPlane />
                </Link>
              </a>

              <a
                href="#"
                className="hover:text-red-500 duration-300"
              >
                <Link href={'https://www.youtube.com/@nout-uz'}>
                  <FaYoutube />
                </Link>
              </a>

              <a
                href="#"
                className="hover:text-red-500 duration-300"
              >
                <Link href={'https://www.instagram.com/nout_uz/'}>
                  <FaInstagram />
                </Link>
              </a>
            </div>
          </div>

          {/* Brands */}
          <div>
            <h2 className="text-xl font-semibold mb-5">
              Brendlar
            </h2>

            <ul className="space-y-3 text-gray-400">
              <li>Asus</li>
              <li>HP</li>
              <li>Lenovo</li>
              <li>Acer</li>
              <li>MSI</li>
              <li>Dell</li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h2 className="text-xl font-semibold mb-5">
              Do'kon
            </h2>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/">
                  Noutbuklar
                </Link>
              </li>

              <li>
                <Link href="/">
                  Biznes uchun noutbuklar
                </Link>
              </li>

              <li>
                <Link href="/">
                  O'yin noutbuklari
                </Link>
              </li>

              <li>
                <Link href="/">
                  PK
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h2 className="text-xl font-semibold mb-5">
              Yordam
            </h2>

            <ul className="space-y-3 text-gray-400">
              <li>Biz haqimizda</li>
              <li>Blog</li>
              <li>Yetkazib berish va to‘lov</li>
              <li>Noutbuklar uchun muddatli to‘lov</li>
              <li>Bizning kontaktlarimiz</li>
            </ul>
          </div>

          {/* Delivery */}
          <div>
            <h2 className="text-xl font-semibold mb-5">
              Yetkazib berish
            </h2>

            <ul className="space-y-3 text-gray-400">
              <li>Andijon</li>
              <li>Buxoro</li>
              <li>Guliston</li>
              <li>Jizzax</li>
              <li>Qarshi</li>
              <li>Navoiy</li>
              <li>Nukus</li>
              <li>Namangan</li>
              <li>Samarqand</li>
              <li>Termez</li>
              <li>Urgench</li>
              <li>Farg'ona</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 text-center text-gray-500 text-sm">
          © Nout.uz - Toshkentda noutbuklar birinchi qo‘ldan.
          O‘zbekistonda №1 narxlar!
        </div>
      </div>
    </footer>
  );
}