import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import MPDetail from "../components/MPDetail";
import useContent from "../hooks/useContent";

const MPindividual = () => {
  const { id } = useParams();
  const { comments } = useContent(Number(id));
  return (
    <>
      <MPDetail />
      <div className="flex flex-col items-center">
        <p className="name-mpdetail mt-[10px]">
          เบาะแส{" "}
          <span className="detail-mpdetail">{`(${comments?.length} เบาะแส)`}</span>
        </p>
        <div className="flex flex-col gap-[10px]">
          {comments &&
            comments.map((comment) => {
              return <Comment key={comment.id} comment={comment} />;
            })}
        </div>
      </div>
    </>
  );
};

export default MPindividual;
