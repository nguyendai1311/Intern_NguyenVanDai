import React, { Fragment } from "react";
import { Checkbox } from "../CheckboxComponent/CheckboxComponent";
import { Label } from "../LabelComponent/LabelComponent";
import { Input } from "antd";
import {
  WrapperFilterContainer,
  WrapperCourseFilter,
  WrapperFilterHeader,
  WrapperFilterTitle,
  WrapperSearchInput,
  WrapperFilterSection,
  WrapperFilterSectionTitle,
  WrapperFilterOption,
  IconWrapper,
} from "./style";
import { SearchOutlined } from "@ant-design/icons";

const filterOptions = {
  price: [
    { id: "lt250", label: "Dưới 250.000đ" },
    { id: "250to500", label: "Từ 250.000đ - 500.000đ"},
    { id: "500to1000", label: "Từ 500.000đ - 1.000.000đ" },
    { id: "gt1000", label: "Trên 1.000.000đ" },
  ],
};
const sectionTitles = {
  price: "Mức giá",
};
function Filter({ filters, handleFilter, searchText, setSearchText }) {
  return (
    <WrapperFilterContainer>
      <WrapperCourseFilter>
        <WrapperFilterHeader>
          <WrapperFilterTitle>Tìm kiếm</WrapperFilterTitle>
          <WrapperSearchInput>
            <IconWrapper>
              <SearchOutlined />
            </IconWrapper>
            <Input
              placeholder="Tìm kiếm khóa học..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </WrapperSearchInput>
        </WrapperFilterHeader>

        {Object.keys(filterOptions).map((keyItem) => (
          <Fragment key={keyItem}>
            <WrapperFilterSection>
              <WrapperFilterSectionTitle> {sectionTitles[keyItem] || "Bộ lọc"}</WrapperFilterSectionTitle>
              {filterOptions[keyItem].map((option) => (
                <WrapperFilterOption as={Label} key={option.id}>
                  <Checkbox
                    checked={
                      filters &&
                      filters[keyItem] &&
                      filters[keyItem].indexOf(option.id) > -1
                    }
                    onCheckedChange={() => handleFilter(keyItem, option.id)}
                  />
                  {option.label}
                </WrapperFilterOption>
              ))}
            </WrapperFilterSection>
          </Fragment>
        ))}
      </WrapperCourseFilter>
    </WrapperFilterContainer>
  );
}

export default Filter;
