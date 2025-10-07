import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function EditData() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama_lengkap: "",
    asal_sekolah: "",
    nomor_induk: "",
    rata_nilai: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/menu1/${id}`);
        const data = Array.isArray(res.data) ? res.data[0] : res.data;
        setFormData(data);
      } catch (err) {
        console.error("Gagal mengambil data:", err);
        Swal.fire("Error", "Gagal mengambil data!", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.put(`http://localhost:5000/menu1/${id}`, formData);
          Swal.fire("Saved!", "Data berhasil diupdate", "success");
          navigate("/D");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } catch (err) {
      console.error("Gagal mengupdate data:", err);
      Swal.fire("Error", "Gagal mengupdate data!", "error");
    }
  };

  if (loading)
    return <p className="text-center mt-10 text-xl font-semibold">Loading data...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="p-8 max-w-lg w-full bg-white shadow-2xl rounded-3xl border border-gray-200">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Edit Data</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="nama_lengkap" className="block text-gray-700 font-medium mb-2">
              Nama Lengkap
            </label>
            <input
              id="nama_lengkap"
              name="nama_lengkap"
              type="text"
              value={formData.nama_lengkap || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="asal_sekolah" className="block text-gray-700 font-medium mb-2">
              Asal Sekolah
            </label>
            <input
              id="asal_sekolah"
              name="asal_sekolah"
              type="text"
              value={formData.asal_sekolah || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="nomor_induk" className="block text-gray-700 font-medium mb-2">
              Nomor Induk
            </label>
            <input
              id="nomor_induk"
              name="nomor_induk"
              type="text"
              value={formData.nomor_induk || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="rata_nilai" className="block text-gray-700 font-medium mb-2">
              Rata-rata Nilai
            </label>
            <input
              id="rata_nilai"
              name="rata_nilai"
              type="number"
              value={formData.rata_nilai || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition"
            >
              Kembali
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditData;
