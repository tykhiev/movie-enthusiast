import Link from "next/link";
import Image from "next/image";

export default function Movie({ title, id, poster_path, release_date }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <Link
        href={`/${id}?title=${title.replaceAll(
          " ",
          "-"
        )}&release_date=${release_date}`}
      >
        <h1>{title}</h1>
      </Link>
      <h2>{release_date}</h2>
      <Link
        href={`/${id}?title=${title.replaceAll(
          " ",
          "-"
        )}&release_date=${release_date}`}
      >
        <img src={imagePath + poster_path}></img>
      </Link>
    </div>
  );
}
