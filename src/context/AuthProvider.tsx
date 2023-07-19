import { createContext, useContext, useState } from "react";
import { ChildProps, IAuthContext } from "../types/auth.context";
import { host } from "../constant";

// Identify types
export type AuthProviderProps = ChildProps;
type UserInfo = Pick<IAuthContext, "id" | "user" | "token">;

const retrieveUserData = (token: string) =>
  fetch(`${host}/user`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

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
      if (data.statusCode === 401) {
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
    // TODO: revise logout function to remove user token by using post/user/logout
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserInfo({ id: null, user: null, token: null });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        ...userInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
