import { API_URL } from "../app/(home)/page";
import style from "../style/movie-info.module.css";
export async function getMovie(id: string) {
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}`, { cache: "force-cache" });
  const json = await response.json();
  return json;
}

export default async function MovieDetail({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={style.container}>
      <img className={style.poster} src={movie.poster_path} alt={movie.title} />
      <div className={style.info}>
        <h1 className={style.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(2)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.hompage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
  // return <h6>{JSON.stringify(movie)}</h6>;
}
