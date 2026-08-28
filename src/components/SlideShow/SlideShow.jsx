import React from "react";
import styles from "./SlideShow.module.css";
import MovieCard from "../MovieCard/MovieCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function SlideShow({ title, movies }) {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.Row}>
       <Swiper
  modules={[Navigation]}
  navigation
  spaceBetween={10}
  slidesPerView={5.8} // fallback / mobile-first default
  breakpoints={{
    // mobile
    320: {
      slidesPerView: 1,
      spaceBetween: 6,
    },
    // small tablets
    640: {
      slidesPerView: 1.5,
      spaceBetween: 8,
    },
    // tablets / small laptops
    1024: {
      slidesPerView: 4,
      spaceBetween: 8,
    },
    // laptops
    1380: {
       slidesPerView: 4.7,
      spaceBetween: 12,
    },
    // large monitors
    1700: {
      slidesPerView: 5.3,
      spaceBetween:16,
    },
  }}
>
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideShow;
