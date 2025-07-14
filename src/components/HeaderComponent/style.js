import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

export const NavWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 8px 12px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 10px;
    flex-wrap: wrap;
  }
`;

export const NavLink = styled(RouterNavLink)`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: 500;

  &.active {
    color: #007bff;
    font-weight: bold;
  }

  &:hover {
    color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
