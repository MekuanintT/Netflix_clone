import React from "react";
import NetflixBannerLogo from "../../image/logo.png";
import { Play, Info } from "lucide-react";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        {/*Netflix Banner*/}
        <img
          className={styles.logoImg}
          src={NetflixBannerLogo}
          alt="Netflix logo"
        />

        {/* title */}

        <h2 className={styles.title}>Bridgerton</h2>

        {/* desription */}

        <h4 className={styles.description}>
          Shondaland's Emmy-winning series brings Julia Quinn's novels to life,
          as eight siblings seek their perfect match amid London's scandals and
          soirees.
        </h4>

        {/* buttons */}

        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <Play size={30} />
            Play
          </button>
          <button className={styles.button}>
            <Info size={30} />
            My List
          </button>
        </div>
      </div>

      {/* fading */}

      <div className={styles.fadeBottom}></div>
    </div>
    // </div>
  );
}

export default Banner;
