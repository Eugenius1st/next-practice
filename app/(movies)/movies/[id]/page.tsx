import { Suspense } from "react";
import MovieDetail from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-video";
import { getMovie } from "../../../../components/movie-info";
import type { Metadata } from "next";
type Props = {
  params: {
    id: string;
  };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const movie = await getMovie(params.id);
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
