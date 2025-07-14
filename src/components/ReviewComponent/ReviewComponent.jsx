// RatingComponent.jsx
import React, { useState } from 'react';
import { Rate, Input, Button, message } from 'antd';

const { TextArea } = Input;

const RaviewComponent = ({ onSubmitRating }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (rating === 0 || comment.trim() === '') {
      message.error('Vui lòng nhập đầy đủ đánh giá và nội dung!');
      return;
    }

    const reviewData = {
      rating,
      comment,
      createdAt: new Date().toISOString()
    };

    // callback lên cha
    if (onSubmitRating) {
      onSubmitRating(reviewData);
    }

    message.success('Cảm ơn bạn đã đánh giá!');
    setRating(0);
    setComment('');
  };

  return (
    <div style={{ padding: 20, border: '1px solid #eee', borderRadius: 10 }}>
      <h3>Đánh giá sản phẩm</h3>
      <Rate value={rating} onChange={setRating} />
      <TextArea
        rows={4}
        placeholder="Nhập nhận xét của bạn..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={{ marginTop: 10 }}
      />
      <Button type="primary" onClick={handleSubmit} style={{ marginTop: 10 }}>
        Gửi đánh giá
      </Button>
    </div>
  );
};

export default RaviewComponent;
