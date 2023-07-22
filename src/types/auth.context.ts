import { ReactNode } from "react";

type FetchAuthorizationHeader = {
  Authorization: `Bearer ${string}`;
};

export interface IAuthContext {
  id: string | null;
  user: string | null;
  token: string | null;
  isLoggedIn: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;

  getAuthHeader: () => FetchAuthorizationHeader;
  // isOwnPost: (c: ContentDto) => boolean
}

export interface ChildProps {
  children: ReactNode;
}
