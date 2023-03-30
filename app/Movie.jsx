import Link from "next/link";

export default function Movie({ title, id, poster_path, release_date }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const newTitle = (title) => {
    const maxLength = 50;
    const fontSize = title.length > maxLength ? "text-base" : "text-2xl";
    return <h2 className={fontSize}>{title}</h2>;
  };
  return (
    <div>
      <Link href={`/${id}?title=${title.replaceAll(" ", "-")}`}>
        <img src={imagePath + poster_path}></img>
      </Link>
      <Link
        className="text-2xl underline"
        href={`/${id}?title=${title.replaceAll(" ", "-")}`}
      >
        {newTitle(title)}
      </Link>
      <h2>{release_date}</h2>
    </div>
  );
}
