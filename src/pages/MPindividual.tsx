import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import MPDetail from "../components/MPDetail";
import useComments from "../hooks/useComments";
import Loading from "../components/Loading";

const MPindividual = () => {
  const { id } = useParams();
  const { comments, isLoading } = useComments(Number(id));

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <MPDetail />
      <div className="flex flex-col">
        {comments!.length === 0 ? null : (
          <div className="mx-[auto] ">
            <p className="name-mpdetail mt-[-8px]">
              เบาะแส{" "}
              <span className="detail-mpdetail">{`(${
                comments!.length
              } เบาะแส)`}</span>
            </p>

            <div className="flex flex-col gap-[10px] items-center ">
              {comments &&
                comments.map((comment) => {
                  return <Comment key={comment.id} {...comment} />;
                })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MPindividual;
