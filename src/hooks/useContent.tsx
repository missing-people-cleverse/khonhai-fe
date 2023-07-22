import { useEffect, useState } from "react";
import { IContent } from "../types/content";
import axios from "axios";
import { host } from "../constant";

const useContent = (id: Number) => {
  const [content, setContent] = useState<IContent>();

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

  // console.log(content);
  // console.log(comments);
  return { content };
};

export default useContent;
