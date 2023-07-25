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
      <div className={comments.length === 0 ? "mb-[40px]" : ""}>
        <MPDetail />
      </div>

      {comments!.length === 0 ? null : (
        <div className="flex flex-col ">
          <p className="name-mpdetail pl-[23%]">
            เบาะแส{" "}
            <span className="detail-mpdetail">{`(${
              comments!.length
            } เบาะแส)`}</span>
          </p>

          <div className="flex flex-col gap-[10px]">
            {comments &&
              comments.map((comment) => {
                return <Comment key={comment.id} {...comment} />;
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default MPindividual;
