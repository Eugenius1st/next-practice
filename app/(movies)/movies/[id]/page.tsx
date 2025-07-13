import { Suspense } from "react";
import MovieDetail from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-video";
import { getMovie } from "../../../../components/movie-info";
interface IParamas {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParamas) {
  const movie = await getMovie(id); // 영화 정보를 불러오기 위해 API 를 부르면 안좋은가? -> 최신버전은 fetch한번하면 캐싱된 응답을 받아서 괜찮다 ㅎㅎ
  return {
    title: movie.title,
  };
}

export default function MovieId({ params: { id } }) {
  // const { id } = await params;

  return (
    <div>
      <Suspense fallback={<h1>Loading Movie Info</h1>}>
        <MovieDetail id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie Video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
