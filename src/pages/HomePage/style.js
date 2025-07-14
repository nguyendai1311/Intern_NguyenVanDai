import styled from "styled-components";

export const WrapperCoursePage = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 24px;
  padding: 24px;
  background-color: #f3f6f9;
  min-height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const WrapperCourseContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const WrapperCourseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    h2 {
      font-size: 20px;
    }
  }
`;

export const SortSelect = styled.select`
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;

   @media (max-width: 768px) {
    font-size: 14px;
    padding: 4px 8px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 3px 6px;
  }
`;

export const WrapperCourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  padding: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  & > *:only-child {
    justify-self: center;
    max-width: 400px; /* Giới hạn kích thước tối đa */
  }
`;

export const CenteredPagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  margin-left:850px;
`;

export const WrapperCourse = styled.span`
  @media (max-width: 480px) {
      font-size: 13px;
  }
`
