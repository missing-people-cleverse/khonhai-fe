import { useParams } from "react-router-dom";
import useContent from "../hooks/useContent";
import { useState } from "react";
import PageHeader from "./PageHeader";

const MPDetail = () => {
  const { id } = useParams();
  const { content } = useContent(Number(id));
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  function formatDateTime(dateTime: string): string {
    const dateDB = new Date(
      Number(dateTime.slice(0, 4)),
      Number(dateTime.slice(5, 7)) - 1,
      Number(dateTime.slice(8, 10))
    );

    const time = `${dateTime.slice(11, 13)}.${dateTime.slice(14, 16)} น.`;

    const date = dateDB.toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return `${date} เวลา ${time}`;
  }

  return (
    <>
      <div
        onClick={() => {
          if (isOpen) {
            setIsOpen(!isOpen);
          }
        }}
      >
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
                    <div>
                      <img
                        src="/threedot.svg"
                        alt="threedt"
                        className="threedot-mpdetail"
                        onClick={() => setIsOpen(!isOpen)}
                      />
                      {isOpen && (
                        <div className="w-[113px] h-[63px] bg-neutral-100 rounded-[5px] mt-[30px] ml-[-80px] z-[100] absolute flex flex-col justify-evenly">
                          <button className="flex ml-[2px]">
                            <img src="/pencil.svg" />
                            <p className="ml-[5px]">แก้ไขข้อมูล</p>
                          </button>
                          <hr />
                          <button className="flex ml-[2px]">
                            <img src="/trash.svg" />
                            <p className="ml-[5px]">ลบข้อมูล</p>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="subtopic-mpdetail">
                    {"ชื่อเล่น "}
                    <span className="detail-mpdetail">{content.nickname}</span>
                  </p>
                  <p className="subtopic-mpdetail">
                    {"สัญชาติ "}
                    <span className="detail-mpdetail">
                      {content.nationality}
                    </span>
                  </p>
                  <p className="subtopic-mpdetail">
                    {"อายุขณะที่หาย "}
                    <span className="detail-mpdetail">
                      {`${content.ageLastSeen} ปี`}
                    </span>
                  </p>
                  <ul className="subtopic-mpdetail">
                    ลักษณะ
                    <li className="detail-mpdetail">{`ผิวสี${content.skin}`}</li>
                    <li className="detail-mpdetail">
                      {`ส่วนสูง ${content.height} เซนติเมตร`}
                    </li>
                    <li className="detail-mpdetail">
                      {`น้ำหนัก ${content.weight} กิโลกรัม`}
                    </li>
                    <li className="detail-mpdetail">{content.remark}</li>
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
                      {content.user!.phoneNumber}{" "}
                      {` (${content.user!.name} ${content.user!.surname})`}
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
                  <button className="btn-pink w-[38%] ml-[auto] mr-[10px] mb-[10px]">
                    แจ้งเบาะแส
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MPDetail;
