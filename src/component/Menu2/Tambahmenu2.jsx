import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Tambahdatamenu1() {
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    tempat_tanggal: "",
    nomor_induk: "",
    nomor_is: "",
    alamat_lengkap: "",
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
        "http://localhost:5000/menu2",
        formData
      );

      console.log("Respon server:", response.data);
      Swal.fire({
        title: "Berhasil!",
        icon: "success",
      });

      setFormData({
        nama_lengkap: "",
        tempat_tanggal: "",
        nomor_induk: "",
        nomor_is: "",
        alamat_lengkap: "",
        rata_nilai: "",
      });

      navigate("/S");
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
              Nama Lengkap
            </label>
            <input
              type="text"
              name="nama_lengkap"
              value={formData.nama_lengkap}
              onChange={handleChange}
              placeholder="Nama lengkap"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tempat & Tanggal Lahir
            </label>
            <input
              type="text"
              name="tempat_tanggal"
              value={formData.tempat_tanggal}
              onChange={handleChange}
              placeholder="Contoh: Jakarta, 01-01-2010"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nomor Induk / NIK
            </label>
            <input
              type="text"
              name="nomor_induk"
              value={formData.nomor_induk}
              onChange={handleChange}
              placeholder="Nomor Induk Kependudukan"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nomor NISN
            </label>
            <input
              type="text"
              name="nomor_is"
              value={formData.nomor_is}
              onChange={handleChange}
              placeholder="Nomor Induk Siswa Nasional"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>


          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Alamat Lengkap
            </label>
            <input
              type="text"
              name="alamat_lengkap"
              value={formData.alamat_lengkap}
              onChange={handleChange}
              placeholder="Alamat lengkap"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Rata-rata Nilai
            </label>
            <input
              type="number"
              name="rata_nilai"
              value={formData.rata_nilai}
              onChange={handleChange}
              placeholder="100"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              to="/S"
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
