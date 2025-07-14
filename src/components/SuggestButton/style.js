import styled from "styled-components";

export const StyledSuggestButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;

   @media (max-width: 768px) {
    font-size: 13px;
    padding: 6px 10px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 5px 8px;
  }

  &:hover {
    background: #93989bff;
  }
`;
