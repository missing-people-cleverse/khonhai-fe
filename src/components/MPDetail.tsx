import { useParams } from "react-router-dom";
import useContent from "../hooks/useContent";

const MPDetail = () => {
  const { id } = useParams();
  const { content } = useContent(Number(id));

  function formatDateTime(dateTime: string) {
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
      {content && (
        <div className="flex justify-center mt-[15px] mb-[15px]">
          <div className="w-[1070px] bg-white rounded-[10px]">
            <img
              src="/threedot.svg"
              alt="threedt"
              className="threedot-mpdetail"
            />
            <img
              src="/mp.jpg"
              alt="missing people"
              className="thumbnail-mpdetail"
            />
            <p className="name-mpdetail">
              {content.name} {content.surname}
            </p>
            {content.status !== "FOUNDED" ? (
              <div className="unfounded-mpdetail">ยังตามหาอยู่</div>
            ) : (
              <div className="founded-mpdetail">พบแล้ว</div>
            )}

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
              <span className="detail-mpdetail">{content.missingDatetime}</span>
            </p>
            <p className="subtopic-mpdetail">
              {"สถานที่พบเห็นล่าสุด "}
              <span className="detail-mpdetail">
                {content.place} {content.province}
              </span>
            </p>
            <p className="subtopic-mpdetail">
              {"รายละเอียดเพิ่มเติม "}
              <span className="detail-mpdetail">{content.missingDetail}</span>
            </p>
            <p className="subtopic-mpdetail">
              {"ใครพบเห็นติดต่อได้ที่ "}
              <span className="detail-mpdetail">
                {content.user!.phoneNumber}{" "}
                {` (${content.user!.name} ${content.user!.surname})`}
              </span>
            </p>
            <p className="text-[14px]">
              {`ประกาศเมื่อวันที่ ${formatDateTime(content.createdAt)}`}
              {content.createdAt !== content.updatedAt ? (
                <span>
                  {`(แก้ไขข้อมูลล่าสุดวันที่
                  ${content.updatedAt}
                  )`}
                </span>
              ) : null}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MPDetail;
