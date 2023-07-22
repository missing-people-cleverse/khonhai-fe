import { useEffect, useState } from "react";
import { IContent } from "../types/content";
import axios from "axios";
import { host } from "../constant";

const useContents = () => {
  const [contents, setContents] = useState<IContent[]>([]);
  const [searchResults, setSearchResults] = useState<IContent[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await axios
        .get(`${host}/content`)
        .then((res) => res.data)
        .catch((err) => console.log(err));

      const displayContents = rawData
        .filter((obj: IContent) => obj.isArchive === false)
        .reverse();
      setContents(displayContents);
      setSearchResults(displayContents);
    };
    fetchData();
  }, []);

  return { contents, searchResults, setSearchResults };
};

export default useContents;
