import { useNavigate } from "react-router-dom";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import {
  Card,
  ProductImage,
  ProductName,
  ProductDesc,
  ProductPrice,
  DetailButton,
  FavoriteButton,
  WrapperFooter,
  WrapperContent,
} from "./style";

const ProductCard = ({ product, isFavorite, onToggleFavorite, onAddToHistory }) => {
  const navigate = useNavigate();

  const handleViewDetail = () => {
    if (onAddToHistory) onAddToHistory();
    navigate(`/product/${product.id}`);
  };

  return (
    <Card onClick={handleViewDetail}>
      <ProductImage src={product.image} alt={product.name} />
      <WrapperContent>
        <ProductName>{product.name}</ProductName>
        <ProductDesc>{product.shortDesc}</ProductDesc>
        <WrapperFooter>
          <ProductPrice>{product.price.toLocaleString()} đ</ProductPrice>
          <FavoriteButton onClick={(e) => {
              e.stopPropagation(); 
              onToggleFavorite(product.id);
            }}>
            {isFavorite ? <HeartFilled style={{ color: "red", fontSize: 20 }} /> : <HeartOutlined style={{ fontSize: 20 }} />}
          </FavoriteButton>
        </WrapperFooter>
      </WrapperContent>
    </Card>
  );
};

export default ProductCard;
