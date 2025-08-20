import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },   // Cloudinary image URL
    category: { type: String, required: true } // e.g. web, app, branding
  },
  { timestamps: true } // createdAt, updatedAt auto
);

export default mongoose.models.Portfolio || mongoose.model("Portfolio", PortfolioSchema);
