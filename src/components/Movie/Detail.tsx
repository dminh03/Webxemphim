import React from 'react';
interface MovieProps {
  movie?: {
    title: string;
    genre: string;
    duration: string;
    releaseDate: string;
    description?: string;
  };
}

const Detail: React.FC<MovieProps> = ({ movie }) => {
  if (!movie) return <div>No movie selected</div>;
  return (
    <div>
      <p className="text-lg font-semibold mb-2">Thể loại: {movie.genre}</p>
      <p className="text-lg font-semibold mb-2">Thời lượng: {movie.duration}</p>
      <p className="text-lg font-semibold mb-2">Khởi chiếu: {movie.releaseDate}</p>
      <p className="text-lg mb-4">Nội dung: {movie.description || 'Không có nội dung'}</p>
    </div>
  );
};
export default Detail;
