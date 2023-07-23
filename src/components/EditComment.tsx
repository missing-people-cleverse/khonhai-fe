import { DatePicker } from "@mui/x-date-pickers";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useNavigate, useParams } from "react-router-dom";
import { host } from "../constant";
import useUserProfile from "../hooks/useUserProfile";
import useComments from "../hooks/useComments";
import { useAuth } from "../context/AuthProvider";

const EditComment = ({ openComment, onClose, comment }: any) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { comments } = useComments(Number(id));
  const { ...userInfo } = useAuth();
  const { userProfile } = useUserProfile();
  const token = localStorage.getItem("token");

  const [foundDate, setfoundDate] = useState(dayjs());
  const [foundDetail, setFoundDetail] = useState<string>("");
  const [foundPlace, setFoundPlace] = useState<string>("");

  //   const getSomeComment: IComment[] = comments.filter(
  //     (comment) => comment.userId === userInfo.id
  //   );
  //   const comment = getSomeComment[0];

  useEffect(() => {
    if (comment) {
      setFoundDetail(comment.foundDetail);
      setFoundPlace(comment.foundPlace);
      const foundDatetime = dayjs(comment.foundDatetime);
      setfoundDate(foundDatetime);
    }
  }, [comment]);

  const handleChangeFoundDate = (value: any) => {
    setfoundDate(value);
  };
  const handleChangeFoundDetail = (e: any) => {
    const value = e.target.value;
    setFoundDetail(value);
  };
  const handleChangeFoundPlace = (e: any) => {
    const value = e.target.value;
    setFoundPlace(value);
  };

  const handleEdit = async (e: any) => {
    e.preventDefault();
    try {
      await fetch(`${host}/comment/edit/${comment.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          foundPlace: foundPlace,
          foundDatetime: foundDate.toISOString(),
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
      navigate(`/content/${id}`);
    }
  };

  return (
    // bg-neutral-200 bg-opacity-50
    <>
      {openComment && (
        <div
          className="z-[800] w-screen h-screen flex justify-center fixed mt-[-400px]"
          onClick={(e) => {
            e.stopPropagation();
            onClose;
          }}
        >
          <div className="bg-white h-[486px] w-[880px] rounded-[10px] ">
            <div className="bg-primary rounded-t-[10px]">
              <div className="flex justify-between">
                <div className="font-bold text-2xl text-text_light pt-[30px] pl-[40px] pb-[17px] ">
                  แก้ไขข้อมูลเบาะแสคนหาย
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
                  {userProfile!.user.name} {userProfile!.user.surname}
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
                  required
                  value={foundPlace}
                  onChange={handleChangeFoundPlace}
                />
              </div>
              <div className="form-user">
                <label>รายละเอียดเพิ่มเติม</label>
                <input
                  type="text"
                  placeholder="รายละเอียดเพิ่มเติม"
                  className="inputBox-user w-[90%]"
                  required
                  value={foundDetail}
                  onChange={handleChangeFoundDetail}
                />
              </div>
              <button className="bg-zinc-300 rounded-[5px] text-center text-xs pt-[4px] pb-[4px] pl-[4px] pr-[4px] hover:bg-zinc-500 hover:text-white w-[15%]">
                อัพโหลดรูปภาพ
              </button>
            </div>
            <div className="flex flex-row justify-center gap-[50px]">
              <button className="btn-pink w-[80px]" onClick={handleEdit}>
                แก้ไข
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

export default EditComment;
