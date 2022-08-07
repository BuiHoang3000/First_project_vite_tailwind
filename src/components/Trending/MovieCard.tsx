import PropTypes from 'prop-types';
import { BiTime } from 'react-icons/bi';
import { Movie } from './movieData';

function MovieCard({ movie }: { movie: Movie }) {
  // 0. Init
  const { src, title, main, runtime } = movie;

  return (
    <div className='card'>
      <img src={src} alt={title} className='w-full' />
      <div className='p-4 text-white'>
        <h4>{title}</h4>
        <p>{main}</p>
      </div>
      <div className='badge'>
        <BiTime />
        <p>{runtime}</p>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
