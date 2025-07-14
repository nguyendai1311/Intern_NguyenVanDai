const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p>{product.longDesc}</p>
        <p>Giá: {product.price.toLocaleString()} đ</p>
        <p>Đánh giá: {product.rating}⭐</p>
        <button onClick={onClose}>Đóng</button>
      </div>
    </div>
  );
};
export default ProductModal;
