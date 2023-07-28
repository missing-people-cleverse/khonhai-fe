import { useEffect, useState } from "react";
import { IContent, IContentDto } from "../types/content";
import axios from "axios";

import { useAuth } from "../context/AuthProvider";
import { host } from "../constant";
import { toast } from "react-toastify";

const useContent = (id: Number) => {
  const [content, setContent] = useState<IContent>();

  const { getAuthHeader } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${host}/content/${id}`);
        setContent(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const editContent = async (updateBody: IContentDto) => {
    try {
      const res = await fetch(`${host}/content/edit/${id}`, {
        method: "PATCH",
        body: JSON.stringify(updateBody),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          ...getAuthHeader(),
        },
      });
      const data = await res.json();
      if (data.statusCode === 400 || data.statusCode === 500) {
        toast.error("กรอกข้อมูลให้ครบถ้วน");
        throw new Error(data.message);
      }
      return data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  return { content, editContent };
};

export default useContent;
