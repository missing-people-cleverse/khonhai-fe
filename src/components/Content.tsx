import { useNavigate } from "react-router-dom";
import classes from "./Content.module.css";

const Content = (props: any) => {
  const { content } = props;
  const navigate = useNavigate();

  const navigateToContent = () => {
    navigate("/content/1");
  };
  const navigateToComment = (e: any) => {
    e.stopPropagation();
    navigate("/");
  };

  return (
    <>
      <div className={classes.card} onClick={navigateToContent}>
        <img src="/mp.jpg" alt="" className={classes.thumbnail} />

        <p className={classes.name}>
          {content.name} {content.surname}
        </p>

        <div className="flex-col ml-[20px]">
          <p className={classes.contenttopic}>
            เพศ{" "}
            <span className={classes.contentdetail}>
              {content.gender === "MALE" ? "ชาย" : "หญิง"}
            </span>
            <span
              className={classes.contenttopic}
              style={{ marginLeft: "6px" }}
            >
              สัญชาติ{" "}
              <span className={classes.contentdetail}>
                {content.nationality === "THAI" ? "ไทย" : "ต่างชาติ"}
              </span>
            </span>
          </p>

          <p className={classes.contenttopic}>
            วันที่หาย{" "}
            <span className={classes.contentdetail}>
              {content.missingDatetime}
            </span>
          </p>
          <p className={classes.contenttopic}>
            วันที่ประกาศ{" "}
            <span className={classes.contentdetail}>{content.createdAt}</span>
          </p>
        </div>
        <object className={classes.commentbutton} onClick={navigateToComment}>
          แจ้งเบาะแส
        </object>
        <div className={classes.commentcount}>3 เบาะแส</div>
      </div>
    </>
  );
};

export default Content;
