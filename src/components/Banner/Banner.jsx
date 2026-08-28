import React, { useState, useEffect } from "react";
import MovieInstance from "../../../Utility/MovieInstance";
import Requests from "../../../Utility/requestUrls";

function Banner() {
  const [bannerImage, setBannerImage] = useState({});

  useEffect(() => {
    async function fetchBannerImage() {
      try {
        const request = await MovieInstance.get(Requests.fetchNetflixOriginals);
        const results = request.data.results;
        if (results && results.length > 0) {
          setBannerImage(results[Math.floor(Math.random() * results.length)]);
        }
      } catch (error) {
        console.error("Error fetching banner image:", error);
      }
    }
    fetchBannerImage();
  }, []);

  return (
    <div>
      <p>
        {bannerImage?.title || bannerImage?.name || bannerImage?.original_name}
      </p>
    </div>
  );
}

export default Banner;
