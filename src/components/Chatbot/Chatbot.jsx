import { useState } from "react";
import { mockProducts } from "../../data/mockProducts";
import { Link } from "react-router-dom";
import { MessageSquare, X } from "lucide-react";
import {
  ChatToggleButton,
  ChatWrapper,
  CloseButton,
  ChatContent,
  MessageContainer,
  MessageBubble,
  SuggestionLink,
  SuggestionPrice,
  InputArea,
  InputField,
  SendButton,
} from "./style";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Chào bạn! Bạn muốn tìm gì hôm nay?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    simulateBotReply(input.trim());
  };

  const simulateBotReply = (text) => {
    setIsTyping(true);
    setTimeout(() => {
      const keywords = text.toLowerCase().split(/\s+/);
      const suggestions = mockProducts
        .filter((p) => {
          const name = p.name.toLowerCase();
          const desc = p.longDesc.toLowerCase();
          const type = p.type?.toLowerCase() || "";
          return keywords.some((word) =>
            name.includes(word) || desc.includes(word) || type.includes(word)
          );
        })
        .slice(0, 3);

      let botText = "";
      if (suggestions.length > 0) {
        botText =
          "Tôi tìm thấy vài sản phẩm có thể bạn sẽ thích:\n" +
          suggestions
            .map(
              (p) =>
                ` ${p.name} - ${p.price.toLocaleString()} đ [Xem chi tiết](/product/${p.id})`
            )
            .join("\n");
      } else {
        botText =
          "Xin lỗi, tôi không tìm thấy sản phẩm phù hợp. Bạn có thể thử từ khóa khác.";
      }

      setMessages((prev) => [...prev, { from: "bot", text: botText }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {!isOpen && (
        <ChatToggleButton onClick={() => setIsOpen(true)}>
          <MessageSquare />
        </ChatToggleButton>
      )}
      {isOpen && (
        <ChatWrapper>
          <div style={{ textAlign: "right", marginBottom: "5px" }}>
            <CloseButton onClick={() => setIsOpen(false)}>
              <X size={20} />
            </CloseButton>
          </div>
          <ChatContent>
            {messages.map((msg, idx) => (
              <MessageContainer key={idx} user={msg.from === "user"}>
                <MessageBubble user={msg.from === "user"}>
                  {msg.text.split("\n").map((line, i) => (
                    <p key={i} style={{ margin: 0 }}>
                      {line.includes("[Xem chi tiết]") ? (() => {
                        const match = line.match(/\(\/product\/\d+\)/);
                        const url = match ? match[0].replace(/[()]/g, "") : "#";
                        const name = line.split(" - ")[0].trim();
                        const price = line.split(" - ")[1]?.split("đ")[0]?.trim();
                        return (
                          <SuggestionLink to={url}>
                            <strong>{name}</strong>
                            <SuggestionPrice>{price} đ</SuggestionPrice>
                          </SuggestionLink>
                        );
                      })() : (
                        <span>{line}</span>
                      )}
                    </p>
                  ))}
                </MessageBubble>
              </MessageContainer>
            ))}
            {isTyping && <p><i>Đang nhập...</i></p>}
          </ChatContent>
          <InputArea>
            <InputField
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Bạn cần tìm gì?"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <SendButton onClick={handleSend}>Gửi</SendButton>
          </InputArea>
        </ChatWrapper>
      )}
    </>
  );
};

export default ChatBot;
