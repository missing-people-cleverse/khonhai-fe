import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs from "dayjs";

const CreateComment = () => {
  const [dateOfBirth, setDateOfBirth] = useState(dayjs(Date.now()));

  const handleChangeDob = (value: any) => {
    setDateOfBirth(value);
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
          <p>ผู้พบเห็น</p>

          <div className="form-user">
            <label>วันที่พบ</label>
            <DatePicker
              label="วันที่พบ"
              value={dateOfBirth}
              onChange={handleChangeDob}
            />
          </div>
          <div className="form-user">
            <label>สถานที่ที่พบ</label>
            <input
              type="text"
              placeholder="สถานที่ที่พบ"
              className="inputBox-user"
              required
            />
          </div>
          <div className="form-user">
            <label>รายละเอียดเพิ่มเติม</label>
            <input
              type="text"
              placeholder="รายละเอียดเพิ่มเติม"
              className="inputBox-user"
              required
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateComment;
