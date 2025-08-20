"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa"; // Trash icon

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

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      await axios.delete(`/api/portfolio?id=${id}`);
      setProjects(projects.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete project");
    }
  };

  if (loading) return <p className="text-white text-center mt-10">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Portfolio List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p._id}
            className="bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transform transition relative"
          >
            <img
              src={p.image}
              alt={p.category}
              className="w-full h-48 object-cover rounded"
            />
            <div className="mt-2 flex items-center justify-between">
              <h3 className="text-lg font-semibold"><span className="px-2">Category:</span>{p.category}</h3>
              <button
                onClick={() => handleDelete(p._id)}
                className="flex items-center gap-2 cursor-pointer bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
                title="Delete Project"
              >
                <FaTrash className="text-white" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
