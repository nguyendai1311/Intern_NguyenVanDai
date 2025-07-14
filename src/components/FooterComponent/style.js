import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #e9f5d3;
  padding: 10px 50px;
  font-size: 14px;
  color: #333;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
`;

export const FooterColumn = styled.div`
  flex: 1;
  min-width: 220px;
`;

export const FooterTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 12px;
  color: #2e7d32;
`;

export const FooterText = styled.p`
  margin: 4px 0;
`;

export const FooterLogo = styled.div`
  img {
    margin-bottom: 10px;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const InstagramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 60px);
  gap: 5px;

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 13px;
  color: #555;
`;
