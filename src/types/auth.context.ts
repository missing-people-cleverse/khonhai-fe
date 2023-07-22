import { ReactNode } from "react";
import { IContent } from "./content";

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
  isOwnContent: (content: IContent) => boolean;
}

export interface ChildProps {
  children: ReactNode;
}
