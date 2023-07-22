import { createContext, useContext, useState } from "react";
import { ChildProps, IAuthContext } from "../types/auth.context";
import { host } from "../constant";

// Identify types
export type AuthProviderProps = ChildProps;
type UserInfo = Pick<IAuthContext, "id" | "user" | "token">;

const retrieveUserData = async (token: string) => {
  try {
    const res = await fetch(`${host}/user/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data.user;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const AuthContext = createContext<IAuthContext | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Get items from local storage
const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!token);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    id: localStorage.getItem("id"),
    user: user,
    token: token,
  });

  const login: IAuthContext["login"] = async (username, password) => {
    const loginInfo = { username, password };
    try {
      const res = await fetch(`${host}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfo),
      });

      const data = await res.json();
      if (data.statusCode === 401 || data.statusCode === 500) {
        throw new Error(data.message);
      }

      const newToken = data.accessToken;

      const { id } = await retrieveUserData(newToken);
      localStorage.setItem("token", newToken);
      localStorage.setItem("id", id);
      localStorage.setItem("user", username);
      setIsLoggedIn(true);
      setUserInfo({ id, user: username, token: newToken });
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  const logout: IAuthContext["logout"] = async () => {
    try {
      const res = await fetch(`${host}/user/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      const data = await res.json();

      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      setUserInfo({ id: null, user: null, token: null });

      return data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  const getAuthHeader: IAuthContext["getAuthHeader"] = () => ({
    Authorization: `Bearer ${userInfo.token}`,
  });

  const isOwnContent: IAuthContext["isOwnContent"] = (content) => {
    return content.userId === userInfo.id;
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        getAuthHeader,
        isOwnContent,
        ...userInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
