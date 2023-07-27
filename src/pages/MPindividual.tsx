import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import MPDetail from "../components/MPDetail";
import useComments from "../hooks/useComments";
import Loading from "../components/Loading";
import { useState } from "react";

const MPindividual = () => {
  const { id } = useParams();
  const { comments } = useComments(Number(id));
  const [isShown, setIsShown] = useState(false);

  setTimeout(() => {
    setIsShown(true);
  }, 2000);

  return (
    <>
      <div className={comments.length === 0 ? "mb-[40px]" : ""}>
        <MPDetail />
      </div>
      {comments.length === 0 ? null : (
        <>
          {isShown ? (
            <>
              <div className="flex flex-col ">
                <p className="name-mpdetail pl-[23%]">
                  เบาะแส{" "}
                  <span className="detail-mpdetail">{`(${
                    comments!.length
                  } เบาะแส)`}</span>
                </p>

                <div className="flex flex-col gap-[10px] mb-[12px]">
                  {comments &&
                    comments.map((comment) => {
                      return <Comment key={comment.id} {...comment} />;
                    })}
                </div>
              </div>
            </>
          ) : (
            <Loading />
          )}
        </>
      )}
    </>
  );
};

export default MPindividual;
