import axios from "axios";
import { fetchGalleryRes } from "../types/interfaces.ts";

const ACCESS_KEY = "nmhPE71YqCaYteLOWPClHQxpvH66TokAO6AvdI8ZrOY";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common = {
  Authorization: `Client-ID ${ACCESS_KEY}`,
  "Accept-Version": "v1",
};
axios.defaults.params = {
  per_page: 8,
  orientation: "landscape",
};

const fetchGallery = async (
  query: string,
  page: number
): Promise<fetchGalleryRes> => {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      page,
    },
  });

  return response.data;
};

export default fetchGallery;
