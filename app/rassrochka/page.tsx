import { Link } from "lucide-react";
import Header from "../components/cardimge/Header";
import Navbar from "../components/cardimge/Navbar";
import Footer from "../components/cardimge/Footer";


export default function Home() {
      return (
            <div className=" bg-gray-100">
                  <div className="bg-black">
                        <Header />
                  </div>
                  <Navbar />
                  <h1 className="pl-32 text-xl">Bosh sahifa / Muddatli to‘lov</h1>
                  <div className="flex">
                        <div className="my-30 ">
                              <h1 className="pl-32   text-4xl flex">Yuborish
                                    <h1 className="text-blue-400">Noutbuklar va texnika</h1>
                              </h1 >
                              <h1 className="text-blue-400 pl-32 text-4xl flex">uchun muddatli to‘lov
                                    <h1 className="text-4xl text-black">Toshkentda</h1>
                              </h1>
                              <h1 className="text-xl pl-32 py-8">Noutbuklar va texnikani muddatli to‘lovga xarid qiling — oson, tez</h1>
                        </div>
                        <img className="w-120 bg-olive-100 ml-60  " src="https://ir.ozone.ru/s3/multimedia-1-7/w1200/7155065383.jpg" alt="" />
                  </div>

                  <div className="w-60 h-10 py-2 rounded-xl ml-32 pl-8 my-5 bg-blue-500">
                        <h1 className="text-white">Onlayn rasmiylashtirish</h1>
                  </div>

                  <h1 className="pl-32 py-8 text-4xl">Nout.uz orqali rasmiylashtirishning afzalliklari</h1>

                  <div className=" gap-5 ml-40 grid grid-cols-2 py-10">
                        <div className=" bg-white w-130 h-55  rounded-2xl ">
                              <h1 className="pl-7 py-5  text-3xl">Banksiz va kafillarsiz</h1>
                              <h1 className="pl-7 py-1 text-xl ">Uzoq tekshiruvlar va murakkab anketalarni unuting — hech qanday banklar, kafillar yoki ortiqcha hujjatlar kerak emas. Faqat siz va sizning tanlovingiz.</h1>

                        </div>
                        <div className="  bg-white w-130 h-55  rounded-2xl ">
                              <h1 className="pl-7 py-5  text-3xl">Faqat pasport, karta va rasmiy ish</h1>
                              <h1 className="pl-7 py-1 text-xl">Hammasi oddiy: faqat pasport, plastik karta va kamida 3 oydan beri rasmiy ishlayotganingizni tasdiqlash kerak. Tez, tushunarli va ortiqcha savollarsiz.</h1>

                        </div>
                        <div className=" bg-white w-130 h-55 rounded-2xl ">
                              <h1 className="pl-7 py-5  text-3xl">Tez tasdiqlash — 5 daqiqadan boshlab</h1>
                              <h1 className="pl-7 py-1 text-xl ">Arizani onlayn yoki do‘konda topshiring — va atigi 5 daqiqada javobni bilib olasiz. Bankdagidek kunlab kutish shart emas.</h1>

                        </div>
                        <div className="  bg-white w-130 h-55  rounded-2xl ">
                              <h1 className="pl-7 py-5  text-3xl">Toshkent bo‘ylab qulay yetkazib berish</h1>
                              <h1 className="pl-7 py-1 text-xl">Tasdiqlangandan so‘ng — texnika eng qisqa muddatda yetkazib beriladi. Hech qanday navbatlar yoki borib kelishlar yo‘q. Oddiy, qulay va jadval bo‘yicha.</h1>

                        </div>
                  </div>
                  <div className="bg-gray-100 py-14 px-4">
                        <div className="max-w-7xl mx-auto">
                              <h2 className="text-3xl md:text-4xl font-bold  mb-12">
                                    Muddatli to‘lovni rasmiylashtirish shartlari
                              </h2>

                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
                                          <div className="text-5xl mb-4"></div>

                                          <h3 className="text-xl py-12 font-semibold mb-3">
                                                Muddatli to‘lov rasmiy ish joyisiz ham mavjud
                                          </h3>


                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
                                          <div className="text-8xl mb-4"></div>

                                          <h3 className="text-xl pl-3 py-12 font-semibold mb-3">
                                                Oylik to‘lovlar uchun plastik karta
                                          </h3>


                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
                                          <div className="text-5xl mb-4"></div>

                                          <h3 className="text-xl pl-3 py-12 font-semibold mb-3">
                                                Pasport — rasmiylashtirish uchun kerak bo‘lgan yagona narsa
                                          </h3>


                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
                                          <div className="text-5xl mb-4"></div>

                                          <h3 className="text-xl pl-3 py-12 font-semibold mb-3">
                                                Yosh 22 dan boshlab — xaridlarga kattalarga xos yondashuv
                                          </h3>


                                    </div>

                              </div>
                        </div>
                  </div>
                  <h1 className="pl-32 text-4xl py-8">Sizga mos keladigan shartlar</h1>
                  <h1 className="text-3xl pl-32 py-5">Uzum Nasiya</h1>

                  <div className="flex">
                        <div className="bg-white rounded-2xl ml-32 p-6 w-70 h-80 shadow-md hover:shadow-xl transition duration-300">
                              <h1 className="text-3xl text-blue-500 text-center ">6 oyga</h1>
                              <div className="flex">
                                    <img className="w-50 h-30 my-4" src="https://cis.visa.com/dam/VCOM/regional/cemea/genericcis/Uzbekistan/bank-logos/cis-uz-uzum-bank-logo-800x450.png" alt="" />
                              </div>
                              <h1 className="text-2xl text-center py-4">Summa: 25 000 000 so‘mgacha</h1>
                        </div>

                        <div className="bg-white rounded-2xl ml-5 p-6 w-70 h-80 shadow-md hover:shadow-xl transition duration-300">
                              <h1 className="text-3xl text-blue-500 text-center ">12 oyga</h1>
                              <div className="flex">
                                    <img className="w-50 h-30 my-4" src="https://cis.visa.com/dam/VCOM/regional/cemea/genericcis/Uzbekistan/bank-logos/cis-uz-uzum-bank-logo-800x450.png" alt="" />
                              </div>
                              <h1 className="text-2xl text-center py-">Summa: 25 000 000 so‘mgacha</h1>
                        </div>
                  </div>
                  <h1 className="text-3xl pl-32 py-10">TBC Bank</h1>
                  <div className="grid grid-cols-4">
                        <div className="bg-white rounded-2xl  ml-32 p-6 w-70 h-80 shadow-md hover:shadow-xl transition duration-300">
                              <h1 className="text-3xl text-blue-500 text-center ">3 oyga </h1>
                              <div className="flex">
                                    <img className="w-20 h-20 my-4" src="https://inservice.ge/_next/image?url=https%3A%2F%2Fapi.inservice.ge%2Fstorage%2F186%2Fchannels4_profile.jpg&w=3840&q=75" alt="" />
                                    <h1 className="text-3xl text-center py-9">Tbc Bank</h1>
                              </div>
                              <h1 className="text-2xl text-center py-4">Summa: 100 000 000 so‘mgacha</h1>
                        </div>

                        <div className="bg-white rounded-2xl ml-20 p-6 w-70 h-80 shadow-md hover:shadow-xl transition duration-300">
                              <h1 className="text-3xl text-blue-500 text-center ">6 oyga </h1>
                              <div className="flex">
                                    <img className="w-20 h-20 my-4" src="https://inservice.ge/_next/image?url=https%3A%2F%2Fapi.inservice.ge%2Fstorage%2F186%2Fchannels4_profile.jpg&w=3840&q=75" alt="" />
                                    <h1 className="text-3xl text-center py-9">Tbc Bank</h1>
                              </div>
                              <h1 className="text-2xl text-center py-4">Summa: 100 000 000 so‘mgacha</h1>
                        </div>
                        <div className="bg-white rounded-2xl ml-10 p-6 w-70 h-80 shadow-md hover:shadow-xl transition duration-300">
                              <h1 className="text-3xl text-blue-500 text-center ">12 oyga </h1>
                              <div className="flex">
                                    <img className="w-20 h-20 my-4" src="https://inservice.ge/_next/image?url=https%3A%2F%2Fapi.inservice.ge%2Fstorage%2F186%2Fchannels4_profile.jpg&w=3840&q=75" alt="" />
                                    <h1 className="text-3xl text-center py-9">Tbc Bank</h1>
                              </div>
                              <h1 className="text-2xl text-center py-4">Summa: 100 000 000 so‘mgacha</h1>
                        </div>

                        <div className="bg-white rounded-2xl ml-5 p-6 w-70 h-80 shadow-md hover:shadow-xl transition duration-300">
                              <h1 className="text-3xl text-blue-500 text-center ">2 yilga</h1>
                              <div className="flex">
                                    <img className="w-20 h-20 my-4" src="https://inservice.ge/_next/image?url=https%3A%2F%2Fapi.inservice.ge%2Fstorage%2F186%2Fchannels4_profile.jpg&w=3840&q=75" alt="" />
                                    <h1 className="text-3xl text-center py-9">Tbc Bank</h1>
                              </div>
                              <h1 className="text-2xl text-center py-4">Summa: 100 000 000 so‘mgacha</h1>
                        </div>
                        <div className="bg-white rounded-2xl ml-32 p-6 my-10 w-70 h-80 shadow-md hover:shadow-xl transition duration-300">
                              <h1 className="text-3xl text-blue-500 text-center ">3 yilga</h1>
                              <div className="flex">
                                    <img className="w-20 h-20 my-4" src="https://inservice.ge/_next/image?url=https%3A%2F%2Fapi.inservice.ge%2Fstorage%2F186%2Fchannels4_profile.jpg&w=3840&q=75" alt="" />
                                    <h1 className="text-3xl text-center py-9">Tbc Bank</h1>
                              </div>
                              <h1 className="text-2xl text-center py-4">Summa: 100 000 000 so‘mgacha</h1>
                        </div>
                  </div>
                  <h1 className="pl-32 text-3xl py-7">Bu qanday ishlaydi</h1>
                  <div className="grid ml-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="bg-white rounded-2xl p-6 w-80 h-25 shadow-md hover:shadow-xl transition duration-300">
                              <h1 className="text-2xl text-center">Mahsulotni tanlaysiz</h1>
                        </div>

                        <div className="bg-white rounded-2xl p-6 h-25 w-80  shadow-md hover:shadow-xl transition duration-300">
                              <h1 className="text-2xl text-center">Arizani to‘ldirasiz</h1>
                        </div>

                        <div className="bg-white rounded-2xl p-6 h-25 w-80 shadow-md hover:shadow-xl transition duration-300">
                              <h1 className="text-2xl text-center">Hujjatlarni taqdim etasiz</h1>
                        </div>

                        <div className="bg-white rounded-2xl p-6 h-25 w-80 shadow-md hover:shadow-xl transition duration-300">
                              <h1 className="text-2xl text-center">Texnikani yetkazib berish bilan olasiz</h1>

                        </div>

                  </div>
                  <h1 className="text-3xl pl-32 py-15">Tez-tez beriladigan savollar</h1>

                 <div className="">
                   <div className="bg-white my-3 rounded-2xl ml-32 p-6 h-17 w-330 shadow-md hover:shadow-xl transition duration-300">
                        <h1 className="text-2xl pl-5">Muddatli to‘lovni rasmiy ish joyisiz rasmiylashtirish mumkinmi?</h1>
                  </div>
                  <div className="bg-white my-3 rounded-2xl ml-32 p-6 h-17 w-330 shadow-md hover:shadow-xl transition duration-300">
                        <h1 className="text-2xl pl-5">Rasmiylashtirish necha kun vaqt oladi?</h1>
                  </div>
                  <div className="bg-white my-3 rounded-2xl ml-32 p-6 h-17 w-330 shadow-md hover:shadow-xl transition duration-300">
                        <h1 className="text-2xl pl-5">Rasmiylashtirish uchun qanday hujjatlar kerak?</h1>
                  </div>
                  <div className="bg-white my-3 rounded-2xl ml-32 p-6 h-17 w-330 shadow-md hover:shadow-xl transition duration-300">
                        <h1 className="text-2xl pl-5">O‘zbekistonda kafolat bilan noutbukni qanday olish mumkin?</h1>
                  </div>
                  <div className="bg-white my-3 rounded-2xl ml-32 p-6 h-17 w-330 shadow-md hover:shadow-xl transition duration-300">
                        <h1 className="text-2xl pl-5">Muddatli to‘lovni muddatidan oldin yopish mumkinmi?</h1>
                  </div>
                 </div>


                  <Footer />
            </div>




      )
}