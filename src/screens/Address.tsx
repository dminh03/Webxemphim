import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import logo from '../assets/images/movie.png';

// Tùy chỉnh icon marker
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Dữ liệu các rạp CGV
interface Cinema {
  name: string;
  coordinates: LatLngTuple; // Định rõ tọa độ là [latitude, longitude]
}

interface City {
  name: string;
  cinemas: Cinema[];
}

const cities: City[] = [
  {
    name: 'Hồ Chí Minh',
    cinemas: [
      { name: 'CGV Hùng Vương Plaza', coordinates: [10.754666, 106.665892] },
      { name: 'CGV Vivo City', coordinates: [10.730846, 106.721505] },
    ],
  },
  {
    name: 'Hà Nội',
    cinemas: [
      { name: 'CGV Vincom Bà Triệu', coordinates: [21.017027, 105.849130] },
      { name: 'CGV Nguyễn Chí Thanh', coordinates: [21.024445, 105.811287] },
    ],
  },
];

const CinemaListByCity: React.FC = () => {
  const [activeMapIndex, setActiveMapIndex] = useState<{ city: string; cinemaIndex: number } | null>(null);

  const toggleMap = (cityName: string, cinemaIndex: number) => {
    if (activeMapIndex?.city === cityName && activeMapIndex?.cinemaIndex === cinemaIndex) {
      setActiveMapIndex(null);
    } else {
      setActiveMapIndex({ city: cityName, cinemaIndex });
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-gray-800 p-4 fixed w-full top-0 z-10">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <a href="/" className="flex items-center">
            {/* Phần logo */}
            <img src={logo} alt="MOVEEK Logo" className="h-10 mr-2" />
          </a>
          <div className="space-x-5">
            <Link to="/address" className="text-white">
              Hệ Thống Rạp
            </Link>
            <Link to="/movie-detail" className="text-white">
              Danh sách phim
            </Link>
            <Link to="/login" className="text-white">
              Đăng nhập
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="max-w-screen-lg mx-auto mt-20 p-6">
        <h1 className="text-3xl font-bold mb-6">Danh sách các Rạp CGV</h1>

        {/* Hiển thị danh sách theo từng thành phố */}
        {cities.map((city, cityIndex) => (
          <div key={cityIndex} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">{city.name}</h2>
            <div className="space-y-4">
              {city.cinemas.map((cinema, cinemaIndex) => (
                <div
                  key={cinemaIndex}
                  className="p-4 border border-gray-300 rounded-lg shadow-md bg-white"
                >
                  {/* Tên rạp và nút xem bản đồ */}
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">{cinema.name}</h3>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      onClick={() => toggleMap(city.name, cinemaIndex)}
                    >
                      {activeMapIndex?.city === city.name && activeMapIndex?.cinemaIndex === cinemaIndex
                        ? 'Ẩn Bản Đồ'
                        : 'Xem Bản Đồ'}
                    </button>
                  </div>

                  {/* Hiển thị bản đồ nếu nút được nhấn */}
                  {activeMapIndex?.city === city.name && activeMapIndex?.cinemaIndex === cinemaIndex && (
                    <div className="mt-4">
                      <MapContainer
                        center={cinema.coordinates}
                        zoom={15}
                        style={{ height: '300px', width: '100%' }}
                      >
                        <TileLayer
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={cinema.coordinates} icon={customIcon}>
                          <Popup>{cinema.name}</Popup>
                        </Marker>
                      </MapContainer>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CinemaListByCity;
