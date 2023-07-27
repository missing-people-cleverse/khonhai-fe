import { FormEvent, useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { FormControl, MenuItem, Select } from "@mui/material";
import { StyleInput } from "./Register";
import {
  genderList,
  nationalityList,
  provinceList,
  skinList,
  statusList,
} from "../data/SelectableData";
import { DatePicker } from "@mui/x-date-pickers";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import useContent from "../hooks/useContent";
import { toast } from "react-toastify";
import WithGuard from "../guards/WithGuard";

const EditContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { content, editContent } = useContent(Number(id));

  const [dateOfBirth, setDateOfBirth] = useState(dayjs(Date.now()));
  const [lastseenDate, setLastseenDate] = useState(dayjs(Date.now()));
  const [updateName, setUpdateName] = useState<string>("");
  const [updateSurname, setUpdateSurname] = useState<string>("");
  const [updateNickname, setUpdateNickname] = useState<string>("");
  const [updateAgeLastSeen, setUpdateAgeLastSeen] = useState<string>("");
  const [updateWeight, setUpdateWeight] = useState<string>("");
  const [updateHeight, setUpdateHeight] = useState<string>("");
  const [updateRemark, setUpdateRemark] = useState<string>("");
  const [updatePlace, setUpdatePlace] = useState<string>("");
  const [updateMissingDetail, setUpdateMissingDetail] = useState<string>("");
  const [contentInfo, setContentInfo] = useState({
    gender: "",
    nationality: "",
    province: "",
    skin: "",
    status: "",
  });

  useEffect(() => {
    if (content) {
      setDateOfBirth(dayjs(content.dateOfBirth));
      setLastseenDate(dayjs(content.missingDatetime));
      setUpdateName(content.name);
      setUpdateSurname(content.surname);
      setUpdateNickname(content.nickname);
      setUpdateAgeLastSeen(`${content.ageLastSeen}`);
      setUpdateWeight(`${content.weight}`);
      setUpdateHeight(`${content.height}`);
      setUpdateRemark(content.remark);
      setUpdatePlace(content.place);

      setUpdateMissingDetail(content.missingDetail);
      setContentInfo({
        gender: content.gender,
        nationality: content.nationality,
        province: content.province,
        skin: content.skin,
        status: content.status,
      });
    }
  }, [content]);

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const value = event.target.value;
    setContentInfo({ ...contentInfo, [event.target.name]: value });
  };

  const handleChangeDob = (value: any) => {
    setDateOfBirth(value);
  };

  const handleChangeLastseen = (value: any) => {
    setLastseenDate(value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: edit image in body to be actual img url
    try {
      await editContent({
        isArchive: false,
        name: updateName,
        surname: updateSurname,
        nickname: updateNickname,
        img: content?.img,
        nationality: contentInfo.nationality,
        ageLastSeen: Number(updateAgeLastSeen),
        dateOfBirth: `${dateOfBirth}`,
        gender: contentInfo.gender,
        weight: Number(updateWeight),
        height: Number(updateHeight),
        skin: contentInfo.skin,
        remark: updateRemark,
        status: contentInfo.status,
        province: contentInfo.province,
        place: updatePlace,
        missingDatetime: `${lastseenDate}`,
        missingDetail: updateMissingDetail,
      });
      toast.success("แก้ไขข้อมูลสำเร็จ");
      navigate(`/content/${id}`);
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  return (
    <>
      <PageHeader name="แก้ไขข้อมูลคนหาย" />
      <div className="bg-white w-[60rem] mx-auto mt-10 mb-10">
        <p className="text-primary font-semibold text-xl px-10 pt-10">
          ข้อมูลส่วนตัวคนหาย
        </p>
        <form
          className="flex flex-row gap-20 p-10"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="flex flex-col gap-3 w-1/2">
            <section className="flex flex-row gap-6">
              <div className="form-user">
                <label>ชื่อ</label>
                <input
                  type="text"
                  placeholder="ชื่อ"
                  className="inputBox-user"
                  value={updateName}
                  onChange={(e) => setUpdateName(e.target.value)}
                  required
                />
              </div>
              <div className="form-user">
                <label>นามสกุล</label>
                <input
                  type="text"
                  placeholder="นามสกุล"
                  className="inputBox-user"
                  value={updateSurname}
                  onChange={(e) => setUpdateSurname(e.target.value)}
                  required
                />
              </div>
            </section>
            <section className="flex flex-row gap-6">
              <div className="form-user">
                <label>ชื่อเล่น</label>
                <input
                  type="text"
                  placeholder="ชื่อเล่น"
                  className="inputBox-user"
                  value={updateNickname}
                  onChange={(e) => setUpdateNickname(e.target.value)}
                  required
                />
              </div>
              <div className="form-user">
                <label>เพศ</label>
                <FormControl sx={{ m: 0, width: 100 }}>
                  <Select
                    value={contentInfo.gender}
                    name="gender"
                    onChange={handleChange}
                    input={<StyleInput />}
                  >
                    {genderList.map((gender) => (
                      <MenuItem key={gender} value={gender}>
                        {gender}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="form-user">
                <label>สัญชาติ</label>
                <FormControl sx={{ m: 0, width: 120 }}>
                  <Select
                    value={contentInfo.nationality}
                    name="nationality"
                    onChange={handleChange}
                    input={<StyleInput />}
                  >
                    {nationalityList.map((nation) => (
                      <MenuItem key={nation} value={nation}>
                        {nation}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </section>
            <section className="flex flex-row gap-6">
              <div className="form-user">
                <label>อายุขณะที่หาย</label>
                <input
                  type="number"
                  placeholder="อายุ(ปี)"
                  className="inputBox-user w-[6rem]"
                  value={updateAgeLastSeen}
                  onChange={(e) => setUpdateAgeLastSeen(e.target.value)}
                  required
                />
              </div>
              <div className="form-user">
                <label>ส่วนสูง</label>
                <input
                  type="number"
                  placeholder="ส่วนสูง(เซนติเมตร)"
                  className="inputBox-user w-[10rem]"
                  value={updateHeight}
                  onChange={(e) => setUpdateHeight(e.target.value)}
                  required
                />
              </div>
              <div className="form-user">
                <label>น้ำหนัก</label>
                <input
                  type="number"
                  placeholder="น้ำหนัก(กิโลกรัม)"
                  className="inputBox-user w-[10rem]"
                  value={updateWeight}
                  onChange={(e) => setUpdateWeight(e.target.value)}
                  required
                />
              </div>
            </section>
            <section className="flex flex-row gap-6">
              <div className="form-user">
                <label>วันเกิด</label>
                <DatePicker
                  label="วันเกิด"
                  value={dateOfBirth}
                  onChange={handleChangeDob}
                />
              </div>
              <div className="form-user">
                <label>วันที่หาย</label>
                <DatePicker
                  label="วันที่หาย"
                  value={lastseenDate}
                  onChange={handleChangeLastseen}
                />
              </div>
            </section>
            <div className="form-user">
              <label>จุดสังเกต</label>
              <input
                type="text"
                placeholder="จุดสังเกตของผู้สูญหาย"
                className="inputBox-user w-[30rem]"
                value={updateRemark}
                onChange={(e) => setUpdateRemark(e.target.value)}
                required
              />
              <p className="text-gray-400 text-xs">
                *เช่น มีรอยสักรูปมังกรที่แขน,มีปานดำไบริเวณหลังคอ,
                เป็นโรคความจำเสื่อม,เป็นโรคจิตเภท
              </p>
            </div>
            <div className="form-user">
              <label>รูปร่างและเครื่องแต่งกาย</label>
              <input
                type="text"
                placeholder="แจ้งข้อมูลที่เจอครั้งสุดท้าย ให้ชัดเจนที่สุด"
                className="inputBox-user w-[30rem]"
                value={updateMissingDetail}
                onChange={(e) => setUpdateMissingDetail(e.target.value)}
                required
              />
              <p className="text-gray-400 text-xs">
                *เช่น ใส่เสื้อผ้าสีแดง, กางเกงยีนส์สีดำ, รองเท้าแตะสีแดง
              </p>
            </div>
            <div className="form-user">
              <label>สีผิว</label>
              <FormControl sx={{ m: 0, width: 200 }}>
                <Select
                  value={contentInfo.skin}
                  name="skin"
                  onChange={handleChange}
                  input={<StyleInput />}
                  required
                >
                  {skinList.map((skin) => (
                    <MenuItem key={skin} value={skin}>
                      {skin}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <p className="text-gray-400 text-xs">
                *เลือกสีผิวที่ใกล้เคียงที่สุดของผู้สูญหาย
              </p>
            </div>
            <p className="text-primary font-semibold text-xl pt-7">
              สถานที่พบเห็นล่าสุด
            </p>
            <div className="form-user">
              <label>จังหวัด</label>
              <FormControl sx={{ m: 0, width: 120 }}>
                <Select
                  value={contentInfo.province}
                  name="province"
                  onChange={handleChange}
                  input={<StyleInput />}
                >
                  {provinceList.map((province) => (
                    <MenuItem key={province} value={province}>
                      {province}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="form-user">
              <label>รายละเอียดสถานที่</label>
              <input
                type="text"
                placeholder="แจ้งพื้นที่ที่พบเห็นล่าสุด"
                className="inputBox-user w-[30rem]"
                value={updatePlace}
                onChange={(e) => setUpdatePlace(e.target.value)}
                required
              />
              <p className="text-gray-400 text-xs">
                *เช่น ชื่อหมู่บ้าน, อำเภอ, จังหวัด
              </p>
            </div>
            <p className="text-primary font-semibold text-xl pt-7">สถานะ</p>
            <div className="form-user">
              <FormControl sx={{ m: 0, width: 120 }}>
                <Select
                  value={contentInfo.status}
                  name="status"
                  onChange={handleChange}
                  input={<StyleInput />}
                >
                  {statusList.map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="flex flex-row gap-6 justify-around pt-5">
              <div className="btn-pink w-[10rem]">
                <button type="submit">แก้ไข</button>
              </div>
              <NavLink to="/" className="btn-disabled w-[10rem]">
                ยกเลิก
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-xl">คำแนะนำในการแจ้งคนหาย</p>
            <ul style={{ listStyleType: "circle" }} className="pl-8">
              <li>
                อัพโหลดรูปภาพหน้าตรง และด้านข้าง ที่ปัจจุบันที่สุด
                เพื่อให้ง่ายในการตามหา
              </li>
              <li>
                ถ้ามีรูปภาพเพิ่มเติมก่อนที่จะหายตัว เช่น ภาพกล้องวงจรปิด,
                ภาพที่บังเอิญ ถ่ายไว้ จะช่วยเพิ่มโอกาสในการหาสำเร็จมากขึ้น
              </li>
              <li>
                แจ้งข้อมูลรูปร่างและเครื่องแต่งกายที่เจอครั้งสุดท้าย
                ให้ชัดเจนที่สุด เช่น ใส่เสื้อผ้าสีแดง, กางเกงยีนส์สีดำ,
                รองเท้าแตะสีแดง, สะพายกระเป๋าสีชมพู, มีรอยสักที่แขนเป็นรูปมังกร,
                ผู้สูญหาย มีอาการเป็นโรคความจำเสื่อมระยะต้น เป็นต้น
              </li>
              <li>แจ้งพื้นที่ เช่น ชื่อหมู่บ้าน ,อำเภอ, จังหวัด ให้ชัดเจน</li>
              <li>
                ความชัดเจนและความเร็วในการแจ้งข้อมูล
                เป็นปัจจัยสำคัญในตามหาคนที่สุด
              </li>
            </ul>
          </div>
        </form>
      </div>
    </>
  );
};

export default WithGuard(EditContent);
