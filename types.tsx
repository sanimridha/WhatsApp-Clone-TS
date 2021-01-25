export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
export type User = {
  id: string;
  name: string;
  imageUri: string;
};
export type ChatRoom = {
  id: String;
  users: [User];
  lastMessage: Message;
};
export type Message = {
  id: String;
  content: string;
  createdAt: number;
};
