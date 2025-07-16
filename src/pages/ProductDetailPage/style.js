import styled from "styled-components";

export const CourseContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const CourseHeader = styled.div`
    margin-bottom: 20px;
`

export const CourseContent = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const TabHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 24px;
  gap: 20px;
  overflow-x: auto;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const TabItem = styled.div`
  padding-bottom: 8px;
  cursor: pointer;
  border-bottom: ${({ active }) => (active ? "2px solid #2d66f4" : "none")};
  color: ${({ active }) => (active ? "#2d66f4" : "#555")};
  font-weight: ${({ active }) => (active ? "600" : "500")};
  white-space: nowrap;
`;

export const SectionTitle = styled.h3`
  margin-top: 24px;
  margin-bottom: 10px;
`;

export const BulletList = styled.ul`
  padding-left: 20px;
  margin-bottom: 16px;

  li {
    margin-bottom: 6px;
  }
`;

export const CourseTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const CourseMeta = styled.div`
  color: #666;
  font-size: 16px;
`;

export const CourseMain = styled.div`
  flex: 3;
`;

export const CourseSidebar = styled.div`
  flex: 1;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 20px;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

// export const CourseSidebar = styled.div`
//   background: #fff;
//   padding: 16px;
//   border-radius: 12px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
//   text-align: center;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;


export const BuyButton = styled.button`
  background-color: #1677ff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  max-width: 250px;

  display: block;
  margin: 0 auto; 

  &:hover {
    background-color: #0056d2;
  }
`;

export const CourseImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const PriceBox = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;