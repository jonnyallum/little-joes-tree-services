const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dhvkpkwh2',
  api_key: '535182452699653',
  api_secret: '3DAdMMPxDry4P0AzEL4paHSy9lg'
});

async function runTest() {
  try {
    console.log("Starting Cloudinary test...");
    const uploadResult = await cloudinary.uploader.upload("https://res.cloudinary.com/demo/image/upload/sample.jpg", {
      folder: "onboarding_test"
    });
    console.log("--- Upload Success ---");
    console.log("Secure URL: " + uploadResult.secure_url);
    console.log("Public ID: " + uploadResult.public_id);

    const details = await cloudinary.api.resource(uploadResult.public_id);
    console.log("--- Image Metadata ---");
    console.log("Width: " + details.width + "px");
    console.log("Height: " + details.height + "px");
    console.log("Format: " + details.format);
    console.log("File Size: " + details.bytes + " bytes");

    const transformedUrl = cloudinary.url(uploadResult.public_id, {
      fetch_format: 'auto',
      quality: 'auto',
      secure: true
    });

    console.log("--- Transformation Success ---");
    console.log("Done! Click link below to see optimized version of the image. Check the size and the format.");
    console.log("Transformed URL: " + transformedUrl);
  } catch (error) {
    console.error("--- Error ---");
    console.error(error);
    process.exit(1);
  }
}
runTest();
