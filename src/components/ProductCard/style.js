// ProductCard.style.js
import styled from "styled-components";

export const Card = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px; /* Giới hạn chiều rộng tối đa */
  height: 350px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.2s;
  margin: auto; /* Canh giữa khi chỉ có 1 phần tử */
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

export const ProductName = styled.h3`
    font-size: 15px;
  font-weight: bold;
  line-height: 1.4;
  color: #222;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ProductDesc = styled.p`
  font-size: 13px;
  color: #555;
`;

export const ProductPrice = styled.p`
  color: #d63031;
  font-size: 15px;
  font-weight: bold;
`;

export const DetailButton = styled.button`
  margin: 8px 4px 0;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  background-color: #007bff;
  color: white;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const FavoriteButton = styled.button`
  color: white;
  border: none;
  padding: 6px 12px;
  font-size: 13px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color:rgb(158, 147, 146);
  }
`;

export const WrapperFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const WrapperContent = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;