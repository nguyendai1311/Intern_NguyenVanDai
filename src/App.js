import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import { mockProducts } from "./data/mockProducts";
import ChatBot from "./components/Chatbot/Chatbot";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1; /* chiếm toàn bộ chiều cao còn lại */
  padding: 20px;
`;


function App() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const [viewHistory, setViewHistory] = useState(() => {
    const saved = localStorage.getItem("viewHistory");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("viewHistory", JSON.stringify(viewHistory));
  }, [viewHistory]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <Router>
      <AppWrapper>
        <HeaderComponent />
        <MainContent>
          <Routes>
            <Route path="/" element={
              <HomePage
                favorites={favorites}
                setFavorites={setFavorites}
                viewHistory={viewHistory}
                setViewHistory={setViewHistory}
              />
            } />
            <Route path="/favorites" element={
              <FavoritesPage
                products={mockProducts}
                favoriteIds={favorites}
                onToggleFavorite={toggleFavorite}
              />
            } />
            <Route path="/product/:id" element={
              <ProductDetailPage />
            } />
            <Route path="/history" element={
              <HistoryPage
                viewHistory={viewHistory}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            } />
          </Routes>
        </MainContent>
        <ChatBot />
        <FooterComponent />
      </AppWrapper>
    </Router>

  );
}

export default App;
