import mongoose from "mongoose";
const Schema = new mongoose.Schema({
  image: { type: String, default: "" },
});
const ImageModel = new mongoose.model("ImageModel", Schema);
export default ImageModel;
