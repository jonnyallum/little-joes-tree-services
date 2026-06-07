# 📸 Gallery & Upload Setup Guide

This website uses **Cloudinary** to handle photo uploads and storage. This allows Joe to upload photos directly from his phone while on a job, and they will appear instantly on the website without needing to redeploy or touch any code.

## 1. Create a Cloudinary Account
1. Go to [Cloudinary.com](https://cloudinary.com/) and sign up for a **Free** account.
2. Once logged in, go to your **Dashboard**.
3. Note down your **Cloud Name**.

## 2. Create an Upload Preset
1. In Cloudinary, click the **Settings** (gear icon) in the bottom left.
2. Go to **Upload** > **Upload presets**.
3. Click **Add upload preset**.
4. Set a name (e.g., `little_joes_preset`).
5. **CRITICAL:** Set **Signing Mode** to `Unsigned`.
6. Set **Folder** to `little-joes-gallery` (this keeps your photos organized).
7. Click **Save**.

## 3. Connect to the Website
Update the following variables in your deployment settings (or `.env.local` for local testing):

- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`: Your Cloud Name from Step 1.
- `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`: Your Preset Name from Step 2.
- `NEXT_PUBLIC_ADMIN_PASSWORD`: Set a secure password for Joe to access the `/admin` page.

## 4. Bulletproof Security (Recommended)
To ensure only your website can upload photos:
1. In Cloudinary Settings, go to **Security**.
2. Under **Allowed referrers**, add your website's domain (e.g., `littlejoestreeservices.co.uk`).
3. This prevents anyone from using your credentials from a different website.

## 5. How Joe Uploads Photos
1. Joe goes to `yourdomain.co.uk/admin`.
2. He enters the password you set.
3. He taps **Select Photos to Upload**.
4. He selects photos from his phone's camera roll.
5. Once uploaded, they appear instantly on the `/gallery` page!
