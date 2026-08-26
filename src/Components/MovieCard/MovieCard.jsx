import styles from "./MovieCard.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  console.log(movie);

  let genres = ["Adventure", "Action", "Thriller"];

  return (
    <div className={styles.cardWrapper}>
      {/* poster image */}
      <img
        className={styles.poster}
        src={`${IMAGE_BASE}${movie?.poster_path}`}
        alt="Poster Image"
      />

      {/* hover card */}
      <div className={styles.hoverCard}>
        {/* image */}
        <img
          className={styles.hoverImage}
          src={`${IMAGE_BASE}${movie?.poster_path}`}
          alt="Hover Image"
        />

        {/* <img
          className={styles.poster}
          src={movie?.poster_path}
          alt={movie?.title || "Poster Image"}
        /> */}
        
        {/* badge */}
        <div>Recently added</div>

        {/* button row */}
        <div>
          <FaCirclePlay
            className={styles.circleButton}
            color="white"
            size={40}
          />

          <BsPlusCircle
            className={styles.circleButton}
            color="white"
            size={40}
          />

          <GoCheckCircleFill
            className={styles.circleButton}
            color="white"
            size={40}
          />

          <IoIosArrowDropdownCircle
            className={styles.circleButtonSmall}
            color="white"
            size={40}
          />
        </div>

        {/* metadata row */}
        <div className={styles.metaRow}>
          <span className={styles.tag}>U/A 16+</span>
          <span className={styles.tag}>Movie</span>
          <span className={styles.tag}>HD</span>
        </div>

        {/* Genres */}
        <div className={styles.genres}>
          {genres.map((g, index) => (
            <span key={index}>
              {g}
              {index < genres.length - 1 && (
                <span className={styles.dot}>•</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
