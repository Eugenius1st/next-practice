import Movie from "../../components/movie";
import Link from "next/link";
import style from "../../style/home.module.css";
import { API_URL } from "../constants";
export const metadata = {
  title: "Home",
};

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL, { cache: "force-cache" });
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={style.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          id={movie.id}
        />
      ))}
    </div>
  );
}
