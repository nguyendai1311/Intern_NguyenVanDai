import { useState, useEffect } from "react";
import { mockProducts } from "../../data/mockProducts";
import ProductCard from "../../components/ProductCard/ProductCard";
import Filter from "../../components/FilterComponent/FilterComponent";
import {
  WrapperCourseHeader,
  SortSelect,
  WrapperCourse,
} from "./style";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";
import { useMediaQuery } from "react-responsive";

import { ProductGrid } from "../../style/style";
import SuggestButton from "../../components/SuggestButton/SuggestButton";
import { FilterWrapper } from "../../components/FilterComponent/style";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ITEMS_PER_PAGE = 8;

const HomePage = ({ favorites, setFavorites, viewHistory, setViewHistory }) => {
  const [products] = useState(mockProducts);
  const [filtered, setFiltered] = useState(products);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ price: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState("price-lowtohigh");
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    let result = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );

    if (filters.price.length > 0) {
      result = result.filter((p) =>
        filters.price.some((priceFilter) => {
          if (priceFilter === "lt250") return p.price < 250000;
          if (priceFilter === "250to500")
            return p.price >= 250000 && p.price <= 500000;
          if (priceFilter === "500to1000")
            return p.price >= 500000 && p.price <= 1000000;
          if (priceFilter === "gt1000") return p.price > 1000000;
          return true;
        })
      );
    }

    switch (sort) {
      case "price-lowtohigh":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-hightolow":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-atoz":
        result.sort((a, b) =>
          (a.name || "").toLowerCase().localeCompare((b.name || "").toLowerCase())
        );
        break;
      case "name-ztoa":
        result.sort((a, b) =>
          (b.name || "").toLowerCase().localeCompare((a.name || "").toLowerCase())
        );
        break;
      default:
        break;
    }

    setFiltered(result);
    setCurrentPage(1);
  }, [search, filters, sort, products]);

  const handleFilter = (key, value) => {
    setFilters((prev) => {
      const currentValues = prev[key] || [];
      const isChecked = currentValues.includes(value);
      return {
        ...prev,
        [key]: isChecked
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value],
      };
    });
  };

  const handleSort = (value) => {
    setSort(value);
  };

  const sortOptions = [
    { id: "price-lowtohigh", label: "Giá: Thấp đến Cao" },
    { id: "price-hightolow", label: "Giá: Cao đến Thấp" },
    { id: "name-atoz", label: "Tên: A đến Z" },
    { id: "name-ztoa", label: "Tên: Z đến A" },
  ];

  const handleSuggestions = (suggestedProducts) => {
    setFiltered(suggestedProducts);
    setCurrentPage(1);
  };

  const toggleFavorite = (id) => {
    const isFav = favorites.includes(id);

    if (isFav) {
      toast.info("Đã xóa khỏi yêu thích");
      setFavorites((prev) => prev.filter((f) => f !== id));
    } else {
      toast.success("Đã thêm vào yêu thích");
      setFavorites((prev) => [...prev, id]);
    }
  };

  const addToHistory = (product) => {
    setViewHistory((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;
      return [product, ...prev];
    });
  };

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div style={{ padding: "20px" }}>
      <div style={{
        display: "flex",
        gap: "20px",
        alignItems: "flex-start",
        flexDirection: isMobile ? "column" : "row",
      }}
      >
        <FilterWrapper>
          <Filter
            filters={filters}
            handleFilter={handleFilter}
            searchText={search}
            setSearchText={setSearch}
          />
        </FilterWrapper>

        <div style={{ flex: 3 }}>
          <WrapperCourseHeader>
            <h2>Tất cả khóa học</h2>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <WrapperCourse>
                <span>{filtered?.length} khóa học </span>
              </WrapperCourse>
              <SortSelect value={sort} onChange={(e) => handleSort(e.target.value)}>
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </SortSelect>
              <SuggestButton
                favorites={favorites}
                viewHistory={viewHistory}
                onSuggest={handleSuggestions}
              />
            </div>
          </WrapperCourseHeader>

          <ProductGrid>
            {currentItems.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onToggleFavorite={toggleFavorite}
                isFavorite={favorites.includes(product.id)}
                onAddToHistory={() => addToHistory(product)} 
              />
            ))}
          </ProductGrid>

          <PaginationComponent
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default HomePage;
