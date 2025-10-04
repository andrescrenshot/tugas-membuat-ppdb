import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/Logo.jpg";
import Suki from "../../public/merah.jpg";
import tkj from "../../public/tkj.jpg";
import tsm from "../../public/tsm.jpg";
import akl from "../../public/akl.jpg";
import tatab from "../../public/tb.jpg";

const Homepage = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleclick = () => {
    setShow(!show);
    console.log(show);
  };
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
    <div className={`Navbar w-full transition-all bg-black ${scrollActive}` } style={{ backgroundImage: 
    "url('https://i.pinimg.com/736x/34/ae/b3/34aeb36d61ed683fe5b395378cfc4014.jpg')" }}>
      
      <div className="mx-auto px-4 shadow bg-sky-300">
        <div className="navbar-box flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="w-13 h-13 object-contain" />
            <div>
              <h1 className="sm:text-2xl text-xl text-2xl font-bold ">
                SMK BINA NUSANTARA
              </h1>
            </div>
          </div>

          <div className="social flex items-center gap-2">
            <a
              href=""
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
      <div className="mt-10 px-6 flex flex-col items-center">
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-xl w-full">
          <h2 className="text-2xl font-bold text-gray-800">
            Selamat datang di{" "}
            <span className="text-sky-500">SMK BINA NUSANTARA</span>
          </h2>
          <img
            src={Suki}
            alt="Logo1"
            className="mx-auto mt-4 w-50 rounded-lg shadow-md"
          />
          <p className="mt-4 text-gray-600 leading-relaxed ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
            tempore doloremque aliquam ad non qui facilis, aut eos, reiciendis
            voluptas magni earum laboriosam sed esse fugiat ea pariatur fuga
            inventore.
          </p>
          <div className="mt-6">
            <Link
              to="/V"
              className="px-6 py-2 bg-sky-500 text-white rounded-lg shadow hover:bg-sky-600 transition duration-300"
            >
              Daftar
            </Link>
          </div>
        </div>
          <div className="text-white shadow-sm">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ut non odit, quas</p>
          </div>
        <div className="py-10 px-10 h-90">
          <p className=" bg-gray-300 shadow-lg p-10 rounded-2xl">
            Mengisi formulir pendaftaran secara online/offline.
            <br /> Fotokopi Kartu Keluarga (KK) dan menunjukkan aslinya. <br />{" "}
            Fotokopi Akte Kelahiran.
            <br /> Pas foto terbaru ukuran 3×4 (4 lembar)
            <br /> Fotokopi KTP orang tua/wali.
            <br /> Bukti kelulusan dari sekolah asal (SKL/Ijazah).
            <br /> Nilai rapor semester tertentu (misalnya kelas 4–6 SD untuk
            masuk SMP, atau kelas 7–9 SMP untuk masuk SMA/SMK).
            <br /> Fotokopi Ijazahb atau Surat Keterangan Lulus (SKL) dari
            sekolah asal.
            <br /> Fotokopi SHUN/Rapor (semester terakhir sesuai jenjang).
            Fotokopi Kartu NISN (Nomor Induk Siswa Nasional).
            <br /> Fotokopi Kartu BPJS/KIS (kadang diminta untuk data
            kesehatan).
            <br /> Surat Keterangan Sehat dari Puskesmas/RS (beberapa sekolah
            menambahkan).
          </p>
        </div>
        <div className="services box pt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          <div className="box bg-gray-400 rounded shadow p-4 mx-auto">
            <img src={tkj} alt="" />
            <i className="ri-number-1 text-white text-3xl"></i>
            <h3 className="text-xl font-bold text-white mt-6 mb-2">TKJ</h3>
            <p className="text-white text-base/loose">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              corporis delectus modi aliquid. Quam, ipsum.
            </p>
          </div>
          <div className="box bg-gray-400 rounded shadow p-4">
            <img src={tsm} alt="" />
            <i className="ri-number-2 text-white text-3xl"></i>
            <h3 className="text-xl font-bold text-white mt-6 mb-2">TSM</h3>
            <p className="text-white text-base/loose">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              corporis delectus modi aliquid. Quam, ipsum.
            </p>
          </div>
          <div className="box bg-gray-400 rounded shadow p-4">
            <img src={akl} alt="" />
            <i className="ri-number-3 text-white text-3xl"></i>
            <h3 className="text-xl font-bold text-white mt-6 mb-2">AKUTANSI</h3>
            <p className="text-white text-base/loose">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              corporis delectus modi aliquid. Quam, ipsum.
            </p>
          </div>
          <div className="box bg-gray-400 rounded shadow p-4 md:col-start-2">
            <img src={tatab} alt="" className="" />
            <i className="ri-number-3 text-white text-3xl"></i>
            <h3 className="text-xl font-bold text-white mt-6 mb-2">
              TATA BUASANA
            </h3>
            <p className="text-white text-base/loose">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              corporis delectus modi aliquid. Quam, ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
