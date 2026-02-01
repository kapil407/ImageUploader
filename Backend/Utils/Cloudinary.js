import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
cloudinary.config({
  cloud_name: "deoyaxtmm",
  api_key: "697291349863127",
  api_secret: "UFa645Qqm4uYGUT3KRa94wp_ql0",
});
const uploadImage = async (imagePath, type = "image") => {
  try {
    // Upload the image
    console.log("firstImage,", imagePath);
    const result = await cloudinary.uploader.upload(imagePath, {
      resource_type: type,
    });
    console.log(result);
    fs.unlinkSync(imagePath);
    return result.secure_url;
  } catch (error) {
    fs.unlinkSync(imagePath);
    console.error(error);
  }
};
export default uploadImage;
