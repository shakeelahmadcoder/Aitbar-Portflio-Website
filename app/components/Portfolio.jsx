"use client";
import React, { useState, useEffect } from "react";
import Title from "./Title";
import Image from "next/image";
import { motion } from "framer-motion";
import axios from "axios";

export default function Portfolio({ text1 }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch portfolio items from API
  const fetchPortfolio = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/portfolio");
      setPortfolioData(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load portfolio");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  // Category handler
  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredData =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);

  return (
    <div id="portfolio" className="py-10">
      <Title text1={text1 || "Portfolio"} />

      {/* Filter Buttons */}
    <div className="buttons flex flex-wrap items-center justify-center gap-4 mb-10">
  {["All", "web", "app", "branding"].map((category) => (
    <motion.button
      key={category}
      onClick={() => handleFilter(category)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`px-6 transition-all duration-300 py-2 cursor-pointer 
        ${selectedCategory === category ? "bg-orange-col" : "bg-gray-col"} 
        text-white rounded-lg`}
    >
      {category === "web"
        ? "Web Design"
        : category === "app"
        ? "App Design"
        : category === "branding"
        ? "Branding"
        : "All"}
    </motion.button>
  ))}
</div>


      {/* Loading / Error */}
      {loading && <p className="text-center text-white">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Portfolio Items */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {filteredData.map((item, index) => (
          <motion.div
            key={item._id || index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-lg cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.category || ""}
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
