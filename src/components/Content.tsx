import { useNavigate } from "react-router-dom";
import { IContent } from "../types/content";

interface IContentProps {
  content: IContent;
}

const Content = ({ content }: IContentProps) => {
  // const { id, nickname } = props
  // console.log(content);
  // console.log(content);

  const navigate = useNavigate();

  const navigateToContent = () => {
    navigate(`/content/${content.id}`);
  };
  const navigateToComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigate("/");
  };

  // const createdDateDB = new Date(
  //   Number(content.createdAt.slice(0, 4)),
  //   Number(content.createdAt.slice(5, 7)) - 1,
  //   Number(content.createdAt.slice(8, 10))
  // );

  // const createdDate = createdDateDB.toLocaleDateString("th-TH", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // });

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
            <span className="contentdetail-content">{content.createdAt}</span>
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
