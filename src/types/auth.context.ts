import { ReactNode } from "react";

export interface IAuthContext {
  id: string | null;
  user: string | null;
  token: string | null;
  isLoggedIn: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;

  // Optional, but if we're able to implement below function, it would be helpful :)
  // getAuthHeader: () => FetchAuthorizationHeader
  // isOwnPost: (c: ContentDto) => boolean
}

export interface ChildProps {
  children: ReactNode;
}
