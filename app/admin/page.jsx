"use client";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { FiLogOut } from "react-icons/fi"; // Logout icon

export default function page() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/portfolio");
      setProjects(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const categories = [...new Set(projects.map((p) => p.category))];

  return (
    <div className="p-6 text-white space-y-6">
      {/* Top bar with Logout + icon */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Welcome, Admin 👋</h2>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          <FiLogOut className="text-white" />
          Logout
        </button>
      </div>

     {/* Stats boxes */}
<div className="flex flex-col sm:flex-row gap-4">
  <div className="bg-blue-600 flex-1 p-6 rounded-xl shadow flex flex-col items-center justify-center min-h-[140px]">
    <h3 className="text-lg font-semibold sm:text-xl">Total Items</h3>
    <p className="text-2xl sm:text-3xl font-bold mt-2">{projects.length}</p>
  </div>
  <div className="bg-green-600 flex-1 p-6 rounded-xl shadow flex flex-col items-center justify-center min-h-[140px]">
    <h3 className="text-lg font-semibold sm:text-xl">Categories</h3>
    <p className="text-2xl sm:text-3xl font-bold mt-2">{categories.length}</p>
  </div>
</div>


      

      {/* Recent projects preview */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Recent Projects</h3>
        {loading && <p className="text-center text-white">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p._id} className="bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transform transition">
                <img
                  src={p.image}
                  alt={p.category}
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="mt-2 text-lg font-semibold">{p.category}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
