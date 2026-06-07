"use client";

import { useState, useEffect } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { Upload, Loader2, Image as ImageIcon } from "lucide-react";

interface GalleryImage {
  publicId: string;
  url: string;
  uploadedAt: string;
}

interface GalleryClientProps {
  isAdmin?: boolean;
}

export function GalleryClient({ isAdmin = false }: GalleryClientProps) {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/gallery");
        if (response.ok) {
          const data = await response.json();
          setImages(data.images || []);
        }
      } catch (error) {
        console.error("Failed to fetch gallery images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  const [uploadError, setUploadError] = useState<string | null>(null);

  const isConfigured = 
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME && 
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME !== "placeholder" &&
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET &&
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET !== "placeholder";

  const handleUploadSuccess = (result: any) => {
    setIsUploading(false);
    setUploadError(null);
    const newImage: GalleryImage = {
      publicId: result.info?.public_id,
      url: result.info?.secure_url,
      uploadedAt: new Date().toISOString(),
    };
    setImages([newImage, ...images]);
  };

  const handleUploadError = (error: any) => {
    setIsUploading(false);
    console.error("Upload error:", error);
    setUploadError("Upload failed. Please check your Cloudinary configuration.");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      {!isAdmin && (
        <div className="mb-12 text-center">
          <div className="inline-flex p-3 bg-emerald/10 rounded-full mb-4">
            <ImageIcon className="w-8 h-8 text-emerald" />
          </div>
          <h1 className="text-4xl font-bold text-forest mb-4 italic">Our Work</h1>
          <p className="text-lg text-bone-600 max-w-2xl mx-auto">
            Real jobs, real results. See our tree surgery, stump grinding, and garden clearance work across Hampshire.
          </p>
        </div>
      )}

      {/* Admin Upload Section */}
      {isAdmin && (
        <div className="mb-12 bg-white rounded-xl shadow-card p-8 max-w-2xl mx-auto border border-emerald/10">
          <h2 className="text-2xl font-bold text-forest mb-2">Upload New Photos</h2>
          <p className="text-bone-600 mb-6">Add recent job photos to the public gallery.</p>
          
          {!isConfigured ? (
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm">
              <p className="font-bold mb-1">Cloudinary Not Connected</p>
              <p>The upload feature requires a real Cloudinary account. Please update your environment variables with your Cloud Name and Upload Preset.</p>
              <p className="mt-2 text-xs opacity-75">See GALLERY_SETUP.md for instructions.</p>
            </div>
          ) : (
            <>
              <CldUploadWidget
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                onSuccess={handleUploadSuccess}
                onError={handleUploadError}
                onUpload={() => setIsUploading(true)}
                options={{
                  maxFiles: 5,
                  clientAllowedFormats: ["jpg", "png", "webp", "jpeg"],
                  maxFileSize: 10000000, // 10MB
                }}
              >
                {({ open }) => (
                  <button
                    onClick={() => {
                      setUploadError(null);
                      open();
                    }}
                    disabled={isUploading}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-emerald text-white font-semibold rounded-lg hover:shadow-glow-emerald transition-all disabled:opacity-50"
                  >
                    {isUploading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="w-5 h-5" />
                        Select Photos to Upload
                      </>
                    )}
                  </button>
                )}
              </CldUploadWidget>
              {uploadError && (
                <p className="mt-3 text-sm text-red-500 text-center font-medium">{uploadError}</p>
              )}
            </>
          )}
          <p className="text-xs text-bone-400 mt-4 text-center">
            Tip: You can select multiple photos at once.
          </p>
        </div>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading ? (
          <div className="col-span-full flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-emerald mb-4" />
            <p className="text-bone-500">Loading gallery...</p>
          </div>
        ) : images.length > 0 ? (
          images.map((image) => (
            <div
              key={image.publicId}
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-lift transition-all duration-500 bg-white p-2"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <CldImage
                  src={image.publicId}
                  alt="Little Joe's Tree Services job photo"
                  width={600}
                  height={450}
                  crop="fill"
                  gravity="auto"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 bg-white rounded-2xl border-2 border-dashed border-bone-200">
            <ImageIcon className="w-12 h-12 text-bone-300 mx-auto mb-4" />
            <p className="text-bone-600 text-lg">The gallery is currently being updated.</p>
            {isAdmin && <p className="text-emerald font-medium mt-2">Upload your first photo above!</p>}
          </div>
        )}
      </div>
    </div>
  );
}
