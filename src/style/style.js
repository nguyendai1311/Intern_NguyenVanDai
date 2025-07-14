import styled from "styled-components";

export const ProductGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;


export const ProductCardWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  background-color: #fff;
  text-align: center;
  height: 100%;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
  }

  h3 {
    margin: 12px 0 4px;
  }

  p {
    margin: 4px 0;
  }

  button {
    margin-top: 8px;
    padding: 6px 12px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 6px;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const PaginationWrapper = styled.div`
  margin-top: 20px;
  text-align: center;

  button {
    margin: 0 5px;
    padding: 8px 12px;
    background-color: #eee;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &.active {
      background-color: #333;
      color: #fff;
    }
  }
`;
