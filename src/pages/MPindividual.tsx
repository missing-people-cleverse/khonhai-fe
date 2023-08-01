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
    <div className="min-h-[90vh]">
      <div className={comments.length === 0 ? "mb-[40px]" : ""}>
        <MPDetail />
      </div>
      {comments.length === 0 ? null : (
        <>
          {isShown ? (
            <>
              <div className="w-[80%] mx-auto">
                <div className="flex flex-col gap-[10px] mb-[12px]">
                  <p className="name-mpdetail ml-[100px] max-md:pl-[5%] xxl:ml-[15%] xxxl:ml-[23%]">
                    เบาะแส{" "}
                    <span className="detail-mpdetail">{`(${
                      comments!.length
                    } เบาะแส)`}</span>
                  </p>
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
    </div>
  );
};

export default MPindividual;
