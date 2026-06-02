import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Header from "./components/cardimge/Header";
import Navbar from "./components/cardimge/Navbar";


import Link from "next/link";
import Footer from "./components/cardimge/Footer";


export default function Home() {

  return (
    // sdfkdhfjsjkdf
    <div className=" bg-gray-100">
      <div className=" bg-black">
        <Header />
      </div>
      <div className="bg-blue-700 rounded-fuul  ">
        <Navbar />
      </div>
      <div>
        <img src="https://nout.uz/wp-content/uploads/2026/01/hp-i5-pc.webp" alt="" />
        <h1 className=" text-3xl h-18 pl-17 py-6  ">Toshkentda noutbuklar — Nout.uz’da sotib oling</h1>
      </div>
      <div className="grid grid-cols-3 gap-1.5 px-17 justify-around   ">
        <Link href={'https://nout.uz/uz/brand/asus/'}><img className="" src="https://nout.uz/wp-content/uploads/2025/08/Group-30-%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%BE.png" alt="" /></Link>
        <Link href={'https://nout.uz/uz/brand/hp/'}><img className="" src="https://nout.uz/wp-content/uploads/2025/06/0293iurjf.png" alt="" /></Link>
        <Link href={'https://nout.uz/uz/brand/lenovo/'}><img className="" src="https://nout.uz/wp-content/uploads/2025/05/Group-32.png" alt="" /></Link>
        <Link href={'https://nout.uz/uz/brand/acer/'}> <img className="" src="https://nout.uz/wp-content/uploads/2025/05/Group-33.png" alt="" /></Link>
        <Link href={'https://nout.uz/uz/brand/dell/'}><img className="" src="https://nout.uz/wp-content/uploads/2025/05/Group-34.png" alt="" /></Link>
        <Link href={'https://nout.uz/uz/brand/msi/'}><img className="" src="https://nout.uz/wp-content/uploads/2025/05/Group-35.png" alt="" /></Link>
        <h1 className="text-3xl h-18 py-10">Ish va ta’lim uchun noutbuklar</h1>
      </div>
      <div className="grid grid-cols-4 gap-4  px-17 justify-around ">
        <div className="w-80 h-90 rounded-4xl bg-white  hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/brand/hp/hp-laptop/'}><img className=" py-10 pl-12 w-70  items-center" src="https://nout.uz/wp-content/uploads/2025/01/dasdq.png" alt="" />
            <h1 className="text-center font-bold  text-xl">HP Laptop</h1>
          </Link>
        </div>
        <div className="w-80 h-90 rounded-4xl bg-white hover:shadow-2xl ">
          <Link href={'https://nout.uz/uz/brand/hp/hp-pavilion-noutbuki/'}><img className="py-10 pl-12 w-70  items-center" src="https://nout.uz/wp-content/uploads/2025/06/pavilion-15.png" alt="" />
            <h1 className="text-center font-bold text-xl">HP Pavilion </h1>
          </Link>
        </div>
        <div className="w-80 h-90 rounded-4xl bg-white hover:shadow-2xl ">
          <Link href={'https://nout.uz/uz/brand/asus/asus-vivobook/'}> <img className="py-10 pl-12 w-70  items-center" src="https://nout.uz/wp-content/uploads/2025/12/bez-imeni-1.png" alt="" />
            <h1 className="text-center font-bold text-xl">Asus VivoBook</h1>
          </Link>
        </div>
        <div className="w-80 h-90 rounded-4xl bg-white hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/brand/dell/dell-vostro/'}><img className="py-10 pl-12 w-70  items-center" src="https://nout.uz/wp-content/uploads/2025/01/wqw.png" alt="" />
            <h1 className="text-center font-bold text-xl">Dell Vostro</h1>
          </Link>
        </div>
        <div className=" w-80 h-90 rounded-4xl bg-white hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/brand/lenovo/noutbuki-lenovo-ideapad/'}><img className="py-10 pl-12 w-70  items-center" src="https://nout.uz/wp-content/uploads/2025/10/ideapad-slim-5.png" alt="" />
            <h1 className="text-center font-bold text-xl">Lenovo-IdeaPad</h1>
          </Link>
        </div>
        <div className="w-80 h-90 rounded-4xl bg-white hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/brand/lenovo/noutbuki-lenovo-thinkbook/'}><img className="py-10 pl-12 w-70  items-center" src="https://nout.uz/wp-content/uploads/2025/10/thinkbook-16.png" alt="" />
            <h1 className="text-center font-bold text-xl">Lenovo ThinkBook</h1>
          </Link>
        </div>
        <div className=" w-80 h-90 rounded-4xl bg-white hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/brand/lenovo/lenovo-v/'}>  <img className="py-10 pl-12 w-70  items-center" src="https://nout.uz/wp-content/uploads/2023/12/v15-2.png" alt="" />
            <h1 className="text-center font-bold text-xl">Lenovo V</h1>
          </Link>
        </div>
        <div className=" w-80 h-90 rounded-4xl bg-white hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/brand/lenovo/noutbuki-lenovo-thinkpad/'}> <img className="py-10 pl-12 w-70  items-center" src="https://nout.uz/wp-content/uploads/2025/11/thinlpad-x1.png" alt="" />
            <h1 className="text-center font-bold text-xl">Lenovo ThinPkad</h1>
          </Link>
        </div>


        <div className="bg-gray-50 w-350 h-150 p-4 mt-8 rounded-4xl shadow-2xl   ">
          <div>
            <h1 className=" text-5xl py-3 ">O‘zbekiston bo‘ylab bepul yetkazib berish</h1>

            <div className="flex ">
              <div>
                <h1 className="py-1 text-2xl ">Toshkent bo‘ylab tezkor yetkazib berish</h1>
                <h1 className="grid grid-cols-20 py-7">Andijon
                  Buxoro
                  Guliston
                  Jizzax
                  Qarshi
                  Navoiy
                  Nukus
                  Namangan
                  Samarqand
                  Termez
                  Urgench
                  Farg'ona</h1>
                <div className=" w-65 h-10  bg-blue-400 text-center rounded-2xl ">
                  <h1 className="text-white  py-2"> Shartlar haqida batafsil </h1>
                </div>
              </div>
              <img className="w-200 py-4" src="https://elgarage.kz/uploads/photos/guid-b5641257-9e85-404b-9667-4da-fa2321683f.png" alt="" />
            </div>

          </div>
        </div>

      </div>


      <div className="gap-4 py-10 pl-17">
        <h1 className="text-3xl font-bold  ">O'yin noutbuklari</h1>
      </div>

      <div className="grid grid-cols-4 gap-4  px-17 justify-around ">
        <div className="w-80 h-90 rounded-4xl bg-white  hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/brand/asus/asus-tuf-gaming/'}><img className=" py-10 pl-12 w-70  items-center" src="https://nout.uz/wp-content/uploads/2025/07/tuf-16.png" alt="" />
            <h1 className="text-center font-bold  text-xl">Asus TUF Gaming</h1>
          </Link>
        </div>
        <div className="w-80 h-90 rounded-4xl bg-white hover:shadow-2xl ">
          <Link href={'https://nout.uz/uz/brand/acer/acer-nitro-noutbuki/'}><img className="py-10 pl-12 w-70  items-center" src="https://nout.uz/wp-content/uploads/2025/12/nitro-16-2.png" alt="" />
            <h1 className="text-center font-bold text-xl">Acer Nitro</h1>
          </Link>
        </div>
        <div className="w-80 h-90 rounded-4xl bg-white hover:shadow-2xl ">
          <Link href={'https://nout.uz/uz/brand/hp/noutbuki-hp-omen/'}><img className="py-10 pl-12 w-70  items-center" src="https://nout.uz/wp-content/uploads/2025/12/omen_laptop-16.webp" alt="" />
            <h1 className="text-center font-bold text-xl">HP OMEN</h1>
          </Link>
        </div>
        <div className="w-80 h-90 rounded-4xl bg-white hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/brand/acer/acer-predator/'}><img className="py-10 pl-12 w-70  items-center" src="https://nout.uz/wp-content/uploads/2025/01/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1-1%D1%84%D1%86%D0%B2%D1%84%D1%8B.png" alt="" />
            <h1 className="text-center font-bold text-xl">Acer Predator </h1>
          </Link>
        </div>
        <div className=" w-80 h-90 rounded-4xl bg-white hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/brand/lenovo/legion/'}><img className="py-10 pl-12 w-70  items-center" src="https://nout.uz/wp-content/uploads/2025/11/lega-5.png" alt="" />
            <h1 className="text-center font-bold text-xl">Lenovo Legion</h1>
          </Link>
        </div>
        <div className="w-80 h-90 rounded-4xl bg-white hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/brand/asus/asus-rog-strix/'}> <img className="py-10 pl-12 w-70  items-center" src="https://nout.uz/wp-content/uploads/2025/12/striks-18.webp" alt="" />
            <h1 className="text-center font-bold text-xl">Asus Roh Stirx </h1>
          </Link>
        </div>
        <div className=" w-80 h-90 rounded-4xl bg-white hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/brand/asus/asus-rog-zephyrus/'}><img className="py-10 pl-12 w-70  items-center" src="https://nout.uz/wp-content/uploads/2025/01/dsad2.png" alt="" />
            <h1 className="text-center font-bold text-xl">Asus Rog Zephyrus </h1>
          </Link>
        </div>
        <div className=" w-80 h-90 rounded-4xl bg-white hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/brand/asus/asus-rog-strix-scar-2/'}><img className="py-10 pl-12 w-70  items-center" src="https://nout.uz/wp-content/uploads/2025/11/30b02883-1847-4ca8-80ac-393a69bb7cd2.png" alt="" />
            <h1 className="text-center font-bold text-xl">Asus Roh Stirx Scar</h1>
          </Link>
        </div>

        <div className=" py-7 ">
          <h1 className=" text-3xl md:text-2xl font-bold mb-4  ">Nvidia GeForce RTX 50</h1>
        </div>

      </div>

      <div className="grid  grid-cols-3  pl-16 gap-6 px-10">
        <div className="w-110 pl-10 h-80 rounded-4xl bg-white  hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/noutbuki-geforce-rtx-5050/'}>
            <img className=" px-10  w-90 items-center " src="https://nout.uz/wp-content/uploads/2025/07/tuf-16.png" alt="" />
            <h1 className="text-center font-bold  text-xl"> Geforce RTX 5050 noutbuklar</h1>
          </Link>
        </div>
        <div className="w-110 h-80 pl-10 rounded-4xl bg-white hover:shadow-2xl ">
          <Link href={'https://nout.uz/uz/noutbuki-geforce-rtx-5060/'}>
            <img className="px-10 w-90 items-center" src="https://nout.uz/wp-content/uploads/2025/08/predator-slim-600x600.png" alt="" />
            <h1 className="text-center font-bold text-xl">GeForce RTX 5060 noutbuklari</h1>
          </Link>
        </div>
        <div className="w-110 h-80 pl-10 rounded-4xl bg-white hover:shadow-2xl ">
          <Link href={'https://nout.uz/uz/noutbuki-geforce-rtx-5070/'}>
            <img className="px-10 w-90 items-center" src="https://nout.uz/wp-content/uploads/2025/11/289-1-600x600.png" alt="" />
            <h1 className="text-center font-bold text-xl">GeForce RTX 5070 noutbuklari</h1>
          </Link>
        </div>
        <div className="w-110 h-80 pl-10 rounded-4xl bg-white hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/noutbuki-geforce-rtx-5070ti/'}>
            <img className="px-10 w-90 items-center" src="https://nout.uz/wp-content/uploads/2025/07/G815-1-600x600.png" alt="" />
            <h1 className="text-center font-bold text-xl">GeForce RTX 5070 noutbuklari </h1>
          </Link>
        </div>
        <div className=" w-110 h-80 pl-10 rounded-4xl bg-white hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/noutbuki-geforce-rtx-5080/'}>
            <img className="px-10 w-90 items-center" src="https://nout.uz/wp-content/uploads/2025/11/orig-12-600x600.png" alt="" />
            <h1 className="text-center font-bold text-xl">GeForce RTX 5080 noutbuklari</h1>
          </Link>
        </div>
        <div className="w-110 h-80 pl-10 rounded-4xl bg-white hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/noutbuki-geforce-rtx-5090/'}>
            <img className="px-10 w-90 items-center" src="https://nout.uz/wp-content/uploads/2025/07/G815-1-600x600.png" alt="" />
            <h1 className="text-center font-bold text-xl">GeForce RTX 5090 noutbuklari </h1>
          </Link>
        </div>
      </div>

      <img className="w-full h-150 mt-8 rounded-4xl shadow-2xl" src="./rasm.jpg" alt="" />

      <div className="grid grid-cols-4 gap-4 py-10 px-17 justify-around ">
        <div className="w-80 h-90 rounded-4xl bg-white  hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/brand/asus/asus-tuf-gaming/'}>
            <img className=" py-10 pl-12 w-70  items-center" src="https://nout.uz/wp-content/uploads/2024/08/w800-2.png" alt="" />
            <h1 className="text-center font-bold  text-xl">ASUS Zenbook Duo</h1>
          </Link>
        </div>
        <div className="w-80 h-90 rounded-4xl bg-white hover:shadow-2xl ">
          <Link href={'https://nout.uz/uz/brand/acer/acer-nitro-noutbuki/'}>
            <img className="py-10 pl-12 w-70  items-center" src="https://nout.uz/wp-content/uploads/2025/05/272.png" alt="" />
            <h1 className="text-center font-bold text-xl">ASUS ProArt</h1>
          </Link>
        </div>
        <div className="w-80 h-90 rounded-4xl bg-white hover:shadow-2xl ">
          <Link href={'https://nout.uz/uz/brand/hp/noutbuki-hp-omen/'}>
            <img className="py-10 pl-12 w-70  items-center" src="https://nout.uz/wp-content/uploads/2025/10/flow_04-1.png" alt="" />
            <h1 className="text-center font-bold text-xl">Asus Rog Flow</h1>
          </Link>
        </div>
        <div className="w-80 h-90 rounded-4xl bg-white hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/brand/acer/acer-predator/'}>
            <img className="py-10 pl-12 w-70  items-center" src="https://nout.uz/wp-content/uploads/2026/01/uk-galaxy-book5-pro-14-inch-np940-np940xha-kg2uk-544643301.webp" alt="" />
            <h1 className="text-center font-bold text-xl">Samsung</h1>
          </Link>
        </div>
      </div>

      <h1 className="text-4xl  pl-17">Monitorlar</h1>

      <div className="grid grid-cols-4  gap-4 py-10 px-17 justify-around ">
        <div className="w-80 h-90 rounded-4xl bg-white  hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/brand/asus/asus-tuf-gaming/'}>
            <img className=" py-10 pl-12 w-70  items-center" src="https://nout.uz/wp-content/uploads/2026/03/hps51.webp" alt="" />
            <h1 className="text-center font-bold  text-xl">HP monitorlari</h1>
          </Link>
        </div>
        <div className="w-80 h-90 rounded-4xl bg-white hover:shadow-2xl ">
          <Link href={'https://nout.uz/uz/brand/acer/acer-nitro-noutbuki/'}>
            <img className="py-10 pl-12 w-70  items-center" src="https://nout.uz/wp-content/uploads/2026/03/l27q1.webp" alt="" />
            <h1 className="text-center font-bold text-xl">Lenovo monitorlari</h1>
          </Link>
        </div>
      </div>

      <div className="flex text-3xl   gap-45 pl-17">
        <h1>ASUS</h1>
        <h1>HP</h1>
        <h1>LENOVO</h1>
        <h1>DELL</h1>
        <h1>ACER</h1>
        <h1> MSI </h1>
      </div>

      <div className="grid grid-cols-4 gap-4 py-10 px-17 justify-around ">
        <div className="w-80 h-200 rounded-4xl bg-white  hover:shadow-2xl p-3 text-center">

          <h1 className="text-xl items-center ">Asus VivoBook X1502 ( Intel® Core™ i5-13420H)</h1>

          <img className="  pl-12 w-70 items-center" src="https://nout.uz/wp-content/uploads/2024/07/vivo-png-4-variant.png" alt="" />

          <h1 className="text-center pl-3 text-xl">Ekran: 15.6" FHD (1920x1080) IPS</h1>
          <h1 className="text-xl py-3 ">Protsessor: Intel® Core™ i5-13420H (2.1 GHz - 4.6 GHz) (8 yadro; 12 oqim)</h1>
          <h1 className="text-xl py-3 ">Videokarta: Intel UHD Graphics</h1>
          <h1 className="text-xl py-3 ">Operativ xotira: 16GB DDR4</h1>
          <h1 className="text-xl py-3 ">Xotira qurilmasi: 512GB PCIe® NVMe™ M.2 SSD</h1>
          <h1 className="text-xl py-3 ">sotuv yuq</h1>
          <Link href={'https://t.me/amo_nout_bot'}>
            <div className=" w-65 h-10  bg-blue-400 text-center rounded-2xl ">
              <h1 className="text-white  py-2"> Analog tanlash </h1>
            </div>
          </Link>


        </div>

        <div className="w-80 h-200 rounded-4xl bg-white  hover:shadow-2xl p-3 text-center">

          <h1 className="text-xl items-center ">Asus VivoBook X1502 ( Intel® Core™ i5-13420H)</h1>

          <img className="  pl-12 w-70 items-center" src="https://nout.uz/wp-content/uploads/2024/07/vivo-png-5-variant.png" alt="" />

          <h1 className="text-center pl-3 text-xl">Ekran: 15.6" FHD (1920x1080) IPS</h1>
          <h1 className="text-xl py-3 ">Protsessor: Intel® Core™ i5-13420H (2.1 GHz - 4.6 GHz) (8 yadro; 12 oqim)</h1>
          <h1 className="text-xl py-3 ">Videokarta: Intel UHD Graphics</h1>
          <h1 className="text-xl py-3 ">Operativ xotira: 16GB DDR4</h1>
          <h1 className="text-xl py-3 ">Xotira qurilmasi: 512GB PCIe® NVMe™ M.2 SSD</h1>
          <h1 className="font-bold text-xl ">7 749 000 so'm 630</h1>
          <h1 className="text-xl py-3 ">(QQSsiz)</h1>
          <Link href={'https://t.me/amo_nout_bot'}>
            <div className=" w-65 h-10  bg-blue-400 text-center rounded-2xl ">
              <h1 className="text-white  py-2">  TG orqali buyurtma berish </h1>
            </div>
          </Link>

        </div>

        <div className="w-80 h-200 rounded-4xl bg-white  hover:shadow-2xl p-3 text-center">

          <h1 className="text-xl items-center ">Asus VivoBook X1502 ( Intel® Core™ i5-13420H)</h1>

          <img className="  pl-12 w-70 items-center" src="https://nout.uz/wp-content/uploads/2025/04/vivo-png-10-variant.png" alt="" />

          <h1 className="text-center pl-3 text-xl">Ekran: 15.6" FHD (1920x1080) IPS</h1>
          <h1 className="text-xl py-3 ">Protsessor: Intel® Core™ i5-13420H (2.1 GHz - 4.6 GHz) (8 yadro; 12 oqim)</h1>
          <h1 className="text-xl py-3 ">Videokarta: Intel Iris XE</h1>
          <h1 className="text-xl py-3 ">Operativ xotira: 16GB DDR4</h1>
          <h1 className="text-xl py-3 ">Xotira qurilmasi: 512GB PCIe® NVMe™ M.2 SSD</h1>
          <h1 className="font-bold text-xl">9 225 000 so'm 750</h1>
          <h1 className="text-xl py-3 ">(QQSsiz)</h1>
          <Link href={'https://t.me/amo_nout_bot'}><div className=" w-65 h-10  bg-blue-400 text-center rounded-2xl ">
            <h1 className="text-white  py-2">  TG orqali buyurtma berish </h1>
          </div>
          </Link>

        </div>

        <div className="w-80 h-200 rounded-4xl bg-white  hover:shadow-2xl p-3 text-center">

          <h1 className="text-xl items-center ">Asus VivoBook X1502 ( Intel® Core™ i5-13420H)</h1>

          <img className="  pl-12 w-70 items-center" src="https://nout.uz/wp-content/uploads/2025/04/vivo-png-11-variant.png" alt="" />

          <h1 className="text-center pl-3 text-xl">Ekran: 15.6" FHD (1920x1080) IPS</h1>
          <h1 className="text-xl py-3 ">Protsessor: Intel® Core™ i5-13420H (2.1 GHz - 4.6 GHz) (8 yadro; 12 oqim)</h1>
          <h1 className="text-xl py-3 ">Videokarta: Intel UHD Graphics</h1>
          <h1 className="text-xl py-3 ">Operativ xotira: 16GB DDR4</h1>
          <h1 className="text-xl py-3 ">Xotira qurilmasi: 512GB PCIe® NVMe™ M.2 SSD</h1>
          <h1 className="font-bold text-xl">9 225 000 so'm 750</h1>
          <h1 className="text-xl py-3 ">(QQSsiz)</h1>
          <Link href={'https://t.me/amo_nout_bot'}>
            <div className=" w-65 h-10  bg-blue-400 text-center rounded-2xl ">
              <h1 className="text-white  py-2"> TG orqali buyurtma berish</h1>
            </div>
          </Link>

        </div>

        <div className="w-80 h-200 rounded-4xl bg-white  hover:shadow-2xl p-3 text-center">

          <h1 className="text-xl items-center ">Asus VivoBook X1502 ( Intel® Core™ i5-13420H)</h1>

          <img className="  pl-12 w-70 items-center" src="https://nout.uz/wp-content/uploads/2025/02/vivo-1-b.webp" alt="" />

          <h1 className="text-center pl-3 text-xl">Ekran: 15.6" FHD (1920x1080) IPS</h1>
          <h1 className="text-xl py-3 ">Protsessor: Intel® Core™ i5-13420H (2.1 GHz - 4.6 GHz) (8 yadro; 12 oqim)</h1>
          <h1 className="text-xl py-3 ">Videokarta: Intel Iris XE</h1>
          <h1 className="text-xl py-3 ">Operativ xotira: 16GB DDR4</h1>
          <h1 className="text-xl py-3 ">Xotira qurilmasi: 1TB PCIe® NVMe™ M.2 SSD</h1>
          <h1 className="text-xl py-3 ">sotuv yuq</h1>

          <Link href={'https://t.me/amo_nout_bot'}><div className=" w-65 h-10  bg-blue-400 text-center rounded-2xl ">
            <h1 className="text-white  py-2"> Analog tanlash </h1>
          </div>
          </Link>

        </div>

        <div className="w-80 h-200 rounded-4xl bg-white  hover:shadow-2xl p-3 text-center">

          <h1 className="text-xl items-center ">Asus VivoBook X1502 ( Intel® Core™ i5-13420H)</h1>

          <img className="  pl-12 w-70 items-center" src="https://nout.uz/wp-content/uploads/2025/02/vivo-2-b.webp" alt="" />

          <h1 className="text-center pl-3 text-xl">Ekran: 15.6 2.8K OLED 120Hz</h1>
          <h1 className="text-xl py-3 ">Protsessor: Intel® Core™ i7-1355U (1.3 GHz - 5.0 GHz) (10 yadro; 12 oqim)</h1>
          <h1 className="text-xl py-3 ">Videokarta: Intel Iris XE</h1>
          <h1 className="text-xl py-3 ">Operativ xotira: 16GB DDR4</h1>
          <h1 className="text-xl py-3 ">Xotira qurilmasi: 1TB PCIe® NVMe™ M.2 SSD</h1>
          <h1 className="text-xl py-3 ">sotuv yuq</h1>

          <Link href={'https://t.me/amo_nout_bot'}> <div className=" w-65 h-10  bg-blue-400 text-center rounded-2xl ">
            <h1 className="text-white  py-2"> Analog tanlash </h1>
          </div>
          </Link>

        </div>

        <div className="w-80 h-200 rounded-4xl bg-white  hover:shadow-2xl p-3 text-center">

          <h1 className="text-xl items-center ">Asus VivoBook X1502 ( Intel® Core™ i5-13420H)</h1>

          <img className="  pl-12 w-70 items-center" src="https://nout.uz/wp-content/uploads/2025/07/g18-2.webp" alt="" />

          <h1 className="text-center pl-3 text-xl">Ekran: 17.3" FullHD IPS</h1>
          <h1 className="text-xl py-3 ">Protsessor: Intel® Core™ i5-13500H (2.6 GHz – 4.7 GHz) (12 yadro; 16 oqim)</h1>
          <h1 className="text-xl py-3 ">Videokarta: Intel Iris XE</h1>
          <h1 className="text-xl py-3 ">Operativ xotira: 16GB DDR4</h1>
          <h1 className="text-xl py-3 ">Xotira qurilmasi: 512GB PCIe® NVMe™ M.2 SSD</h1>
          <h1 className="font-bold text-xl">20 910 000 so'm 1700</h1>
          <h1 className="text-xl py-3 ">(QQSsiz)</h1>
          <Link href={'https://t.me/amo_nout_bot'}>
            <div className=" w-65 h-10  bg-blue-400 text-center rounded-2xl ">
              <h1 className="text-white  py-2"> TG orqali buyurtma berish</h1>
            </div>
          </Link>

        </div>

        <div className="w-80 h-200 rounded-4xl bg-white  hover:shadow-2xl p-3 text-center">

          <h1 className="text-xl items-center ">Asus VivoBook X1502 ( Intel® Core™ i5-13420H)</h1>

          <img className="  pl-12 w-70 items-center" src="https://nout.uz/wp-content/uploads/2024/08/zephyr-white-3.webp" alt="" />

          <h1 className="text-center pl-3 text-xl">Ekran: 15.6" FHD (1920x1080) IPS</h1>
          <h1 className="text-xl py-3 ">Protsessor: Intel® Core™ i5-13420H (2.1 GHz - 4.6 GHz) (8 yadro; 12 oqim)</h1>
          <h1 className="text-xl py-3 ">Videokarta: Intel UHD Graphics</h1>
          <h1 className="text-xl py-3 ">Operativ xotira: 16GB DDR4</h1>
          <h1 className="text-xl py-3 ">Xotira qurilmasi: 512GB PCIe® NVMe™ M.2 SSD</h1>
          <h1 className="text-xl py-3 ">sotuv yuq</h1>
          <Link href={'https://t.me/amo_nout_bot'}>
            <div className=" w-65 h-10  bg-blue-400 text-center rounded-2xl ">
              <h1 className="text-white  py-2"> Analog tanlash </h1>
            </div>
          </Link>
        </div>
        <div className="w-80 h-200 rounded-4xl bg-white  hover:shadow-2xl p-3 text-center">

          <h1 className="text-xl items-center ">Asus VivoBook X1502 ( Intel® Core™ i5-13420H)</h1>

          <img className="  pl-12 w-70 items-center" src="https://nout.uz/wp-content/uploads/2025/05/strix-18-1.webp" alt="" />

          <h1 className="text-center pl-3 text-xl">Ekran: 15.6" FHD (1920x1080) IPS</h1>
          <h1 className="text-xl py-3 ">Protsessor: Intel® Core™ i5-13420H (2.1 GHz - 4.6 GHz) (8 yadro; 12 oqim)</h1>
          <h1 className="text-xl py-3 ">Videokarta: Intel UHD Graphics</h1>
          <h1 className="text-xl py-3 ">Operativ xotira: 16GB DDR4</h1>
          <h1 className="text-xl py-3 ">Xotira qurilmasi: 512GB PCIe® NVMe™ M.2 SSD</h1>
          <h1 className="font-bold text-xl">41 820 000 so'm 3400</h1>
          <h1 className="text-xl py-3 ">(QQSsiz)</h1>
          <Link href={'https://t.me/amo_nout_bot'}>
            <div className=" w-65 h-10  bg-blue-400 text-center rounded-2xl ">
              <h1 className="text-white  py-2"> TG orqali buyurtma berish </h1>
            </div>
          </Link>

        </div>

        <div className="w-80 h-200 rounded-4xl bg-white  hover:shadow-2xl p-3 text-center">

          <h1 className="text-xl items-center ">Asus VivoBook X1502 ( Intel® Core™ i5-13420H)</h1>

          <img className="  pl-12 w-70 items-center" src="https://nout.uz/wp-content/uploads/2024/08/zephyr-white-6.webp" alt="" />

          <h1 className="text-center pl-3 text-xl">Ekran: 16" 2.5K (2560 x 1600, WQXGA) OLED 240 Гц</h1>
          <h1 className="text-xl py-3 ">Protsessor: Intel® Core™ Ultra 9-285H (2.9 GHz - 5.4 GHz) (16 yadro; 16 oqim)</h1>
          <h1 className="text-xl py-3 ">Videokarta: NVIDIA GeForce RTX 5090 - 24GB/GDDR7</h1>
          <h1 className="text-xl py-3 ">Operativ xotira: 64GB DDR5</h1>
          <h1 className="text-xl py-3 ">Xotira qurilmasi: 1TB PCIe® NVMe™ M.2 SSD</h1>
          <h1 className="font-bold text-xl">55 473 000 so'm 4 000</h1>
          <h1 className="text-xl py-3 ">(QQSsiz)</h1>
          <Link href={'https://t.me/amo_nout_bot'}>
            <div className=" w-65 h-10  bg-blue-400 text-center rounded-2xl ">
              <h1 className="text-white  py-2"> TG orqali buyurtma berish </h1>
            </div>
          </Link>

        </div>
      </div>

      <h1 className="text-4xl pl-17 py-10">Aksessuarlar</h1>

      <div className="grid grid-cols-4 gap-4 px-10 pl-17 py-10">
        <div className="w-80 pl-10 h-80 rounded-4xl bg-white  hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/brand/sumki/'}>
            <img className=" px-10  w-90 items-center " src="https://nout.uz/wp-content/uploads/2024/06/8033_black.6903834080337.ver01-1-600x600.png" alt="" />
            <h1 className="text-center font-bold  text-xl">Sumkalar </h1>
          </Link>
        </div>
        <div className="w-80 h-80 pl-10 rounded-4xl bg-white hover:shadow-2xl ">
          <Link href={'https://nout.uz/uz/brand/ryukzaki/'}>
            <img className="px-10 w-90 items-center" src="https://nout.uz/wp-content/uploads/2025/06/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-23-2-600x600.png" alt="" />
            <h1 className="text-center font-bold text-xl">Ryukzaklar</h1>
          </Link>
        </div>
        <div className="w-80 h-80 pl-10 rounded-4xl bg-white hover:shadow-2xl ">
          <Link href={'https://nout.uz/uz/brand/mouse/'}>
            <img className="px-10 w-90 items-center" src="https://nout.uz/wp-content/uploads/2025/06/P718_pdcImage_0003-600x600.png" alt="" />
            <h1 className="text-center font-bold text-xl">Sichqonchalar</h1>
          </Link>
        </div>
        <div className="w-80 h-80 pl-10 rounded-4xl bg-white hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/brand/naushniki/'}>
            <img className="px-10 w-90 items-center" src="https://nout.uz/wp-content/uploads/2025/06/h732-3-600x600.png" alt="" />
            <h1 className="text-center font-bold text-xl">Quloqchinlar</h1>
          </Link>
        </div>
      </div>

      <h1 className="text-4xl pl-17 py-10">Yangiliklar</h1>

      <div className="grid grid-cols-3 pl-17 gap-6 px-10">
        <div className="w-110 p-3 h-100 rounded-xl bg-white  hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/news/kak-vybrat-noutbuk-dlya-onlajn-obucheniya-v-samarkande/'}>
            <img className="w-full  rounded-2xl items-center " src="https://nout.uz/wp-content/uploads/2025/04/i-1.webp" alt="" />
            <h1 className="py-1 font-bold text-lg">2025 yilning eng yaxshi 7 ta noutbuki</h1>
            <h1 className="py-1 ">Maqola tavsifi: 2025 yilda noutbuk tanlash har qachongidan ham murakkablashdi — bozor yangiliklarga to‘lib ketgan, va har</h1>
            <h1 className="py-1 text-sm">01 Aprel 2025</h1>
            <h1 className="py-1 font-bold text-blue-500">To‘liq o‘qish</h1>
          </Link>
        </div>
        <div className="w-110 p-3 h-100 rounded-xl bg-white  hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/news/noutbuki-s-dostavkoj-po-samarkandu-gde-kupit-i-kak-ne-pereplatit/'}>
            <img className="w-full h-50 rounded-2xl items-center " src="https://nout.uz/wp-content/uploads/2025/10/2948797-1.png" alt="" />
            <h1 className="py-1 font-bold text-lg">Samarqand bo‘ylab yetkazib beriladigan noutbuklar: qayerdan sotib olish va ortiqcha to‘lamaslik qanday</h1>
            <h1 className="py-1 ">Bugun Samarqand aholisining tobora ko‘proq qismi statsionar kompyuterlar o‘rniga noutbuklarni tanlamoqda — va bu</h1>
            <h1 className="py-1 text-sm">19 Oktabr 2025</h1>
            <h1 className="py-1 font-bold text-blue-500">To‘liq o‘qish</h1>
          </Link>
        </div>
        <div className="w-110 p-3 h-100 rounded-xl bg-white  hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/news/luchshie-igrovye-noutbuki-asus-rog-rejting-testy-i-otzyvy/'}>
            <img className="w-full h-50  rounded-2xl items-center " src="https://nout.uz/wp-content/uploads/2025/06/dlaskd-1.png" alt="" />
            <h1 className="py-1 font-bold text-lg">Eng yaxshi ASUS ROG oʻyin noutbuklari: reytinglar, testlar va sharhlar</h1>
            <h1 className="py-1 ">ASUS ROG o'yin noutbuklari uzoq vaqtdan beri o'yinchilar va grafika, video yoki...</h1>
            <h1 className="py-1 text-sm">25 Iyun 2025</h1>
            <h1 className="py-1 font-bold text-blue-500">To‘liq o‘qish</h1>
          </Link>
        </div>
        <div className="w-110 p-3 h-100 rounded-xl bg-white  hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/news/kakoj-processor-v-noutbuke-vybrat-i3-i5-i7-ili-i9/'}>
            <img className="w-full h-50 rounded-2xl items-center " src="https://nout.uz/wp-content/uploads/2025/09/3209kgg.png" alt="" />
            <h1 className="py-1 font-bold text-lg">Noutbukda qaysi protsessorni tanlash kerak: i3, i5, i7 yoki i9</h1>
            <h1 className="py-1 ">Noutbuk tanlash — oson vazifa emas. Qurilmaning unumdorligini belgilaydigan asosiy parametrlardan biri</h1>
            <h1 className="py-1 text-sm">18 Sentabr 2025</h1>
            <h1 className="py-1 font-bold text-blue-500">To‘liq o‘qish</h1>
          </Link>
        </div>
        <div className="w-110 p-3 h-100 rounded-xl bg-white  hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/news/top-7-luchshix-noutbukov-2025-goda/https://nout.uz/uz/news/kakoj-processor-v-noutbuke-vybrat-i3-i5-i7-ili-i9/'}>
            <img className="w-full h-50 rounded-2xl items-center " src="https://nout.uz/wp-content/uploads/2025/09/30495kovd.png" alt="" />
            <h1 className="py-1 font-bold text-lg">Dizayn va kontent uchun noutbuk: 3D, video va Adobe uchun noutbuk</h1>
            <h1 className="py-1 ">  Zamonaviy dizayner yoki kontent yaratuvchi texnikaga yuqori yuklama tushadigan sharoitda ishlaydi. 3D modellarni render</h1>
            <h1 className="py-1 text-sm">18 Sentabr 2025</h1>
            <h1 className="py-1 font-bold text-blue-500">To‘liq o‘qish</h1>
          </Link>
        </div>
        <div className="w-110  p-3 h-100 rounded-xl bg-white  hover:shadow-2xl">
          <Link href={'https://nout.uz/uz/news/igrovye-noutbuki-kak-vybrat-i-gde-kupit/'}>
            <img className="w-full h-50 rounded-2xl items-center " src="https://nout.uz/wp-content/uploads/2025/09/32948ko.png" alt="" />
            <h1 className="py-1 font-bold text-lg">O‘yin noutbuklari: qanday tanlash va qayerdan sotib olish</h1>
            <h1 className="py-1 ">Zamonaviy o‘yin noutbuklari statsionar kompyuterlarning to‘liq o‘rnini bosa boshladi. Ular sevimli o‘yinlardan hech qanday</h1>
            <h1 className="py-1 text-sm">12 Sentabr 2025</h1>
            <h1 className="py-1 font-bold text-blue-500">To‘liq o‘qish</h1>
          </Link>
        </div>
      </div>

      <div className="py-7 text-center  pl-33">
        <Link href={'https://nout.uz/uz/news/'}>
          <div className=" w-300 text-center h-10  bg-blue-500 rounded-xl ">
            <h1 className="text-white text-center hover:text-white py-2">Barcha yangiliklarni ko‘rish </h1>
          </div>
        </Link>
      </div>






      <Footer />

    </div>

  );
}
