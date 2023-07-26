import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { host } from "../constant";
import useUserProfile from "../hooks/useUserProfile";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Bangkok");

const CreateComment = ({ openComment, onClose, content }: any) => {
  const [foundDate, setfoundDate] = useState(dayjs(Date.now()));
  const [foundDetail, setFoundDetail] = useState("");
  const [foundPlace, setFoundPlace] = useState("");
  const { userProfile } = useUserProfile();

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleChangeFoundDate = (value: any) => {
    setfoundDate(value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await fetch(`${host}/comment/${content.id}`, {
        method: "POST",
        body: JSON.stringify({
          foundPlace: foundPlace,
          foundDatetime: foundDate,
          foundDetail: foundDetail,
          img: "mp123",
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("eiei");
      return window.location.reload();
    } catch (err) {
      console.log(err);
    } finally {
      navigate(`/content/${content.id}`);
    }
  };

  return (
    // bg-neutral-200 bg-opacity-50
    <>
      {openComment && userProfile && userProfile.user && (
        <div
          className="z-[800] flex justify-center fixed mt-[-50px]"
          onClick={(e) => {
            e.stopPropagation();
            onClose;
          }}
        >
          <div className="bg-white h-[486px] w-[880px] rounded-[10px] ">
            <div className="bg-primary rounded-t-[10px]">
              <div className="flex justify-between">
                <div className="font-bold text-2xl text-text_light pt-[30px] pl-[40px] pb-[17px] ">
                  แจ้งเบาะแสคนหาย
                </div>
                <img
                  src="/Close_round.svg"
                  className="mr-[20px] mb-[20px] cursor-pointer "
                  onClick={onClose}
                />
              </div>
            </div>

            <div className="flex flex-col ml-[40px] mr-[40px] mt-[26px] gap-[12px]">
              <p className="subtopic-mpdetail text-black">
                {"ผู้พบเห็น "}
                <span>
                  {userProfile.user.name} {userProfile.user.surname}
                </span>
              </p>

              <div
                className="form-user"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <label>วันที่พบ</label>
                <DatePicker
                  label="วันที่พบ"
                  value={foundDate}
                  onChange={handleChangeFoundDate}
                  className="w-[30%] z-[9000]"
                />
              </div>
              <div className="form-user">
                <label>สถานที่ที่พบ</label>
                <input
                  type="text"
                  placeholder="สถานที่ที่พบ"
                  className="inputBox-user w-[90%]"
                  value={foundPlace}
                  onChange={(e) => setFoundPlace(e.target.value)}
                  required
                />
              </div>
              <div className="form-user">
                <label>รายละเอียดเพิ่มเติม</label>
                <input
                  type="text"
                  placeholder="รายละเอียดเพิ่มเติม"
                  className="inputBox-user w-[90%]"
                  value={foundDetail}
                  onChange={(e) => setFoundDetail(e.target.value)}
                  required
                />
              </div>
              <button className="bg-zinc-300 rounded-[5px] text-center text-xs pt-[4px] pb-[4px] pl-[4px] pr-[4px] hover:bg-zinc-500 hover:text-white w-[15%]">
                อัพโหลดรูปภาพ
              </button>
            </div>
            <div className="flex flex-row justify-center gap-[50px]">
              <button className="btn-pink w-[80px]" onClick={handleSubmit}>
                ตกลง
              </button>
              <button className="btn-grey w-[80px]" onClick={onClose}>
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateComment;
