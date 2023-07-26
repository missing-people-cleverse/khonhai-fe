import { useNavigate, useParams } from "react-router-dom";
import useContent from "../hooks/useContent";
import { useState } from "react";
import PageHeader from "./PageHeader";
import OutsideClickHandler from "react-outside-click-handler";
import { formatDateTime, formatDate } from "../utils/index";
import { useAuth } from "../context/AuthProvider";
import CreateComment from "./CreateComment";
import { host } from "../constant";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RModalImages } from "react-modal-images";

const imgs = [
  { id: "1", src: "/mp.jpg" },
  { id: "3", src: "/mp3.jpg" },
  { id: "2", src: "/mp4.jpg" },
  { id: "4", src: "/mp2.jpeg" },
];

const MPDetail = () => {
  const { id } = useParams();
  const { content } = useContent(Number(id));
  const [isHidden, setIsHidden] = useState<Boolean>(true);
  const navigate = useNavigate();
  const { ...userInfo } = useAuth();
  const [openComment, setOpenComment] = useState(false);
  const { isLoggedIn } = useAuth();
  const [slide, setSlide] = useState(0);

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

  const handleNextSlide = () => {
    setSlide(slide === imgs.length - 1 ? 0 : slide + 1);
  };
  const handlePrevSlide = () => {
    setSlide(slide === 0 ? imgs.length - 1 : slide - 1);
  };

  return (
    <>
      <PageHeader name="ข้อมูลคนหาย" />
      {content && (
        <div className="flex justify-center ">
          <div className="w-[auto] bg-white mt-10 ">
            <div className="flex flex-row justify-evenly gap-[10px] max-md:flex-col">
              <div className="flex relative object-cover">
                <IoIosArrowBack
                  className="arrow left-1 top-[230px]"
                  onClick={handlePrevSlide}
                />
                {imgs.map((img, i) => (
                  <RModalImages
                    small={img.src}
                    className={
                      slide === i
                        ? "thumbnail-mpdetail max-md:h-[30rem] max-md:w-[30rem]"
                        : "thumbnail-mpdetail-hidden"
                    }
                    large={img.src}
                    key={i}
                  />
                ))}
                <IoIosArrowForward
                  className="arrow right-1 top-[230px]"
                  onClick={handleNextSlide}
                />
                <span className="flex absolute bottom-3 left-[42%]">
                  {imgs.map((_, i) => {
                    return (
                      <button
                        key={i}
                        className={
                          slide === i ? "indicator" : "indicator bg-slate-600"
                        }
                        onClick={() => setSlide(i)}
                      ></button>
                    );
                  })}
                </span>
              </div>

              <div className="flex flex-col gap-[2px] m-[16px]">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <p className="name-mpdetail">
                      {`${content.name}`}
                      {"\n"} {`${content.surname}`}
                    </p>
                    {content.status !== "พบแล้ว" ? (
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
                          className="threedot-mpdetail ml-[10px]"
                          onClick={() => setIsHidden(!isHidden)}
                        />
                        {!isHidden && (
                          <div className="w-[113px] h-[63px] bg-neutral-100 rounded-[-3px] mt-[0px] ml-[-68px] z-[100] absolute flex flex-col justify-evenly">
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
                    {formatDate(content.missingDatetime)}
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

                <div className="text-[12px] pt-[8px]">
                  {`ประกาศเมื่อวันที่ ${formatDateTime(
                    content.createdAt
                  )} (GMT)`}
                  {content.createdAt !== content.updatedAt ? (
                    <p>
                      {` (แก้ไขข้อมูลล่าสุดวันที่
                  ${formatDateTime(content.updatedAt)} (GMT))`}
                    </p>
                  ) : null}
                </div>
                <button
                  className="btn-pink w-[38%] ml-[auto] mr-[10px] mb-[10px] mt-[10px]"
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
