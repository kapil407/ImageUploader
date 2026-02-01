import { useState } from "react";
import axios from "axios";

function App() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const UploadImage = async () => {
    try {
      if (!image) {
        console.log("no Image");
        return;
      }
      const formdata = new FormData();

      formdata.append("image", image);

      const res = await axios.post(
        "http://localhost:5500/uploadImage",
        formdata,
        {
          withCredentials: true,
        },
      );
      // console.log("first;", image);
      console.log("first", res);
      setUrl(res.data.data.image);
      console.log("url", url);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col">
        <h1>kapil</h1>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="border border-gray-200"
        />
        <button
          onClick={UploadImage}
          className="border border-gray-400 my-4 p-2 rounded"
        >
          upload{" "}
        </button>
        {url && <img src={url} className="h-50 object-cover " />}
      </div>
    </>
  );
}

export default App;
