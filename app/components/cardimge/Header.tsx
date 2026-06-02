import { FaSearch, FaPhone } from "react-icons/fa";

export default function Header() {
    return (
        <div className=" h-27 flex items-center justify-between px-10 py-4 shadow">

            {/* LOGO */}
            <h1 className="text-2xl font-bold text-blue-600">

            </h1>
            <img className="h-10 " src="https://nout.uz/wp-content/uploads/2025/03/logotype-nout-1.svg" alt="" />

            {/* SEARCH */}
            <div className=" bg-white flex items-center border rounded-lg overflow-hidden w-1/2 ">
                <input
                    type="text"
                    placeholder="Mahsulotlar Buyicha Qiduruv..."
                    className="w-full p-2 outline-none"
                />

                <button className=" text-black px-4 py-2 ">
                    <FaSearch />
                </button>
            </div>

            {/* PHONE */}
            <div className=" font-bold  h-10 rounded-full flex bg-blue-500 items-center gap-1 px-5 text-black">
                <FaPhone className="text-black" />
                <span className="  font-medium">Bizga Qung'roq Qiling</span>

            </div>

        </div>
    );
}