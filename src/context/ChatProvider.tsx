import React, { createContext, ReactNode, useContext, useState } from "react";

import { v1 as uuidv1 } from "uuid";
import { defaultChats } from "./data";
import { Creator, Message, STATUS, Status } from "./type";

export type ChatContextType = {
  chats: Message[];
  addChat: (content: string, creator: Creator) => void;
  chatStatus: Status;
  setChatStatus: (status: Status) => void;
};

export const ChatContext = createContext<ChatContextType | undefined>(
  undefined
);

type ChatProviderProps = {
  children: ReactNode;
};

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [chats, setChats] = useState<Message[]>(defaultChats);
  const [chatStatus, setChatStatus] = useState<Status>(STATUS.IDLE);

  const addChat = (content: string, creator: Creator) => {
    const newChat: Message = {
      id: uuidv1(),
      content,
      creator,
    };
    setChats((prevChats) => [...prevChats, newChat]);
  };

  return (
    <ChatContext.Provider value={{ chats, addChat, chatStatus, setChatStatus }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
