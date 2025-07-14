import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;

  button {
    padding: 8px 12px;
    margin: 5px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &.active {
      background-color: #1890ff;
      color: white;
      font-weight: bold;
    }

    &:hover:not(.active) {
      background-color: #d9d9d9;
    }
  }
`;