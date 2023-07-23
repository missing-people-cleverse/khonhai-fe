import { useEffect, useState } from "react";
import { host } from "../constant";
import { IUserProfile } from "../types/user";

const useUserProfile = () => {
  const [userProfile, setUserProfile] = useState<IUserProfile>();

  //   if (!userProfile) {
  //     return <div>Loading...</div>;
  //   }
  useEffect(() => {
    const retrieveUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }
        const res = await fetch(`${host}/user/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setUserProfile(data);
        return data.user;
      } catch (err: any) {
        throw new Error(err.message);
      }
    };
    retrieveUserData();
  }, []);

  return { userProfile };
};

export default useUserProfile;
