// "use client";

import Movie from "./Movie";
import Pagination from "./Pagination";

export default async function Home(props) {
  const { searchParams } = props;
  const page = searchParams.page ?? 1;

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
  );
  const res = await data.json();
  console.log(res);

  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
        {/* <Pagination currentPage={page} totalMovies={res.total_results} /> */}
      </div>
    </main>
  );
}
