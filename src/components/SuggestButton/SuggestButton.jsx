import React from "react";
import { mockProducts } from "../../data/mockProducts";
import { StyledSuggestButton } from "./style";

const SuggestButton = ({ favorites = [], viewHistory = [], onSuggest }) => {
  const handleSuggest = () => {
    const viewedIds = viewHistory.map((p) => p.id);
    const interactedIds = [...new Set([...favorites, ...viewedIds])];

    const interactedTypes = mockProducts
      .filter((p) => interactedIds.includes(p.id))
      .map((p) => p.type);

    const uniqueTypes = [...new Set(interactedTypes)];

    const suggested = mockProducts.filter(
      (p) => uniqueTypes.includes(p.type) && !interactedIds.includes(p.id)
    );

    onSuggest(suggested.length > 0 ? suggested : mockProducts.slice(0, 5));
  };

  return <StyledSuggestButton onClick={handleSuggest}>🎯 Gợi ý sản phẩm </StyledSuggestButton>;
};

export default SuggestButton;
