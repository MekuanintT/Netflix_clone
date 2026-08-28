import React, { useState, useEffect } from "react";
import NetflixBannerLogo from "../../image/logo.png";
import { Info, Play } from "lucide-react";
import style from "./Banner.module.css";
import MovieInstance from "../../../Utility/MovieInstance";
import Requests from "../../../Utility/requestUrls";

const BANNER_BASE = "https://image.tmdb.org/t/p/original";

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

  function truncate(string, n) {
    return string?.length > n ? string.slice(0, n - 1) + "..." : string;
  }

  return (
    <div
      className={style.banner}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: bannerImage?.backdrop_path
          ? `url("${BANNER_BASE}${bannerImage.backdrop_path}")`
          : "none",
      }}
    >
      <div className={style.contents}>
        {/* netflix image */}
        <img
          className={style.logoImg}
          src={NetflixBannerLogo}
          alt="Netflix logo"
        />
        {/* title */}
        <h1 className={style.title}>
          {bannerImage?.title ||
            bannerImage?.name ||
            bannerImage?.original_name}
        </h1>
        {/* description */}
        <h1 className={style.description}>
          {truncate(bannerImage?.overview, 120)}
        </h1>
        {/* buttons */}
        <div className={style.buttonContainer}>
          <button className={style.button}>
            <Play size={30} />
            Play
          </button>
          <button className={style.button}>
            <Info size={30} />
            My List
          </button>
        </div>
      </div>
      {/* fading */}
      <div className={style.fadeBottom}></div>
    </div>
  );
}

export default Banner;
