import { useEffect, useState } from "react";
import { IContent } from "../types/content";
import axios from "axios";
import { host } from "../constant";

const useContents = () => {
  const [contents, setContents] = useState<IContent[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios
        .get(`${host}/content`)
        .then((res) => res.data)
        .catch((err) => console.log(err));

      const displayContents = data
        .filter((obj: IContent) => obj.isArchive === false)
        .reverse();
      setContents(displayContents);
    };
    fetchData();
  }, []);

  return { contents };
};

export default useContents;
