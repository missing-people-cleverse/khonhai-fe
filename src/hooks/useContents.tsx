import { useCallback, useEffect, useState } from "react";
import { IContent } from "../types/content";
import { host } from "../constant";

const useContents = () => {
  const [contents, setContents] = useState<IContent[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${host}/content`);
      const data = await res.json();

      const displayContents = data
        .filter((obj: IContent) => obj.isArchive === false)
        .reverse();
      setContents(displayContents);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // const fetchData = async () => {
    //   setIsLoading(true);
    //   try {
    //     const res = await fetch(`${host}/content`);
    //     const data = await res.json();

    //     const displayContents = data
    //       .filter((obj: IContent) => obj.isArchive === false)
    //       .reverse();
    //     setContents(displayContents);
    //   } catch (err) {
    //     console.log(err);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };

    fetchData();
  }, []);

  return { contents, isLoading };
};

export default useContents;
