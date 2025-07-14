import React from "react";
import {
  FooterContainer,
  FooterColumn,
  FooterTitle,
  FooterText,
  FooterWrapper,
  FooterLogo,
  SocialIcons,
  InstagramGrid,
  FooterBottom,
} from "./style";

import {
  FacebookFilled,
  YoutubeFilled,
  MailFilled,
} from "@ant-design/icons";

const FooterComponent = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterColumn>
          <FooterLogo>
            <p>
              Chúng tôi hi vọng tất cả người tiêu dùng Việt Nam sẽ được sử dụng
              những khóa học từ NguyenDai
            </p>
          </FooterLogo>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>CHÍNH SÁCH</FooterTitle>
          <FooterText>Chính sách thành viên</FooterText>
          <FooterText>Chính sách thanh toán</FooterText>
          <FooterText>Hướng dẫn mua hàng</FooterText>
          <FooterText>Bảo mật thông tin cá nhân</FooterText>
          <FooterText>Quà tặng tri ân</FooterText>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>THÔNG TIN CHUNG</FooterTitle>
          <FooterText>
            <strong>Địa chỉ:</strong> 70 Dương Thị Mười, Phường Tân Thới Hiệp, Quận 12, TP.HCM
          </FooterText>
          <FooterText>
            <strong>Điện thoại:</strong> 0798350734
          </FooterText>
          <FooterText>
            <strong>Email:</strong> dai293720@gmail.vn
          </FooterText>
          <FooterTitle>LIÊN KẾT SÀN</FooterTitle>
          <SocialIcons>
            <FacebookFilled style={{ fontSize: 24, color: "#3b5998" }} />
            <YoutubeFilled style={{ fontSize: 24, color: "#ff0000" }} />
            <MailFilled style={{ fontSize: 24, color: "#db4437" }} />
          </SocialIcons>
        </FooterColumn>
      </FooterWrapper>

      <FooterBottom>
        Bản quyền thuộc về <strong>NguyenDai</strong>
      </FooterBottom>
    </FooterContainer>
  );
};

export default FooterComponent;
