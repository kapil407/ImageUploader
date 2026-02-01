import uploadImage from "../Utils/cloudinary.js";
import ImageModel from "../model/imageModel.js";

const FileUploaderController = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const url = await uploadImage(req.file.path, "image");

    const newImage = await ImageModel.create({
      image: url,
    });

    res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      data: newImage,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default FileUploaderController;
