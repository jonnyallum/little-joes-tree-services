import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const dynamic = "force-static";

export async function GET() {
  try {
    const result = await cloudinary.search
      .expression(`folder:little-joes-gallery AND resource_type:image`)
      .sort_by("uploaded_at", "desc")
      .max_results(100)
      .execute();

    const images = result.resources.map((resource: any) => ({
      publicId: resource.public_id,
      url: resource.secure_url,
      uploadedAt: resource.uploaded_at,
    }));

    return Response.json({ images });
  } catch (error) {
    console.error("Failed to fetch gallery images:", error);
    return Response.json({ images: [], error: "Failed to fetch images" }, { status: 500 });
  }
}
