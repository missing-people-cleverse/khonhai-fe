import React from "react";
import classes from "./Content.module.css";

const Content = () => {
  return (
    <>
      <div className={classes.card}>
        <img src="/mp.jpg" alt="" className={classes.thumbnail} />

        <p className={classes.name}>ณัฐพนธ์ อินทร์พันธุ์</p>

        <div className="flex-col ml-[20px]">
          <p className={classes.contenttopic}>
            เพศ <span className={classes.contentdetail}>ชาย</span>
            <span
              className={classes.contenttopic}
              style={{ marginLeft: "6px" }}
            >
              สัญชาติ <span className={classes.contentdetail}>ไทย</span>
            </span>
          </p>

          <p className={classes.contenttopic}>
            วันที่หาย{" "}
            <span className={classes.contentdetail}>12 กรกฏาคม 2566</span>
          </p>
          <p className={classes.contenttopic}>
            วันที่ประกาศ{" "}
            <span className={classes.contentdetail}>12 กรกฏาคม 2566</span>
          </p>
        </div>
        <button className={classes.commentbutton}>แจ้งเบาะแส</button>
        <div className={classes.commentcount}>3 เบาะแส</div>
      </div>
    </>
  );
};

export default Content;
