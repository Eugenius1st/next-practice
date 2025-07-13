import { Suspense } from "react";
import MovieDetail from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-video";
import { getMovie } from "../../../../components/movie-info";
import type { Metadata } from "next";

// ✅ 이렇게 타입 생략
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

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
