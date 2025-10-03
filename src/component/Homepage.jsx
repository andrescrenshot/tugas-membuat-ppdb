import { useEffect, useState } from "react";
import Logo from "../../public/Logo.jpg";
import Suki from "../../public/bubu.jpg";

const Homepage = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleclick = () => {
    setShow(!show);
    console.log(show);
  };

  let menuActive = show ? "left-0" : "-left-full";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        console.log("testing");
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    });
  });

  let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4";

  return (
    <div className={`Navbar w-full transition-all ${scrollActive}`}>
      <div className="container mx-auto px-4 shadow">
        <div className="navbar-box flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="w-13 h-13 object-contain" />
            <div>
              <h1 className="sm:text-2xl text-xl text-2xl font-bold ">
                SMK BINA NUSANTARA
              </h1>
            </div>
          </div>
          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full
              md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 ${menuActive} top-1/2
              -translate-y-1/2
              flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}
          >
            <li className="flex items-center gap-3">
              <li className="ri-home-smile-line text3xl md:hidden block"></li>
              <a href="#" className="font-medium opacity-75">
                Beranda{" "}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <li className="ri-information-line text3xl md:hidden block"></li>
              <a href="#" className="font-medium opacity-75">
                Daftar
              </a>
            </li>
            <li className="flex items-center gap-3">
              <li className="ri-settings-3-line text3xl md:hidden block"></li>
              <a href="#" className="font-medium opacity-75">
                Layanan
              </a>
            </li>

            <li className="flex items-center gap-3">
              <li className="ri-image-line text3xl md:hidden block"></li>
              <a href="#" className="font-medium opacity-75">
                Jurusan
              </a>
            </li>
          </ul>
          <div className="social flex items-center gap-2">
            <a
              href="#"
              className="bg-sky-400 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
            >
              Social Media
              <i
                className="ri-menu-line text-3xl md:hidden block"
                onClick={handleclick}
              ></i>
            </a>
          </div>
        </div>
      </div>
              <div className="mt-32 px-4">
                {/* mt-32 biar nggak ketutup navbar */}
                <img src={Suki} alt="SUKI" className="w-auto h-auto" />
                <p className="mt-6">
                  Ini konten setelah gambar. Tambah banyak text atau elemen lain agar
                  halaman bisa di-scroll. lore
                </p>
                <div className="h-[2000px]"></div
                >
              </div>
    </div>
  );
}; 

export default Homepage;
