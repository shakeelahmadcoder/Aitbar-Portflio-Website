import { NextResponse } from "next/server";
import cloudinary from "@/lib/config/cloudinary";
import { connectDB } from "@/lib/config/db";
import PortfolioModel from "@/lib/models/PortfolioModel";

export async function GET() {
  await connectDB();
  const items = await PortfolioModel.find();
  return NextResponse.json(items, { status: 200 });
}

export async function POST(req) {
  try {
    await connectDB();
    const formData = await req.formData();
    const file = formData.get("image");
    const category = formData.get("category");

    if (!file || !category) {
      return NextResponse.json(
        { error: "Image and category are required" },
        { status: 400 }
      );
    }

    // file → buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Cloudinary upload promisified
    const uploadRes = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "portfolio" },
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
      stream.end(buffer);
    });

    // save db
    const newItem = await PortfolioModel.create({
      image: uploadRes.secure_url,
      category,
    });

    return NextResponse.json(
      { message: "Portfolio added successfully", data: newItem },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST error:", err);
    return NextResponse.json(
      { error: err.message || "Something went wrong" },
      { status: 500 }
    );
  }
}


export async function DELETE(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });
  const deleted = await PortfolioModel.findByIdAndDelete(id);
  return NextResponse.json(deleted ? { message: "Deleted" } : { error: "Not found" });
}

