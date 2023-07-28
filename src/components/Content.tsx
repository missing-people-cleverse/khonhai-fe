import { useNavigate } from "react-router-dom";
import { IContent } from "../types/content";
import { formatDate } from "../utils";
import { useState } from "react";
import CreateComment from "./CreateComment";
import useComments from "../hooks/useComments";
import { useAuth } from "../context/AuthProvider";

export interface IContentProps {
  content: IContent;
}

const Content = ({ content }: IContentProps) => {
  const [openComment, setOpenComment] = useState(false);
  const { comments } = useComments(Number(content.id));
  const { isLoggedIn } = useAuth();

  const navigate = useNavigate();

  const navigateToContent = () => {
    navigate(`/content/${content.id}`);
  };

  const handleComment = (e: any) => {
    e.stopPropagation();
    if (isLoggedIn) {
      setOpenComment(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <CreateComment
        openComment={openComment}
        onClose={() => setOpenComment(false)}
        content={content}
      />
      <div className="card-content h-[auto]" onClick={navigateToContent}>
        <div>
          <img
            src={`${content.img![0]}`}
            alt="mp"
            className="thumbnail-content"
          />
          <div className="name-content">{`${content.name} ${content.surname}`}</div>
        </div>
        <div className="flex flex-col justify-evenly">
          <div className="flex-col ml-[20px]">
            <p className="contenttopic-content">
              เพศ{" "}
              <span className="contentdetail-content">{content.gender}</span>
              <span className="contenttopic-content ml-[6px]">
                สัญชาติ{" "}
                <span className="contentdetail-content">
                  {content.nationality}
                </span>
              </span>
            </p>

            <p className="contenttopic-content">
              วันที่หาย{" "}
              <span className="contentdetail-content">
                {formatDate(content.missingDatetime)}
              </span>
            </p>
            <p className="contenttopic-content">
              วันที่ประกาศ{" "}
              <span className="contentdetail-content">
                {formatDate(content.createdAt)}
              </span>
            </p>
          </div>

          <button
            className="commentbtn-content ml-[auto]"
            onClick={handleComment}
          >
            แจ้งเบาะแส
          </button>

          {comments.length === 0 ? (
            <div className="commentcount-content">{`ยังไม่มีเบาะแส`}</div>
          ) : (
            <div className="commentcount-content">{`${comments.length} เบาะแส`}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Content;
