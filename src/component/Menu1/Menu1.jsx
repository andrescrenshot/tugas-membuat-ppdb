import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Siswa = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/menu");
        setData(res.data);
      } catch (err) {
        console.error("Gagal mengambil data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Yakin ingin menghapus data ini?",
      text: "Data yang dihapus tidak bisa dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5000/menu/${id}`);
          setData((prev) => prev.filter((item) => item.id !== id));

          Swal.fire({
            title: "Terhapus!",
            text: "Data berhasil dihapus.",
            icon: "success",
          });
        } catch (err) {
          console.error("Gagal menghapus data:", err);
          Swal.fire({
            title: "Gagal!",
            text: "Terjadi kesalahan saat menghapus data.",
            icon: "error",
          });
        }
      }
    });
  };

  if (loading)
    return (
      <p className="text-gray-600 text-center mt-10 animate-pulse">
        Loading data siswa...
      </p>
    );

  return (
    <div className="overflow-x-auto mt-4 bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-gray-200">
      <table className="min-w-full text-sm text-left text-gray-800">
        <thead className="bg-gradient-to-r from-sky-500 to-blue-400 text-white uppercase text-xs">
          <tr>
            <th className="px-4 py-3">No</th>
            <th className="px-4 py-3">Nama</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Jurusan</th>
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
                <td className="px-4 py-3 border-t font-medium">
                  {item.Nama}
                </td>
                <td className="px-4 py-3 border-t">{item.Email}</td>
                <td className="px-4 py-3 border-t">{item.Jurusan}</td>
                <td className="px-4 py-3 border-t text-center space-x-2">
                  <button
                    onClick={() => navigate(`/edit/${item.id}`)}
                    className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow-sm hover:shadow transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 shadow-sm hover:shadow transition"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                className="text-center py-6 text-gray-500 italic"
              >
                Tidak ada data siswa.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

function Datauser() {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-gradient-to-r from-sky-400 to-blue-500 text-white p-4 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold tracking-wide">
          🙄 Daftar Siswa
        </h2>
        <button
          onClick={() => navigate("/")}
          className="mt-3 sm:mt-0 px-5 py-2 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 shadow transition"
        >
          + Tambah Data
        </button>
      </div>

      {/* Table */}
      <Siswa />
    </div>
  );
}

export default Datauser;
