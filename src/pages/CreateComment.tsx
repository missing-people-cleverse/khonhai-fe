import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs from "dayjs";

const CreateComment = () => {
  const [foundDate, setfoundDate] = useState(dayjs(Date.now()));

  const handleChangeFoundDate = (value: any) => {
    setfoundDate(value);
  };

  return (
    <>
      <div className="bg-neutral-200 bg-opacity-50 z-[800] absolute w-[100%] h-[100%] flex justify-center">
        <div className="bg-white m-[auto] h-[486px] w-[880px] rounded-[10px]">
          <div className="bg-primary rounded-t-[10px]">
            <div className="flex justify-between">
              <div className="font-bold text-2xl text-text_light pt-[30px] pl-[40px] pb-[17px] ">
                แจ้งเบาะแสคนหาย
              </div>
              <img
                src="/Close_round.svg"
                className="mr-[20px] mb-[20px] cursor-pointer "
              />
            </div>
          </div>

          <div className="flex flex-col ml-[40px] mr-[40px] mt-[26px] gap-[12px]">
            <p className="subtopic-mpdetail text-black">ผู้พบเห็น</p>

            <div className="form-user">
              <label>วันที่พบ</label>
              <DatePicker
                label="วันที่พบ"
                value={foundDate}
                onChange={handleChangeFoundDate}
                className="w-[30%]"
              />
            </div>
            <div className="form-user">
              <label>สถานที่ที่พบ</label>
              <input
                type="text"
                placeholder="สถานที่ที่พบ"
                className="inputBox-user w-[90%]"
                required
              />
            </div>
            <div className="form-user">
              <label>รายละเอียดเพิ่มเติม</label>
              <input
                type="text"
                placeholder="รายละเอียดเพิ่มเติม"
                className="inputBox-user w-[90%]"
                required
              />
            </div>
            <button className="bg-zinc-300 rounded-[5px] text-center text-xs pt-[4px] pb-[4px] pl-[4px] pr-[4px] hover:bg-zinc-500 hover:text-white w-[15%]">
              อัพโหลดรูปภาพ
            </button>
          </div>
          <div className="flex flex-row justify-center gap-[50px]">
            <button className="btn-pink w-[80px]">ตกลง</button>
            <button className="btn-grey w-[80px]">ยกเลิก</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateComment;
