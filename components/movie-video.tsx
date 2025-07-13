import { API_URL } from "../app/(home)/page";
import style from "../style/movie-video.module.css";
async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`, {
    cache: "force-cache",
  });
  const json = await response.json();
  return json;
  // await new Promise((resove) => setTimeout(resove,5000));
  // throw new Error('Somting broke')
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  const YouTube = `https://www.youtube.com/embed`;
  return (
    <div className={style.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`${YouTube}/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title={video.name}
        />
      ))}
    </div>
  );
}
