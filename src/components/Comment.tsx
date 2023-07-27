import { useState } from "react";
import { IComment } from "../types/comment";
import { formatDateTime, formatDate } from "../utils/index";
import OutsideClickHandler from "react-outside-click-handler";
import { useAuth } from "../context/AuthProvider";
import EditComment from "./EditComment";
import { host } from "../constant";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import { RModalImages } from "react-modal-images";
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Bangkok");

const Comment = (props: IComment) => {
  const { ...comment } = props;
  const { ...userInfo } = useAuth();
  const [openComment, setOpenComment] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const token = localStorage.getItem("token");

  const imgs = [
    { id: "1", src: "/mp.jpg" },
    { id: "3", src: "/mp3.jpg" },
    { id: "2", src: "/mp4.jpg" },
    { id: "4", src: "/mp2.jpeg" },
  ];

  const handleComment = (e: any) => {
    e.stopPropagation();
    setOpenComment(true);
  };

  const handleDeleteComment = async (e: any) => {
    e.stopPropagation();
    try {
      await fetch(`${host}/comment/delete/${comment.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          isArchive: true,
          img: comment.img,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-[53%] bg-white mx-[auto] max-md:w-[90%]">
        <div>
          <div className="flex flex-row justify-between">
            <p className="subtopic-mpdetail pl-[18px] pt-[18px]">
              {"ผู้พบเห็น "}
              <span className="detail-mpdetail">
                {comment.user.name} {comment.user.surname}
              </span>
            </p>
            {userInfo.id !== comment.userId ? null : (
              <OutsideClickHandler
                onOutsideClick={() => {
                  setIsHidden(true);
                }}
              >
                <img
                  src="/threedot.svg"
                  alt="threedt"
                  className="threedot-mpdetail z-50 absolute  ml-[-43px]"
                  onClick={() => setIsHidden(!isHidden)}
                />

                {!isHidden && (
                  <div className="w-[113px] h-[63px] bg-neutral-100 rounded-[5px] mt-[35px] ml-[-120px] z-[100] absolute flex flex-col justify-evenly">
                    <button className="flex ml-[2px]" onClick={handleComment}>
                      <img src="/pencil.svg" />
                      <p className="ml-[5px]">แก้ไขข้อมูล</p>
                    </button>
                    <hr />
                    <button
                      className="flex ml-[2px]"
                      onClick={handleDeleteComment}
                    >
                      <img src="/trash.svg" />
                      <p className="ml-[5px]">ลบข้อมูล</p>
                    </button>
                  </div>
                )}
              </OutsideClickHandler>
            )}
          </div>

          <p className="subtopic-mpdetail pl-[18px]">
            {"วันที่พบเห็น "}
            <span className="detail-mpdetail">
              {formatDate(comment.foundDatetime)}
            </span>
          </p>
          <p className="subtopic-mpdetail pl-[18px]">
            {"สถานที่ "}
            <span className="detail-mpdetail">{comment.foundPlace}</span>
          </p>
          <p className="subtopic-mpdetail pl-[18px]">
            {"รายละเอียด "}
            <span className="detail-mpdetail">{comment.foundDetail}</span>
          </p>
        </div>
        <div className="flex flex-row pl-[18px] gap-[4px] my-[10px]">
          {comment.img!.map((img, i) => {
            return (
              <RModalImages
                small={img}
                large={img}
                key={i}
                alt="comment pic"
                className="w-[100px] h-[100px] object-cover"
              />
            );
          })}
        </div>
        <p className="text-[12px] pl-[18px]">
          {`แจ้งเบาะแสเมื่อวันที่ ${formatDateTime(comment.createdAt)} (GMT)`}
          {comment.createdAt === comment.updatedAt ? null : (
            <span>{` (แก้ไขข้อมูลล่าสุดวันที่ ${formatDateTime(
              comment.updatedAt
            )} (GMT))`}</span>
          )}
        </p>
      </div>
      <EditComment
        openComment={openComment}
        onClose={() => setOpenComment(false)}
        comment={comment}
      />
    </>
  );
};

export default Comment;
