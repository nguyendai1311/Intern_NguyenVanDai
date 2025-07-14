import styled from "styled-components";

export const FavoritesContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: auto;
`;

export const PageTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
`;
