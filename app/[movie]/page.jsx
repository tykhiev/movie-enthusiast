// "use client";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US`
  );
  const res = await data.json();
  return res.results.map((movie) => ({
    movie: movie.id.toString(),
  }));
}
export default async function MovieDetails({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const detail = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}&language=en-US`
  );
  const res = await detail.json();
  console.log(res);
  return (
    <div>
      <h2 className="text-4xl">{res.title}</h2>
      <div className="flex items-center py-2 ">
        <h2 className="text-lg">Release Date: {res.release_date}</h2>
        <span className="text-sm bg-green-500 inline-block rounded-md my-2 mx-2 px-2 py-2">
          {res.status}
        </span>
      </div>
      <h2>Runtime: {res.runtime} minutes</h2>
      <br />
      <h2 className="text-sm bg-gray-500 inline-block rounded-md my-2 mx-2 px-2 py-2">
        Genre
      </h2>
      {res.genres.map((category, index) => (
        <span className="text-lg">
          {category.name}
          {index + 1 < res.genres.length ? ", " : ""}
        </span>
      ))}
      <br />
      <h2 className="text-sm text-black bg-yellow-500 inline-block rounded-md my-2 mx-2 px-2 py-2">
        Rating
      </h2>
      <span>{res.vote_average.toFixed(1)}/10 </span>
      <img
        src={imagePath + res.backdrop_path}
        className="my-12 w-full"
        priority
      />
      <p className="text-base">Description: {res.overview}</p>
    </div>
  );
}
