import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Tambahdatamenu1() {
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    asal_sekolah: "",
    nomor_induk: "",
    rata_nilai: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/menu1",
        formData
      );

      console.log("Respon server:", response.data);
      Swal.fire({
        title: "Berhasil!",
        icon: "success",
      });

      setFormData({
        nama_lengkap: "",
        asal_sekolah: "",
        nik: "",
        rata_nilai: "",
      });

      navigate("/D");
    } catch (error) {
      console.error("Error saat menambahkan data:", error);
      Swal.fire({
        title: "Error!",
        text: "Terjadi kesalahan saat menambahkan data.",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="mr-12 bg-white p-8 rounded-lg shadow-2xl w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Tambah Data</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nama lengkap
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="nama_lengkap"
              value={formData.nama_lengkap}
              onChange={handleChange}
              placeholder="Nama lengkap"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Asal sekolah
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="asal_sekolah"
              value={formData.asal_sekolah}
              onChange={handleChange}
              placeholder="SMP/MTS"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              NIK
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="nomor_induk"
              value={formData.nomor_induk}
              onChange={handleChange}
              placeholder="Nomor Induk Kependudukan"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Rata Rata Nilai
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="rata_nilai"
              value={formData.rata_nilai}
              onChange={handleChange}
              placeholder="100"
              required
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {loading ? "Menambahkan..." : "Masuk"}
            </button>
            <Link
              to="/D"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Kembali
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Tambahdatamenu1;
