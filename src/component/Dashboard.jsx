import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidnav from "./Sidnav";
import Swal from "sweetalert2";

// Form tambah siswa
const TambahDataForm = ({ onAdd }) => {
  const [nama, setNama] = useState("");
  const [asalSekolah, setAsalSekolah] = useState("");
  const [nik, setNik] = useState("");
  const [nilai, setNilai] = useState("");
  const [jalur, setJalur] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nama || !asalSekolah || !nik || !nilai || !jalur) return;

    const newData = {
      nama_lengkap: nama,
      asal_sekolah: asalSekolah,
      nomor_induk: nik,
      Rata_Nilai: nilai,
      Jalur_Prestasi: jalur,
    };

    try {
      const res = await axios.post("http://localhost:5000/siswa", newData);
      onAdd(res.data);
      setNama("");
      setAsalSekolah("");
      setNik("");
      setNilai("");
      setJalur("");
    } catch (err) {
      console.error("Gagal menambah data:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-4 bg-gray-100 rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold mb-4">Tambah Siswa</h2>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Asal Sekolah"
          value={asalSekolah}
          onChange={(e) => setAsalSekolah(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="NIK"
          value={nik}
          onChange={(e) => setNik(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <input
          type="number"
          placeholder="Rata-rata Nilai"
          value={nilai}
          onChange={(e) => setNilai(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Jalur"
          value={jalur}
          onChange={(e) => setJalur(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Tambah
        </button>
      </div>
    </form>
  );
};

// Tabel data siswa
const TabelData = ({ data, onDelete, onEdit }) => {
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    nama_lengkap: "",
    asal_sekolah: "",
    nomor_induk: "",
    Rata_Nilai: "",
    Jalur_Prestasi: "",
  });

  const handleEditClick = (item) => {
    setEditId(item.id);
    setEditData(item);
  };

  const handleSave = () => {
    onEdit(editId, editData);
    setEditId(null);
  };

  return (
    <div className="overflow-x-auto bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-gray-200">
      <table className="min-w-full text-sm text-left text-gray-800">
        <thead className="bg-gradient-to-r from-sky-500 to-blue-400 text-white uppercase text-xs">
          <tr>
            <th className="px-4 py-3">No</th>
            <th className="px-4 py-3">Nama</th>
            <th className="px-4 py-3">Asal Sekolah</th>
            <th className="px-4 py-3">NIK</th>
            <th className="px-4 py-3">Rata-rata Nilai</th>
            <th className="px-4 py-3">Jalur</th>
            <th className="px-4 py-3 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr
                key={item.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-sky-50 transition`}
              >
                <td className="px-4 py-3 border-t">{index + 1}</td>

                {/* Jika sedang edit */}
                {editId === item.id ? (
                  <>
                    <td className="px-4 py-3 border-t">
                      <input
                        type="text"
                        value={editData.nama_lengkap}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            nama_lengkap: e.target.value,
                          })
                        }
                        className="p-1 border rounded w-full"
                      />
                    </td>
                    <td className="px-4 py-3 border-t">
                      <input
                        type="text"
                        value={editData.asal_sekolah}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            asal_sekolah: e.target.value,
                          })
                        }
                        className="p-1 border rounded w-full"
                      />
                    </td>
                    <td className="px-4 py-3 border-t">
                      <input
                        type="text"
                        value={editData.nomor_induk}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            nomor_induk: e.target.value,
                          })
                        }
                        className="p-1 border rounded w-full"
                      />
                    </td>
                    <td className="px-4 py-3 border-t">
                      <input
                        type="number"
                        value={editData.Rata_Nilai}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            Rata_Nilai: e.target.value,
                          })
                        }
                        className="p-1 border rounded w-full"
                      />
                    </td>
                    <td className="px-4 py-3 border-t">
                      <input
                        type="text"
                        value={editData.Jalur_Prestasi}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            Jalur_Prestasi: e.target.value,
                          })
                        }
                        className="p-1 border rounded w-full"
                      />
                    </td>
                    <td className="px-4 py-3 border-t text-center space-x-2">
                      <button
                        onClick={handleSave}
                        className="bg-green-500 text-white px-3 py-1 rounded"
                      >
                        Simpan
                      </button>
                      <button
                        onClick={() => setEditId(null)}
                        className="bg-gray-400 text-white px-3 py-1 rounded"
                      >
                        Batal
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-4 py-3 border-t">{item.nama_lengkap}</td>
                    <td className="px-4 py-3 border-t">{item.asal_sekolah}</td>
                    <td className="px-4 py-3 border-t">{item.nomor_induk}</td>
                    <td className="px-4 py-3 border-t">{item.Rata_Nilai}</td>
                    <td className="px-4 py-3 border-t">{item.Jalur_Prestasi}</td>
                    <td className="px-4 py-3 border-t text-center space-x-2">
                      <button
                        onClick={() => handleEditClick(item)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(item.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Hapus
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="text-center py-6 text-gray-500 italic">
                Tidak ada data.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Dashboard utama
const Dashboard = () => {
  const [dataSiswa, setDataSiswa] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/siswa");
      setDataSiswa(res.data);
    };
    fetchData();
  }, []);

  const handleTambahData = (newData) => {
    setDataSiswa((prev) => [...prev, newData]);
  };

  const handleDelete = async (id) => {
    const konfirmasi = await Swal.fire({
      title: "Yakin hapus?",
      text: "Data ini akan dihapus permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    });

    if (konfirmasi.isConfirmed) {
      await axios.delete(`http://localhost:5000/siswa/${id}`);
      setDataSiswa((prev) => prev.filter((item) => item.id !== id));
      Swal.fire("Terhapus!", "Data berhasil dihapus.", "success");
    }
  };

  const handleEdit = async (id, updatedData) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/siswa/${id}`,
        updatedData
      );
      setDataSiswa((prev) =>
        prev.map((item) => (item.id === id ? res.data : item))
      );
      Swal.fire("Berhasil!", "Data berhasil diperbarui.", "success");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard Siswa</h1>
      <div className="flex gap-6">
        <div className="w-64">
          <Sidnav />
        </div>
        <div className="flex-1">
          <TambahDataForm onAdd={handleTambahData} />
          <TabelData
            data={dataSiswa}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
