import { useNavigate } from "react-router-dom";
import { IContent } from "../types/content";
import { formatDate } from "../utils";

interface IContentProps {
  content: IContent;
}

const Content = ({ content }: IContentProps) => {
  const navigate = useNavigate();

  const navigateToContent = () => {
    navigate(`/content/${content.id}`);
  };
  const navigateToComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigate("/");
  };

  return (
    <>
      <div className="card-content" onClick={navigateToContent}>
        <img src="/mp.jpg" alt="" className="thumbnail-content" />

        <p className="name-content">
          {content.name} {content.surname}
        </p>

        <div className="flex-col ml-[20px]">
          <p className="contenttopic-content">
            เพศ <span className="contentdetail-content">{content.gender}</span>
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
              {content.missingDatetime}
            </span>
          </p>
          <p className="contenttopic-content">
            วันที่ประกาศ{" "}
            <span className="contentdetail-content">
              {formatDate(content.createdAt)}
            </span>
          </p>
        </div>

        <button className="commentbtn-content" onClick={navigateToComment}>
          แจ้งเบาะแส
        </button>
        {content.comments.length === 0 ? (
          <div className="commentcount-content">{`ยังไม่มีเบาะแส`}</div>
        ) : (
          <div className="commentcount-content">{`${content.comments.length} เบาะแส`}</div>
        )}
      </div>
    </>
  );
};

export default Content;
