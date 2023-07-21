import { useEffect, useState } from "react";
import { IContent } from "../types/content";
import axios from "axios";
import { IComment } from "../types/comment";

const host = "http://localhost:8000";

const useContent = (id: Number) => {
  const [content, setContent] = useState<IContent>();
  const [comments, setComments] = useState<IComment[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${host}/content/${id}`);
        setContent(res.data);
        setComments(res.data.comments);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  // console.log(content);
  // console.log(comments);
  return { content, comments };
};

export default useContent;
