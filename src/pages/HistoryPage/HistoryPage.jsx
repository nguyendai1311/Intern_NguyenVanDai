import { useState } from "react";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ProductGrid } from "../../style/style";

const ITEMS_PER_PAGE = 8;

const HistoryPage = ({ viewHistory = [], favorites = [], toggleFavorite }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(viewHistory.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = viewHistory.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Lịch sử xem sản phẩm</h2>

      {viewHistory.length === 0 ? (
        <p>Bạn chưa xem sản phẩm nào.</p>
      ) : (
        <>
          <ProductGrid>
            {currentItems.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onToggleFavorite={toggleFavorite}
                isFavorite={favorites.includes(product.id)}
              />
            ))}
          </ProductGrid>

          <PaginationComponent
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default HistoryPage;
