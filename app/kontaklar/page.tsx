import Footer from "../components/cardimge/Footer";
import Header from "../components/cardimge/Header";
import Navbar from "../components/cardimge/Navbar";

export default function Home() {
      return (
            <div className=" bg-gray-100 h-full">
                  <div className=" bg-black">
                        <Header />
                  </div>
                  <div className="bg-blue-700 rounded-fuul  ">
                        <Navbar />
                  </div>
                  <h1 className="pl-32 py-3 text-xl ">Bosh sahifa / Muddatli to‘lov</h1>
                  <h1 className="pl-32 text-5xl py-15 ">Kontaktlar</h1>
                  <h1 className="pl-32 py-1 grid grid-cols-2 text-xl ">Toshkentdagi rasmiy noutbuklar do‘koni. Ish, o‘qish va o‘yinlar uchun ideal gadjetni tanlashga yordam beramiz. Sertifikatlangan texnika, 2 yilgacha kafolat va foydali muddatli to‘lov.</h1>

                  <div className="flex gap-5 ml-32 py-10">
                        <div className=" bg-white w-100 h-50 rounded-2xl shadow-2xl ">
                              <h1 className="pl-7 py-5 ">💻</h1>
                              <h1 className="pl-7 py-1 text-2xl">200+ ta noutbuk modellari mavjud</h1>
                              <h1 className="pl-7 py-1">2025 yil yangiliklari: Asus, Lenovo, HP, Acer, Dell, MSI. Barcha modellarni ushlab ko‘rish va sinab ko‘rish mumkin.</h1>

                        </div>
                        <div className=" bg-white w-100 h-50 rounded-2xl shadow-2xl">
                              <h1 className="pl-7 py-5 text-2xl">🚚</h1>
                              <h1 className="pl-7 text-xl py-1">Bepul yetkazib berish</h1>
                              <h1 className="pl-7  py-1">Buyurtmani Toshkent bo‘ylab 2 soat ichida yetkazamiz, O‘zbekiston bo‘ylab esa — kuryer xizmati orqali bepul.</h1>


                        </div>
                        <div className=" bg-white w-100 h-50 rounded-2xl shadow-2xl ">
                              <h1 className="pl-7 py-5 text-xl">🗓</h1>
                              <h1 className="pl-7 text-2xl py-1">12 oyga muddatli to‘lov</h1>
                              <h1 className="pl-7  py-1">10 daqiqada rasmiylashtirish. Oldindan to‘lovsiz va yashirin komissiyalarsiz. Hozir foydalaning — keyin to‘lang.</h1>
                        </div>
                  </div>

                  <div className="bg-gray-100 py-14 px-4">
                        <div className="max-w-7xl mx-auto">
                              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                                    Nima uchun Nout.uz ni tanlashadi
                              </h2>

                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
                                          <div className="text-5xl mb-4">🛡️</div>

                                          <h3 className="text-xl font-semibold mb-3">
                                                Rasmiy kafolat 2 yil
                                          </h3>

                                          <p className="text-gray-600 leading-7 text-sm">
                                                Sertifikatlangan texnika va ishonchli yetkazib berish.
                                                Nuqsonlardan to‘liq himoya.
                                          </p>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
                                          <div className="text-5xl mb-4">🧠</div>

                                          <h3 className="text-xl font-semibold mb-3">
                                                Professional tanlov
                                          </h3>

                                          <p className="text-gray-600 leading-7 text-sm">
                                                Vazifalaringiz va byudjetingizga mos ideal
                                                konfiguratsiyani topamiz.
                                          </p>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
                                          <div className="text-5xl mb-4">⚡</div>

                                          <h3 className="text-xl font-semibold mb-3">
                                                Mahsulot mavjud
                                          </h3>

                                          <p className="text-gray-600 leading-7 text-sm">
                                                Xarid qilishdan oldin joyida ekran,
                                                klaviatura va ovozni tekshirish.
                                          </p>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
                                          <div className="text-5xl mb-4">💳</div>

                                          <h3 className="text-xl font-semibold mb-3">
                                                Qulay to‘lov
                                          </h3>

                                          <p className="text-gray-600 leading-7 text-sm">
                                                Naqd pul, terminal, o‘tkazma yoki
                                                Click/Payme orqali onlayn to‘lov.
                                          </p>
                                    </div>

                              </div>
                        </div>
                  </div>
                  <div className=" bg-blue-50 w-7xl ml-32 h-43 rounded-2xl shadow-2xl ">
                        <h1 className="pl-7 py-5 ">📞Maslahat kerakmi?</h1>
                        <h1 className="pl-7 py-1 text-blue-400 text-xl">Saytdagi narxlar har kuni yangilanadi, ammo yo‘lga chiqishdan oldin mavjudligini aniqlashtirgan ma’qul. Qo‘ng‘iroq qiling — biz aloqadamiz!</h1>
                        <div className="flex ">
                              <div className="w-70 h-10 py-2 rounded-xl ml-7 pl-8 my-5 bg-white">
                                    <h1>📍Seoul Mun: +998 77 144 00 55</h1>
                              </div>
                              <div className="w-70 h-10 py-2 rounded-xl ml-7 pl-8 my-5 bg-white">
                                    <h1>📍Malika: +998 95 155 00 66</h1>
                              </div>
                        </div>

                  </div>
                  <div className="bg-gray-100 py-14 px-4">
                        <div className="max-w-7xl mx-auto">
                              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                                    Nima uchun Nout.uz ni tanlashadi
                              </h2>

                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
                                          <div className="text-5xl mb-4">🛡️</div>

                                          <h3 className="text-xl font-semibold mb-3">
                                                Rasmiy kafolat 2 yil
                                          </h3>

                                          <p className="text-gray-600 leading-7 text-sm">
                                                Sertifikatlangan texnika va ishonchli yetkazib berish.
                                                Nuqsonlardan to‘liq himoya.
                                          </p>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
                                          <div className="text-5xl mb-4">🧠</div>

                                          <h3 className="text-xl font-semibold mb-3">
                                                Professional tanlov
                                          </h3>

                                          <p className="text-gray-600 leading-7 text-sm">
                                                Vazifalaringiz va byudjetingizga mos ideal
                                                konfiguratsiyani topamiz.
                                          </p>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
                                          <div className="text-5xl mb-4">⚡</div>

                                          <h3 className="text-xl font-semibold mb-3">
                                                Mahsulot mavjud
                                          </h3>

                                          <p className="text-gray-600 leading-7 text-sm">
                                                Xarid qilishdan oldin joyida ekran,
                                                klaviatura va ovozni tekshirish.
                                          </p>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
                                          <div className="text-5xl mb-4">💳</div>

                                          <h3 className="text-xl font-semibold mb-3">
                                                Qulay to‘lov
                                          </h3>

                                          <p className="text-gray-600 leading-7 text-sm">
                                                Naqd pul, terminal, o‘tkazma yoki
                                                Click/Payme orqali onlayn to‘lov.
                                          </p>
                                    </div>

                              </div>
                        </div>
                  </div>

                  <div className="flex">
                        {/* chap tomon */}
                        <div>
                              <h1 className="text-3xl md:text-4xl font-bold pl-32 mb-14">
                                    Biz qanday ishlaymiz
                              </h1>

                              <h2 className="text-2xl pl-32 font-bold mb-3">
                                    1. Maslahat
                              </h2>

                              <p className="text-gray-600 pl-32 leading-7 mb-8">
                                    Vazifalarni aniqlaymiz: kod yozish, rendering,
                                    o‘yinlar yoki ofis ishlari. Byudjetga mos model tanlaymiz.
                              </p>

                              <h2 className="text-2xl pl-32 font-bold mb-3">
                                    2. Sinov (test-drayv)
                              </h2>

                              <p className="text-gray-600 pl-32 leading-7 mb-8">
                                    Qutini sizning oldingizda ochamiz. Matritsani
                                    o‘lik piksellarga, SSDni, ovozni va portlarni tekshiramiz.
                              </p>

                              <h2 className="text-2xl font-bold pl-32 mb-3">
                                    3. Tayyor holatda sozlash
                              </h2>

                              <p className="text-gray-600 leading-7 pl-32 mb-8">
                                    Windows, Office va drayverlarni bepul o‘rnatib beramiz.
                                    Eski kompyuterdan ma’lumotlarni ko‘chirishga yordam beramiz.
                              </p>

                              <h2 className="text-2xl font-bold pl-32 mb-3">
                                    4. Qo‘llab-quvvatlash
                              </h2>

                              <p className="text-gray-600 leading-7 pl-32">
                                    Kafolatni rasmiylashtiramiz. Xariddan keyin
                                    har qanday savollar bo‘yicha aloqada qolamiz.
                              </p>
                        </div>


                        {/* o'ng tomon */}
                        <div>
                              <h1 className="text-3xl py-15 md:text-4xl font-bold pl-32 mb-14">
                                    Nout.uz tamoyillari
                              </h1>
                              <h2 className="text-2xl font-bold pl-32 mb-3">
                                    🔍 Halol yondashuv
                              </h2>
                              <p className="text-gray-600 leading-7 pl-32 mb-8">
                                    Haqiqiy xususiyatlarni aytamiz.
                                    Keraksiz funksiyalar uchun ortiqcha
                                    to‘lashdan qaytaramiz.
                              </p>
                              <h2 className="text-2xl font-bold pl-32 mb-3">
                                    🤝 Samimiy xizmat
                              </h2>
                              <p className="text-gray-600 leading-7 pl-32 mb-8">
                                    Ehtiyotkorlik bilan topshirish,
                                    dasturlarni sovg‘a sifatida o‘rnatish,
                                    rasmiylashtirishni kutayotganingizda
                                    choy/qahva.
                              </p>
                              <h2 className="text-2xl font-bold pl-32 mb-3">
                                    🚀 Tezlik va qulaylik
                              </h2>
                              <p className="text-gray-600 pl-32 leading-7">
                                    Butun O‘zbekiston bo‘ylab bepul
                                    yetkazib berish. Buyurtma qilingan
                                    kuni jo‘natish.
                              </p>
                        </div>
                  </div>

                  <Footer />

            </div>



      )
}