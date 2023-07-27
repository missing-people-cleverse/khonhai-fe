import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs from "dayjs";
import { host } from "../constant";
import useUserProfile from "../hooks/useUserProfile";
import timezone from "dayjs/plugin/timezone";
import { toast } from "react-toastify";
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Bangkok");

const CreateComment = ({ openComment, onClose, content }: any) => {
  const [foundDate, setfoundDate] = useState(dayjs(Date.now()));
  const [foundDetail, setFoundDetail] = useState("");
  const [foundPlace, setFoundPlace] = useState("");
  const { userProfile } = useUserProfile();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const token = localStorage.getItem("token");

  const handleChangeFoundDate = (value: any) => {
    setfoundDate(value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const formData: any = new FormData();
      formData.append("foundPlace", foundPlace);
      formData.append("foundDatetime", foundDate);
      formData.append("foundDetail", foundDetail);
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append("photos", selectedFiles[i]);
      }

      await fetch(`${host}/comment/${content.id}`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("แจ้งเบาะแสสำเร็จ");
      setTimeout(() => {
        window.location.reload();
      }, 1300);
    } catch (err) {
      toast.error("แจ้งเบาะแสไม่สำเร็จ");
      console.log(err);
    }
  };

  return (
    <>
      {openComment && userProfile && userProfile.user && (
        <div
          className={
            location.pathname === "/content"
              ? "z-[800] flex justify-center fixed mt-[-50px] ml-[120px] max-lg:ml-[0] max-lg:w-8/12 max-md:w-10/12 max-md:ml-[-80px] max-md:mt-[-100px]"
              : "z-[800] flex justify-center fixed mt-[20px] max-lg:mt-[10px] max-lg:w-9/12 max-md:w-10/12"
          }
          onClick={(e) => {
            e.stopPropagation();
            onClose;
          }}
        >
          <div className="bg-white h-[512px] w-[800px] rounded-[10px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
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

            <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                    className="w-[30%] z-[9000] max-md:w-[50%]"
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
                  <div>
                    <label className="flex flex-col pt-[10px] ">
                      อัพโหลดรูปภาพ
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const files = e.target.files;
                        if (files) {
                          setSelectedFiles((prevSelectedFiles) => [
                            ...prevSelectedFiles,
                            ...Array.from(files),
                          ]);
                        }
                      }}
                      multiple
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center gap-[50px]">
                <button className="btn-pink w-[80px]" type="submit">
                  ตกลง
                </button>
                <button className="btn-grey w-[80px]" onClick={onClose}>
                  ยกเลิก
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateComment;
