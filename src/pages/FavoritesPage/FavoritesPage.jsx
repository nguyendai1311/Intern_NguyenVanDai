import "./style";
import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";
import { ProductGrid } from "../../style/style";

const ITEMS_PER_PAGE = 8;

const FavoritesPage = ({ products, favoriteIds, onViewDetail, onToggleFavorite }) => {
  const favoriteProducts = products.filter(p => favoriteIds.includes(p.id));
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(favoriteProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = favoriteProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sản phẩm yêu thích</h2>

      {currentItems.length === 0 ? (
        <p>Không có sản phẩm nào trong danh sách yêu thích.</p>
      ) : (
        <>
          <ProductGrid>
            {currentItems.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetail={onViewDetail}
                onToggleFavorite={onToggleFavorite}
                isFavorite={true}
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

export default FavoritesPage;
