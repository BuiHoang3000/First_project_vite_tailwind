import MovieCard from './MovieCard';
import { Movie, moviesData } from './movieData';

function Trending() {
  return (
    <>
      <h3 className='border-b border-primary mt-12 mb-6 pb-4'>Trending</h3>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-10 mb-12'>
        {moviesData.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className='flex justify-center'>
        <button className='btn hover:scale-125 transition ease-out duration-500'>
          Load more
        </button>
      </div>
    </>
  );
}

export default Trending;
