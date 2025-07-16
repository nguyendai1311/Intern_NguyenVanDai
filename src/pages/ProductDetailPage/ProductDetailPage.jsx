import { useParams } from "react-router-dom";
import { useState } from "react";
import { mockProducts } from "../../data/mockProducts";
import {
  BulletList,
  CourseContainer,
  CourseHeader,
  SectionTitle,
  TabHeader,
  TabItem,
  CourseContent,
  CourseMain,
  BuyButton,
  CourseSidebar,
  CourseImage,
  PriceBox,
  CourseMeta,
  CourseTitle
} from "./style";
import ReviewComponent from "../../components/ReviewComponent/ReviewComponent";
import { Rate } from "antd";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = mockProducts.find(p => p.id === parseInt(id));
  const [activeTab, setActiveTab] = useState("intro");

  const [reviews, setReviews] = useState(product?.reviews || []);

  if (!product) return <p>Không tìm thấy sản phẩm</p>;

  const handleNewRating = (newReview) => {
    setReviews(prev => [newReview, ...prev]);
  };

  return (
    <CourseContainer>
      <CourseHeader>
        <CourseTitle>{product.name}</CourseTitle>
        <CourseMeta>Danh mục: {product.type}</CourseMeta>
      </CourseHeader>

      <CourseContent>
        <CourseMain>
          <CourseImage src={product.image} alt="course" />

          <TabHeader>
            <TabItem
              active={activeTab === "intro"}
              onClick={() => setActiveTab("intro")}
            >
              Giới thiệu
            </TabItem>
            <TabItem
              active={activeTab === "review"}
              onClick={() => setActiveTab("review")}
            >
              Đánh giá
            </TabItem>
          </TabHeader>

          {activeTab === "intro" ? (
            <div>
              <SectionTitle>Giới thiệu về khóa học</SectionTitle>
              <p>{product.description}</p>

              {product.highlights?.length > 0 && (
                <>
                  <SectionTitle>Điểm nổi bật</SectionTitle>
                  <BulletList>
                    {product.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </BulletList>
                </>
              )}

              <p>{product.longDesc}</p>
            </div>
          ) : (
            <div>
              <ReviewComponent onSubmitRating={handleNewRating} />
              <div style={{ marginTop: 20 }}>
                <h3>Đánh giá từ người dùng:</h3>
                {reviews.length === 0 ? (
                  <p>Chưa có đánh giá nào.</p>
                ) : (
                  reviews.map((r, index) => (
                    <div
                      key={index}
                      style={{
                        marginBottom: 10,
                        borderBottom: '1px solid #eee',
                        paddingBottom: 10
                      }}
                    >
                      <Rate disabled defaultValue={r.rating} />
                      <p>{r.comment}</p>
                      <small>{new Date(r.createdAt).toLocaleString()}</small>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </CourseMain>

        <CourseSidebar>
          <PriceBox>{product.price?.toLocaleString()}₫</PriceBox>
          <BuyButton>Mua khóa học</BuyButton>
        </CourseSidebar>
      </CourseContent>
    </CourseContainer>
  );
};

export default ProductDetailPage;
