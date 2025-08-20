"use client";
import { useState } from "react";
import { AiOutlineFileImage } from "react-icons/ai";
import axios from "axios";

export default function page() {
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category || !image) return setMsg("Category and Image required");

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("category", category);
      formData.append("image", image);

      const res = await axios.post("/api/portfolio", formData);
      if (res.status === 201) {
        setMsg("Portfolio added successfully!");
        setCategory("");
        setImage(null);
      }
    } catch (err) {
      console.error(err);
      setMsg(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-900 p-6 rounded-2xl shadow-lg space-y-6 text-white">
      <h2 className="text-2xl font-bold text-green-400">Add Portfolio</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Category Input */}
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 placeholder-gray-400 text-white focus:outline-green-400 focus:ring-2 focus:ring-green-500"
        />

        {/* Image Input */}
        <label className="flex items-center gap-2 p-3 rounded-lg bg-gray-800 cursor-pointer hover:bg-gray-700 transition">
          <AiOutlineFileImage className="text-green-400 text-2xl" />
          <span>{image ? image.name : "Choose Image"}</span>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="hidden"
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save"}
        </button>

        {/* Message */}
        {msg && <p className="text-center text-green-400">{msg}</p>}
      </form>
    </div>
  );
}
