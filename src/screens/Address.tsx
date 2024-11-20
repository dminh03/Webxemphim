import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';
import { Link } from 'react-router-dom';
import logo from '../assets/images/movie.png';
import 'leaflet-routing-machine'; // Thêm import này để sử dụng leaflet-routing-machine

// Fix icon loading issue for Leaflet
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';

const Address: React.FC = () => {
  const addresses = [
    {
      city: 'Hà Nội',
      locations: [
        { name: 'CGV Vincom Bà Triệu', coordinates: [21.0285, 105.8542] as LatLngExpression },
        { name: 'CGV Vincom Nguyễn Chí Thanh', coordinates: [21.0227, 105.8171] as LatLngExpression },
        { name: 'CGV Mipec Tower', coordinates: [21.0362, 105.8351] as LatLngExpression },
        { name: 'CGV Aeon Mall Hà Đông', coordinates: [20.9670, 105.7715] as LatLngExpression },
      ],
    },
    {
      city: 'TP. Hồ Chí Minh',
      locations: [
        { name: 'CGV SC VivoCity', coordinates: [10.7304, 106.7211] as LatLngExpression },
        { name: 'CGV Crescent Mall', coordinates: [10.7325, 106.7217] as LatLngExpression },
        { name: 'CGV Pearl Plaza', coordinates: [10.8014, 106.7155] as LatLngExpression },
        { name: 'CGV Sư Vạn Hạnh', coordinates: [10.7753, 106.6677] as LatLngExpression },
      ],
    },
  ];

  // Custom icon for marker
  const customIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const MapWithRouting = ({ position }: { position: LatLngExpression }) => {
    const map = useMap();
  
    useEffect(() => {
      const routingControl = L.Routing.control({
        waypoints: [L.latLng(position)],
        lineOptions: {
          styles: [{ color: 'blue', weight: 4 }],
          extendToWaypoints: true, // Thêm thuộc tính này
          missingRouteTolerance: 10, // Thêm thuộc tính này
        },
      }).addTo(map);
  
      return () => {
        map.removeControl(routingControl);
      };
    }, [map, position]);
  
    return null;
  };
  

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Header */}
      <header className="bg-gray-800 p-4 fixed w-full top-0 z-10">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <a href="/" className="flex items-center">
            <img src={logo} alt="MOVEEK Logo" className="h-10 mr-2" />
          </a>
          <div className="space-x-5">
            <Link to="/address" className="text-white">Hệ Thống Rạp</Link>
            <Link to="/movie-detail" className="text-white">Danh sách phim</Link>
            <Link to="/login" className="text-white">Đăng nhập</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="p-16 mt-20">
        <h1 className="text-3xl font-bold mb-8">Địa chỉ các Rạp CGV trên toàn quốc</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map((address, index) => (
            <div key={index} className="bg-white p-4 shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">{address.city}</h2>
              <ul className="list-disc pl-5">
                {address.locations.map((location, idx) => (
                  <li key={idx} className="text-md mb-2">{location.name}</li>
                ))}
              </ul>
              <MapContainer
                center={address.locations[0].coordinates}
                zoom={13}
                style={{ height: '200px', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {address.locations.map((location, idx) => (
                  <Marker
                    key={idx}
                    position={location.coordinates}
                    icon={customIcon}
                  >
                    <Popup>{location.name}</Popup>
                  </Marker>
                ))}
                <MapWithRouting position={address.locations[0].coordinates} />
              </MapContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Address;
