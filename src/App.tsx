import React from 'react';
import { Route, Routes } from "react-router-dom";
import { HomeImg } from './pages/HomeImg';
import { Home } from './pages/Home';
import { ItemDetail } from './pages/ItemDetail';
import { MarketPlace } from './pages/MarketPlace';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/itemdetail" element={<ItemDetail />} />
      <Route path="/marketplace" element={<MarketPlace />} />
      <Route path="/home-img" element={<HomeImg />} />
    </Routes>
  );
}

export default App;
