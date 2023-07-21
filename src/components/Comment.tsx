const Comment = (props: any) => {
  const { comment } = props;

  const imgs = [
    { id: "2", src: "/mp.jpg" },
    { id: "1", src: "/mp.jpg" },
    { id: "3", src: "/mp.jpg" },
    { id: "4", src: "/mp.jpg" },
  ];
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
      <div className="flex flex-col gap-[2px] bg-white">
        <p className="subtopic-mpdetail pl-[18px] pt-[18px]">
          {"ผู้พบเห็น "}
          <span className="detail-mpdetail">
            {/* {comment.user.name} {comment.user.surname} */}
          </span>
        </p>
        <p className="subtopic-mpdetail pl-[18px]">
          {"วันที่พบเห็น "}
          <span className="detail-mpdetail">{comment.foundDatetime}</span>
        </p>
        <p className="subtopic-mpdetail pl-[18px]">
          {"สถานที่ "}
          <span className="detail-mpdetail">{comment.foundPlace}</span>
        </p>
        <p className="subtopic-mpdetail pl-[18px]">
          {"รายละเอียด "}
          <span className="detail-mpdetail">{comment.foundDetail}</span>
        </p>
        <div className="flex flex-row pl-[18px] gap-[4px]">
          {imgs.map((img) => {
            return (
              <img
                src={img.src}
                key={img.id}
                alt=""
                className="w-[100px] h-[100px]"
              />
            );
          })}
        </div>
        <p className="text-[12px] pl-[18px]">
          {`แจ้งเบาะแสเมื่อวันที่ {formatDateTime(comment.createdAt)}`}
          {comment.createdAt === comment.updatedAt ? null : (
            <span>{`(แก้ไขข้อมูลล่าสุดวันที่ {formatDateTime(
            comment.updatedAt
          )})`}</span>
          )}
        </p>
      </div>
    </>
  );
};

export default Comment;
