import Link from "next/link";
import Header from "../components/cardimge/Header";
import Navbar from "../components/cardimge/Navbar";
import Footer from "../components/cardimge/Footer";

export default function Home() {
    return (
        <div className=" bg-gray-50 h-full">
            <div className=" bg-black">
                <Header />
            </div>
            <div className="bg-blue-700 rounded-fuul  ">
                <Navbar />
            </div>
            <h1 className="pl-32 text-xl">Bosh sahifa / Muddatli to‘lov</h1>
            <h1 className="pl-32 py-10 text-3xl">Yetkazib berish va to‘lov</h1>

            <div className=" bg-orange-100 w-300 h-25 rounded-2xl ml-32">
                <div className="flex text-xl py-3">
                    <h1 className="text-blue-700 pl-2 ">Diqqat: </h1>
                    <h1 className="pl-2">Saytdagi barcha ma’lumotlar faqat axborot xarakteriga ega va</h1>
                    <h1 className="text-blue-700 pl-2">OMMAVIY TAKLIF EMAS!</h1>
                </div>
                <h1 className="pl-2 text-xl">Buyurtma rasmiylashtirishdan oldin saytda ko‘rsatilgan telefon raqamlari orqali mahsulot mavjudligi va dolzarb narxlarni albatta aniqlashtiring.</h1>
            </div>
            <div className="flex">
                <div className="bg-white w-150 h-100 rounded-2xl  ml-32 my-10 justify-around shadow-2xl ">
                    <h1 className="pl-5 py-2  text-4xl">To‘lov shartlari</h1>
                    <h1 className="pl-5 py-3 text-2xl ">Toshkent shahri bo‘yicha (TKAD doirasida)</h1>
                    <h1 className="pl-5 py-2">Mahsulot uchun to‘lovni naqd pul orqali ham, to‘lov tizimlari orqali ham amalga oshirishingiz mumkin (CLICK, Payme, Uzcard va h.k.).</h1>
                    <h1 className="pl-5 py-1 text-3xl ">Hududlar uchun</h1>
                    <h1 className="pl-5 py-3">Mahsulot uchun to‘lov faqat to‘lov tizimlari orqali amalga oshiriladi (CLICK, Payme, Uzcard va h.k.), mahsulot Toshkent shahridagi ombordan yetkazib berish xizmati kuryeriga topshirilgan vaqtda.</h1>
                    <div className="bg-blue-100 w-140 h-13 rounded-2xl ml-5">
                        <h1 className="pl-5 py-3">ℹ️Рекомендуем сохранять чек/скрин оплаты до момента получения товара.</h1>
                    </div>

                </div>
                <div className="bg-white w-150 h-100 rounded-2xl  ml-4 my-10 justify-around shadow-2xl ">
                    <h1 className="pl-5 py-2  text-4xl">Yetkazib berish shartlari</h1>
                    <div className="flex ">
                        <h1 className="pl-5 py-3 text-2xl ">🚚По г. Ташкент, доставка через службу — </h1>
                        <div className=" w-24 h-8 bg-blue-200 text-center text-blue-600 my-3 ml-2 rounded-2xl ">
                            <h1 className=" text-blue-700 py-1">  бесплатно </h1>
                        </div>
                    </div>
                    <div className="flex ">
                        <h1 className="pl-5 py-2">📦В регионы через службы экспресс-почты — </h1>
                        <div className=" w-24 h-8 bg-blue-200 text-center text-blue-600 my-3 ml-2 rounded-2xl ">
                            <h1 className=" text-blue-700 py-1">  бесплатно </h1>
                        </div>
                    </div>
                    <h1 className="pl-5 py-1  ">Muddatlar yo‘nalish va yetkazib berish xizmatlarining yuklamasiga bog‘liq.</h1>
                    <div className="bg-blue-100 w-140 h-30 rounded-2xl ml-5 my-4">
                        <h1 className="pl-5 py-3">✅    Важный момент:</h1>
                        <h1 className="pl-5 py-2">Mahsulotni olganingizda uning komplektatsiyasi va tashqi ko‘rinishini albatta tekshiring!</h1>
                    </div>
                </div>
            </div>
            <div className=" bg-white w-300 h-58 shadow-2xl rounded-2xl ml-32">

                <h1 className="text-3xl pl-5 py-3">Qo‘llab-quvvatlash va aniqlashtirishlar</h1>
                <h1 className="pl-5 py-3">Xarid qilingan mahsulot uchun to‘lov va yetkazib berish xizmatimiz sizda faqat ijobiy taassurot qoldirishi uchun qo‘limizdan kelgan barcha ishni qilamiz.</h1>
                <div className="flex ml-3">
                    <div className=" w-35 h-10 bg-black text-center text-white my-3 ml-2 rounded-xl ">
                        <h1 className=" text-white py-2"> Qung'iroq qilish  </h1>
                    </div>
                    <div className=" w-35 h-10 bg-black text-center text-white my-3 ml-2 rounded-xl ">
                        <h1 className=" text-white py-2"> E-mailga yozish  </h1>
                    </div>
                </div>
<h1 className="pl-5 py-1">Agar sizda to‘lov/yetkazib berish bo‘yicha savollar bo‘lsa, biz bilan qulay usulda bog‘laning.</h1>
            </div>
            <Footer />
        </div>
    )
}