import React, { useEffect, useState } from "react";
import style from "./DisplayRow.module.css";
import SlideShow from "../SlideShow/SlideShow";
import MovieInstance from "../../Utility/MovieInstance";
import Requests from "../../Utility/requestUrls";

function DisplayRow() {
  const [movies, setMovies] = useState({
    trending: [],
    netflixOriginals: [],
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

      setMovies({
        trending: trendingRes.data.results,
        netflixOriginals: netflixRes.data.results,
        topRated: topRatedRes.data.results,
        action: actionRes.data.results,
        comedy: comedyRes.data.results,
        horror: horrorRes.data.results,
        romance: romanceRes.data.results,
        documentaries: docRes.data.results,
      });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div className={style.mainwrapper}>
      <SlideShow title="Suggested for You" movies={movies.trending} />
      <SlideShow title="Popular on Netflix" movies={movies.netflixOriginals} />
      <SlideShow title="Trending Now" movies={movies.trending} />
    </div>
  );
}

export default DisplayRow;