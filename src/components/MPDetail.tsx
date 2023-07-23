import { useNavigate, useParams } from "react-router-dom";
import useContent from "../hooks/useContent";
import { useState } from "react";
import PageHeader from "./PageHeader";
import OutsideClickHandler from "react-outside-click-handler";
import { formatDateTime } from "../utils/index";
import { useAuth } from "../context/AuthProvider";
import CreateComment from "./CreateComment";
import { host } from "../constant";

const MPDetail = () => {
  const { id } = useParams();
  const { content } = useContent(Number(id));
  const [isHidden, setIsHidden] = useState<Boolean>(true);
  const navigate = useNavigate();
  const { ...userInfo } = useAuth();
  const [openComment, setOpenComment] = useState(false);
  const { isLoggedIn } = useAuth();

  const handleComment = (e: any) => {
    e.stopPropagation();
    if (isLoggedIn) {
      setOpenComment(true);
    } else {
      navigate("/login");
    }
  };

  const token = localStorage.getItem("token");
  const handleDeleteContent = async (e: any) => {
    e.stopPropagation();
    try {
      if (content?.id)
        await fetch(`${host}/content/delete/${content.id}`, {
          method: "PATCH",
          body: JSON.stringify({
            isArchive: true,
            status: content.status,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
      navigate("/content");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <PageHeader name="ข้อมูลคนหาย" />
      {content && (
        <div className="flex justify-center mt-10 mb-[15px]">
          <div className="w-[60%] bg-white ">
            <div className="flex flex-row justify-between gap-[20px]">
              <div className="h-[300px] w-[auto] ml-[auto] mr-[auto] mt-[20px]">
                <img
                  src="/mp.jpg"
                  alt="missing people"
                  className="thumbnail-mpdetail"
                />
              </div>

              <div className="flex flex-col gap-[2px] w-[50%] mr-[10px]">
                <div className="flex flex-row items-center  justify-between">
                  <div className="flex flex-row items-center">
                    <p className="name-mpdetail">
                      {content.name} {content.surname}
                    </p>
                    {content.status !== "FOUNDED" ? (
                      <div className="unfounded-mpdetail">ยังตามหาอยู่</div>
                    ) : (
                      <div className="founded-mpdetail">พบแล้ว</div>
                    )}
                  </div>

                  {userInfo.id !== content.userId ? null : (
                    <OutsideClickHandler
                      onOutsideClick={() => {
                        setIsHidden(true);
                      }}
                    >
                      <div>
                        <img
                          src="/threedot.svg"
                          alt="threedt"
                          className="threedot-mpdetail"
                          onClick={() => setIsHidden(!isHidden)}
                        />
                        {!isHidden && (
                          <div className="w-[113px] h-[63px] bg-neutral-100 rounded-[5px] mt-[30px] ml-[-80px] z-[100] absolute flex flex-col justify-evenly">
                            <button
                              className="flex ml-[2px]"
                              onClick={() => {
                                navigate(`/content/${id}/edit`);
                              }}
                            >
                              <img src="/pencil.svg" />
                              <p className="ml-[5px]">แก้ไขข้อมูล</p>
                            </button>
                            <hr />
                            <button
                              className="flex ml-[2px]"
                              onClick={handleDeleteContent}
                            >
                              <img src="/trash.svg" />
                              <p className="ml-[5px]">ลบข้อมูล</p>
                            </button>
                          </div>
                        )}
                      </div>
                    </OutsideClickHandler>
                  )}
                </div>
                <p className="subtopic-mpdetail">
                  {"ชื่อเล่น "}
                  <span className="detail-mpdetail">{content.nickname}</span>
                </p>
                <p className="subtopic-mpdetail">
                  {"สัญชาติ "}
                  <span className="detail-mpdetail">{content.nationality}</span>
                </p>
                <p className="subtopic-mpdetail">
                  {"อายุขณะที่หาย "}
                  <span className="detail-mpdetail">
                    {`${content.ageLastSeen} ปี`}
                  </span>
                </p>
                <ul className="subtopic-mpdetail">
                  ลักษณะ
                  <li className="detail-mpdetail li-mpdetail">{`ผิวสี${content.skin}`}</li>
                  <li className="detail-mpdetail li-mpdetail">
                    {`ส่วนสูง ${content.height} เซนติเมตร`}
                  </li>
                  <li className="detail-mpdetail li-mpdetail">
                    {`น้ำหนัก ${content.weight} กิโลกรัม`}
                  </li>
                  <li className="detail-mpdetail li-mpdetail">
                    {content.remark}
                  </li>
                </ul>
                <p className="subtopic-mpdetail">
                  {"วันที่พบเห็นล่าสุด "}
                  <span className="detail-mpdetail">
                    {content.missingDatetime}
                  </span>
                </p>
                <p className="subtopic-mpdetail">
                  {"สถานที่พบเห็นล่าสุด "}
                  <span className="detail-mpdetail">
                    {content.place} {content.province}
                  </span>
                </p>
                <p className="subtopic-mpdetail">
                  {"รายละเอียดเพิ่มเติม "}
                  <span className="detail-mpdetail">
                    {content.missingDetail}
                  </span>
                </p>
                <p className="subtopic-mpdetail">
                  {"ใครพบเห็นติดต่อได้ที่ "}
                  <span className="detail-mpdetail">
                    {content.user.phoneNumber}{" "}
                    {` (${content.user.name} ${content.user.surname})`}
                  </span>
                </p>

                <p className="text-[12px]">
                  {`ประกาศเมื่อวันที่ ${formatDateTime(content.createdAt)}`}
                  {content.createdAt !== content.updatedAt ? (
                    <span>
                      {`(แก้ไขข้อมูลล่าสุดวันที่
                  ${formatDateTime(content.updatedAt)})`}
                    </span>
                  ) : null}
                </p>
                <button
                  className="btn-pink w-[38%] ml-[auto] mr-[10px] mb-[10px]"
                  onClick={handleComment}
                >
                  แจ้งเบาะแส
                </button>
              </div>
            </div>
          </div>
          <CreateComment
            openComment={openComment}
            onClose={() => setOpenComment(false)}
            content={content}
          />
        </div>
      )}
    </>
  );
};

export default MPDetail;
