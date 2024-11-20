import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'antd';
import logo from '../assets/images/movie.png';
import hot from '../assets/images/hot.jpg';
import cdhm from '../assets/images/cdhm.jpg';
import red1 from '../assets/images/red1.jpg';
import love from '../assets/images/love.jpg';
import "../assets/styles/Home.css"
interface Movie {
  title: string;
  genre: string;
  duration: string;
  description: string;
  trailerLink: string
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const backgrounds = [
    'https://media.lottecinemavn.com/Media/WebAdmin/19da1f921bbd4c0c9c8d63c79f8c55a3.png',
    'https://media-cdn-v2.laodong.vn/storage/newsportal/2024/1/10/1291012/Phim-Mai-8.jpg',
    'https://media.lottecinemavn.com/Media/WebAdmin/95627345602649a0a2e6c1c99eba81c3.jpg',
    'https://media.lottecinemavn.com/Media/MovieFile//MovieImg/202410/11188_105_100003.jpg',
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + backgrounds.length) % backgrounds.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);
  
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const showModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
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
            <Link to="/movie-detail" className="text-white">Danh sách phim</Link>
            <a href="#" onClick={() => navigate('/login')} className="text-white">
              Đăng nhập
            </a>
          </div>
        </nav>
      </header>
      <section
        className="hero-section bg-cover bg-center h-96 mt-16 relative"
        style={{ backgroundImage: `url(${backgrounds[currentIndex]})` }}
      >        
        <button onClick={prevSlide} className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white px-3 py-1 rounded-full">
          &#10094;
        </button>
        <button onClick={nextSlide} className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white px-3 py-1 rounded-full">
          &#10095;
        </button>
      </section>
<div className="max-w-screen-xl mx-auto  ">
      {/* Header */}
      
      {/* Hero Section */}
      

      {/* Movies Section */}
      <section className="max-w-6xl mx-auto my-10 p-4">
        <div className="flex items-center justify-center mb-4">
          <img src={hot} alt="Logo" className="h-8 w-8 mr-2" />
          <h2 className="text-2xl font-bold">Phim Hot</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Movie Card 1 */}
          <div className="movie-card">
            <img src={cdhm} alt="Movie 1" className="movie-image" />
            <div className="movie-info">
              <h3 className="movie-title">CÔ DÂU HÀO MÔN</h3>
              <p className="movie-genre">Thể loại: Tình Cảm</p>
              <p className="movie-duration">Thời lượng: 122 phút</p>
              <div className="flex gap-6">
                <button className="book-button">Đặt vé</button>
                <button
                  className="book-button"
                  onClick={() => showModal({
                    title: 'CÔ DÂU HÀO MÔN',
                    genre: 'Tình Cảm',
                    duration: '122 phút',
                    description: 'Đây là mô tả chi tiết về phim CÔ DÂU HÀO MÔN...',
                    trailerLink: 'https://www.youtube.com/embed/QJ8E9R70csY',
                  })}
                >
                  Review
                </button>
              </div>
            </div>
          </div>
          {/* Movie Card 2 */}
          <div className="movie-card">
            <img src={red1} alt="Movie 2" className="movie-image" />
            <div className="movie-info">
              <h3 className="movie-title">MẬT MÃ ĐỎ</h3>
              <p className="movie-genre">Thể loại: Hành động</p>
              <p className="movie-duration">Thời lượng: 122 phút</p>
              <div className="flex gap-6">
                <button className="book-button">Đặt vé</button>
                <button
                  className="book-button"
                  onClick={() => showModal({
                    title: 'MẬT MÃ ĐỎ',
                    genre: 'Hành động',
                    duration: '122 phút',
                    description: 'Đây là mô tả chi tiết về phim MẬT MÃ ĐỎ...',
                    trailerLink: 'https://www.youtube.com/embed/2T_mKyH17mY',  
                  })}
                >
                  Review
                </button>
              </div>
            </div>
          </div>
          {/* Movie Card 3 */}
          <div className="movie-card">
            <img src={love} alt="Movie 3" className="movie-image" />
            <div className="movie-info">
              <h3 className="movie-title">NGÀY TA ĐÃ YÊU</h3>
              <p className="movie-genre">Thể loại: Tâm Lý, Tình cảm</p>
              <p className="movie-duration">Thời lượng: 122 phút</p>
              <div className="flex gap-6">
                <button className="book-button">Đặt vé</button>
                <button
                  className="book-button"
                  onClick={() => showModal({
                    title: 'NGÀY TA ĐÃ YÊU',
                    genre: 'Tâm Lý, Tình cảm',
                    duration: '122 phút',
                    description: 'Đây là mô tả chi tiết về phim NGÀY TA ĐÃ YÊU...',
                    trailerLink: 'https://www.youtube.com/embed/lbLk9PzHWfg', 
                  })}
                >
                  Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
     

      {/* Modal for Movie Reviews */}
      <Modal
        title={selectedMovie?.title}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        <p><strong>Thể loại:</strong> {selectedMovie?.genre}</p>
        <p><strong>Thời gian:</strong> {selectedMovie?.duration}</p>
        <p><strong>Mô tả:</strong> {selectedMovie?.description}</p>
        {/* Display the YouTube trailer */}
        {selectedMovie?.trailerLink && (
          <div className="mt-4">
            <iframe 
              width="100%" 
              height="315" 
              src={selectedMovie.trailerLink} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        )}
      </Modal>
    </div>
    <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
          <div>
            <h3 className="font-bold">Về chúng tôi</h3>
            <p>CGV là một trong năm Cụm Rạp Chiếu Phim lớn nhất toàn cầu và CGV Việt Nam là Nhà Phát Hành, nhà quản lý và vận hành Cụm Rạp Chiếu Phim CGV Cinemas lớn nhất tại Việt Nam. Mục tiêu của CGV Việt Nam là trở thành công ty giải trí điển hình, đóng góp cho sự phát triển không ngừng của lĩnh vực điện ảnh Việt Nam.</p>
          </div>
          <div>
            <h3 className="font-bold">Chúng tôi có mặt tại</h3>
            <p>CGV Cinemas</p>
            <p>Hệ thống rạp chiếu phim CGV, Hoàng Quân Cinema.</p>
          </div>
          <div>
            <h3 className="font-bold">Theo dõi chúng tôi</h3>
            <p>
              <a href="https://www.facebook.com/cgvvietnam" className="text-blue-400">Facebook</a> {' | '}
              <a href="https://www.instagram.com/cgv_vietnam/" className="text-blue-400">Instagram</a> {' | '}
              <a href="https://www.youtube.com/user/CGVcinemasVN" className="text-blue-400">YouTube</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
    
  );
};
export default Home;
