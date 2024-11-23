  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import { Modal } from 'antd';
  import Detail from '../components/Movie/Detail'; 
  import logo from '../assets/images/movie.png';
  import '../assets/styles/Home.css';

  interface Movie {
    id: number;
    title: string;
    genre: string;
    duration: string;
    releaseDate: string;
    image: string;
    badge: string;
    rank: number;
    trailerUrl?: string;
    description?:string;
  }

  const MovieDetail: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    const movies: Movie[] = [
      {
        id: 2,
        title: 'VENOM: KÉO CUỐI',
        genre: 'Hành Động, Khoa Học Viễn Tưởng, Phiêu Lưu, Thần thoại',
        duration: '109 phút',
        releaseDate: '25-10-2024',
        image: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/r/s/rsz_vnm3_intl_online_1080x1350_tsr_01.jpg',
        badge: 'T13',
        rank: 2,
        trailerUrl: 'https://www.youtube.com/embed/I1q-jmvPNn0',
        description:'',
      },
      {
        id: 3,
        title: 'NGÀY XƯA CÓ MỘT CHUYỆN TÌNH',
        genre: 'Tình cảm',
        duration: '135 phút',
        releaseDate: '28-10-2024',
        image: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/_/s/_size_chu_n_nxcmct_main-poster_dctr_1_.jpg',
        badge: 'T18',
        rank: 3,
        trailerUrl: 'https://www.youtube.com/embed/qaeHlk0OXec',
        description:'',
      },
      {
        id: 4,
        title: 'THẦN DƯỢC',
        genre: 'Kinh dị',
        duration: '142 phút',
        releaseDate: '1-11-2024',
        image: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/o/f/official_poster_the_substance.jpg',
        badge: 'T16',
        rank: 4,
        trailerUrl: 'https://www.youtube.com/embed/zBIDSp17AOo',
        description:'',
      },
      {
        id: 5,
        title: 'TIẾNG GỌI CỦA OÁN HỒN',
        genre: 'Tình cảm',
        duration: '120 phút',
        releaseDate: '10-11-  2022',
        image: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/s/a/sana_let_me_hear_main_poster_1_.jpg',
        badge: 'T18',
        rank: 5,
        trailerUrl: 'https://www.youtube.com/embed/Z6362SLEHXA',
        description:'',
      },
      {
        id: 6,
        title: 'THIÊN ĐƯỜNG QUẢ BÁO',
        genre: 'Tâm Lý',
        duration: '135 phút',
        releaseDate: '28-10-2024',
        image: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/3/5/350x495-tdqb.jpg',
        badge: 'T18',
        rank: 6,
        trailerUrl: 'https://www.youtube.com/embed/dQscfm4U0MA',
        description:'',
      },
      {
        id: 7,
        title: 'VÙNG ĐẤT BỊ NGUYỀN RỦA',
        genre: 'Kinh dị, Tâm lý ',
        duration: '135 phút',
        releaseDate: '28-10-2024',
        image: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/2/x/2x3_1_.jpg',
        badge: 'T16',
        rank: 7,
        trailerUrl: 'https://www.youtube.com/embed/gBsdijgRpl4',
        description:'',
      },
      {
        id: 8,
        title: 'VÂY HÃM TẠI ĐÀI BẮC',
        genre: 'Hành Động',
        duration: '135 phút',
        releaseDate: '3-11-2024',
        image: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/v/_/v_y_h_m_t_i_i_b_c_-_payoff_poster_1_.jpg',
        badge: 'T16',
        rank: 8,
        trailerUrl: 'https://www.youtube.com/embed/AfybuJ8zOAI',
        description:'',
      },
      {
        id: 9,
        title: 'TIÊN TRI TỬ THẦN',
        genre: 'Hồi hộp ',
        duration: '135 phút',
        releaseDate: '28-10-2024',
        image: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/3/5/350x495-tientri.jpg',
        badge: 'T16',
        rank: 9,
        trailerUrl: 'https://www.youtube.com/embed/new1kh3wnIA',
        description:'',
      }
    ];

    const showModal = (movie: Movie) => {
      setSelectedMovie(movie);
      setIsModalVisible(true);
    };

    const handleCloseModal = () => {
      setIsModalVisible(false);
      setSelectedMovie(null);
    };

    return (
      <div>
        <header className="bg-gray-800 p-4 fixed w-full top-0 z-10">
          <nav className="flex justify-between items-center max-w-6xl mx-auto">
            <a href="/" className="flex items-center">
              <img src={logo} alt="MOVEEK Logo" className="h-10 mr-2" />
            </a>
            <div className="space-x-5">
              <Link to="/address" className="text-white">Hệ Thống Rạp</Link>
              <Link to="#" className="text-white">Danh sách phim</Link>
              <Link to="/login" className="text-white">Đăng nhập</Link>
            </div>
          </nav>
        </header>
        <div className="max-w-screen-xl mx-auto">
        {/* Header */}       
        {/* Main Content */}
        <div className="p-16 mt-20">
          <h1 className="text-3xl font-bold mb-8">Phim Đang Chiếu</h1>
          <div className="grid grid-cols-4 gap-6">
            {movies.map((movie) => (
              <div key={movie.id} className="bg-white p-4 shadow-lg rounded-lg">
                <div className="relative">
                  <img src={movie.image} alt={movie.title} className="h-72 w-full object-cover rounded-t-lg" />
                  <span className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded">{movie.badge}</span>
                  <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full">{movie.rank}</span>
                </div>
                <h2 className="text-xl font-bold mt-4">{movie.title}</h2>
                <p className="text-md">Thể loại: {movie.genre}</p>
                <p className="text-md">Thời lượng: {movie.duration}</p>
                <p className="text-md">Khởi chiếu: {movie.releaseDate}</p>
                <div className="flex items-center gap-1 mt-4">
                  <button onClick={() => showModal(movie)} className="book-button">Review</button>
                  <button className="book-button">Đặt vé</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Modal hiển thị chi tiết */}
        <Modal
          title={selectedMovie?.title}
          open={isModalVisible}
          onCancel={handleCloseModal}
          footer={null}
          width={800}
        >
          {selectedMovie && <Detail movie={selectedMovie} />}
          {selectedMovie?.trailerUrl && (
            <div className="mt-4">
              <iframe
                width="100%"
                height="400"
                src={selectedMovie.trailerUrl}
                title="Movie Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          )}
        </Modal>
      </div>
      </div>
      
    );
  };

  export default MovieDetail;
