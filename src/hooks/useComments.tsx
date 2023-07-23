import axios from "axios";
import { useEffect, useState } from "react";
import { host } from "../constant";
import { IComment } from "../types/comment";

const useComments = (id: Number) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${host}/comment/${id}`);
        const displayComments = res.data
          .filter((obj: IComment) => obj.isArchive === false)
          .reverse();
        setComments(displayComments);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return { comments, isLoading };
};

export default useComments;
