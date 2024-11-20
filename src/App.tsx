import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import MovieDetail from "./screens/MovieDetail";
import Address from "./screens/Address";
import UserAccount from "./screens/UserAccount";
import Login from "./components/Auth/Login";
import Register from './components/Auth/Register';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie-detail" element={<MovieDetail />} />
        <Route path="/user-account" element={<UserAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/address" element={<Address />} />
      </Routes> 
    </Router>
  );
};
export default App;
