import { Link } from "react-router-dom";
import styled from "styled-components";

export const ChatToggleButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #0b5ed7;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

export const ChatWrapper = styled.div`
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 320px;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 12px;
  background-color: #fff;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  max-height: 500px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

export const ChatContent = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 10px;
  padding-right: 5px;
`;

export const MessageContainer = styled.div`
  margin-bottom: 10px;
  text-align: ${(props) => (props.user ? "right" : "left")};
`;

export const MessageBubble = styled.div`
  display: inline-block;
  background-color: ${(props) => (props.user ? "#dcf8c6" : "#f1f0f0")};
  padding: 8px 12px;
  border-radius: 16px;
  white-space: pre-wrap;
  max-width: 85%;
  font-size: 14px;
`;

export const SuggestionLink = styled(Link)`
  display: block;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  color: #000;
  text-decoration: none;
  font-size: 14px;
`;

export const SuggestionPrice = styled.div`
  color: red;
  font-size: 13px;
`;

export const InputArea = styled.div`
  display: flex;
  gap: 5px;
`;

export const InputField = styled.input`
  flex: 1;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

export const SendButton = styled.button`
  padding: 8px 12px;
  background-color: #0b5ed7;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
`;
