import Footer from "../components/cardimge/Footer";
import Header from "../components/cardimge/Header";
import Navbar from "../components/cardimge/Navbar";

export default function Home() {
      return (
            <div className="  bg-gray-50 h-full">
                  <div className=" bg-black">
                        <Header />
                  </div>
                  <div className="bg-blue-700 rounded-fuul  ">
                        <Navbar />
                  </div>

                  <h1 className="pl-40 py-6 text-xl">Bosh sahifa/Nout.uz do‘konlari manzillari</h1>
                  <h1 className="pl-40 py-8 text-5xl font-bold">Nout.uz do‘konlari manzillari</h1>
                  <h1 className="pl-40 py-9 text-xl">Toshkentdagi Nout.uz rasmiy filiallarining manzillari va kontaktlari. Biz doimo aloqadamiz va yordam berishga tayyormiz!</h1>

                  <div className="flex gap-8 ml-40 py-10">
                        <div className=" bg-white w-90 h-65 rounded-2xl ">
                              <h1 className="pl-7 py-5 text-blue-500 text-xl">🏢Nout.uz (Seoul Mun)</h1>
                              <h1 className="pl-7 py-1">Toshkent shahri, Yakkasaroy tumani, Bahodir ko‘chasi, 1/1</h1>
                              <h1 className="pl-7">Mo‘ljal: “Seoul Mun” savdo markazi (Naberejnaya)</h1>
                              <h1 className="pl-7 py-2 text-xl">Ish vaqti:</h1>
                              <h1 className="pl-7 py-1">Har kuni | soat 10:00 dan 22:00 gacha</h1>
                        </div>
                        <div className=" bg-white w-90 h-65 rounded-2xl ">
                              <h1 className="pl-7 py-5 text-blue-500 text-xl">📍Nout.uz (Malika)</h1>
                              <h1 className="pl-7 py-1">Toshkent shahri, Kichik Halqa Yo‘li 38A</h1>
                              <h1 className="pl-7 py-1">Mo‘ljal: “Mercato” savdo markazi ro‘parasida</h1>
                              <h1 className="pl-7 py-2 text-xl">Ish vaqti:</h1>
                              <h1 className="pl-7 py-1">Har kuni | soat 10:00 dan 18:30 gacha</h1>
                        </div>
                        <div className=" bg-white w-90 h-65 rounded-2xl ">
                              <h1 className="pl-7 py-5 text-blue-500 text-xl">📞Call-center</h1>
                              <div className="flex ">
                                    <h1 className="pl-7 py-1">Seoul Mun (Next): </h1>
                                    <h1 className="text-blue-500 py-1 pl-1"> +998 (77) 144-00-55</h1>
                              </div>
                              <div className="flex ">
                                    <h1 className="pl-7 py-1">Malika </h1>
                                    <h1 className="text-blue-500 py-1 pl-1">  +998 (95) 155-00-66</h1>
                              </div>
                              <h1 className="pl-7 py-2 text-black text-xl">Teligram </h1>
                              <div className="flex ">
                                    <h1 className="pl-7 py-1">Har qanday savollar bo‘yicha aloqa: </h1>
                                    <h1 className="py-1 pl-1 text-blue-500">@Noutuz</h1>
                              </div>
                        </div>
                  </div>

                  <Footer />

            </div>



      )
}