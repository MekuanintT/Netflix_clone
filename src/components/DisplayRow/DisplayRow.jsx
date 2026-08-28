import React, { useEffect } from "react";
import style from "./DisplayRow.module.css";
import SlideShow from "../SlideShow/SlideShow";
import MovieInstance from "../../Utility/MovieInstance";
import Requests from "../../Utility/RequestUrls";
function DisplayRow() {
  const [movies, setMovies] = Rteact.usestate({
    trending: [],
    netflix0riginals: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: [],
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const [
        trendingRes,
        netflixRes,
        topRatedRes,
        actionRes,
        comedyRes,
        horrorRes,
        romanceRes,
        docRes,
      ] = await Promise.all([
        MovieInstance.get(Requests.fetchTrending),
        MovieInstance.get(Requests.fetchNetflixOriginals),
        MovieInstance.get(Requests.fetchTopRatedMovies),
        MovieInstance.get(Requests.fetchActionMovies),
        MovieInstance.get(Requests.fetchComedyMovies),
        MovieInstance.get(Requests.fetchHorrorMovies),
        MovieInstance.get(Requests.fetchRomanceMovies),
        MovieInstance.get(Requests.fetchDocumentaries),
      ]);

      // Add your code to handle the responses here
    } catch (error) {
      console.error("Error fetching movies:", error);
    }

    return (
      <div className={style.mainwrapper}>
        <SlideShow title="Suggested for You" movies={movies.trending} />
        <SlideShow
          title="Popular on Netflix"
          movies={movies.netflixOriginals}
        />
        <SlideShow title="Trending Now" movies={movies.trending} />
        <SlideShow title="Top Rated" movies={movies.topRated} />
      </div>
    );
  };
}
export default DisplayRow;
