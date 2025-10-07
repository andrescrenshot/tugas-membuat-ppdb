import React, { useState } from "react";''
import Sidnav from "./Sidnav"

const TambahDataForm = ({ onAdd }) => {
  const [nama, setNama] = useState("");
  const [asalSekolah, setAsalSekolah] = useState("");
  const [nik, setNik] = useState("");
  const [nilai, setNilai] = useState("");
  const [jalur, setjalur] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !asalSekolah || !nik || !nilai) return;

    onAdd({
        id: Date.now(),
        nama_lengkap: nama,
        asal_sekolah: asalSekolah,
        nomor_induk: nik,
        Rata_Nilai: nilai,
        jalur: jalur,
    });
    
    setNama("");
    setAsalSekolah("");
    setNik("");
    setNilai("");
    setjalur("");
};

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Dasboard Siswa</h2>
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
          type="jalur"
          placeholder="Jalur"
          value={nilai}
          onChange={(e) => setjalur(e.target.value)}
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

const TabelData = ({ data }) => {
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
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr
              key={item.id}
              className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-sky-50 transition`}
              >
                <td className="px-4 py-3 border-t">{index + 1}</td>
                <td className="px-4 py-3 border-t">{item.nama_lengkap}</td>
                <td className="px-4 py-3 border-t">{item.asal_sekolah}</td>
                <td className="px-4 py-3 border-t">{item.nomor_induk}</td>
                <td className="px-4 py-3 border-t">{item.Rata_Nilai}</td>
                <td className="px-4 py-3 border-t">{item.jalur}</td>
              </tr>
            ))
        ) : (
            <tr>
              <td colSpan={5} className="text-center py-6 text-gray-500 italic">
                Tidak ada data.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};


const Dashboard = () => {
  const [dataSiswa, setDataSiswa] = useState([]);

  const handleTambahData = (newData) => {
    setDataSiswa((prev) => [...prev, newData]);
  };

  return (
    <div className="p-8 max-w-7xl">
      <h1 className="text-3xl font-bold mb-6">Dashboard Siswa</h1>
      <div className="flex gap-6">
        <div className="w-64">
          <Sidnav />
        </div>
        <div className="flex-1">
          <TambahDataForm onAdd={handleTambahData} />
          <TabelData data={dataSiswa} />
        </div>
      </div>
    </div>
  );
};


export default Dashboard;
