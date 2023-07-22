import { FormControl, MenuItem, Select } from "@mui/material";
import PageHeader from "../components/PageHeader";
import { FormEvent, useState } from "react";
import { StyleInput } from "./Register";
import {
  genderList,
  nationalityList,
  provinceList,
  skinList,
} from "../data/SelectableData";
import { DatePicker } from "@mui/x-date-pickers";
import { NavLink, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { useAuth } from "../context/AuthProvider";
import { host } from "../constant";

const CreateContent = () => {
  const { getAuthHeader } = useAuth();
  const navigate = useNavigate();

  const [dateOfBirth, setDateOfBirth] = useState(dayjs(Date.now()));
  const [lastseenDate, setLastseenDate] = useState(dayjs(Date.now()));
  const [inputName, setInputName] = useState<string>("");
  const [inputSurname, setInputSurname] = useState<string>("");
  const [inputNickname, setInputNickname] = useState<string>("");
  const [inputAgeLastSeen, setInputAgeLastSeen] = useState<string>("");
  const [inputWeight, setInputWeight] = useState<string>("");
  const [inputHeight, setInputHeight] = useState<string>("");
  const [inputRemark, setInputRemark] = useState<string>("");
  const [inputPlace, setInputPlace] = useState<string>("");
  const [inputMissingDetail, setInputMissingDetail] = useState<string>("");

  const [contentInfo, setContentInfo] = useState({
    gender: "",
    nationality: "",
    province: "",
    skin: "",
  });

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
      const res = await fetch(`${host}/content/create`, {
        method: "POST",
        body: JSON.stringify({
          isArchive: false,
          name: inputName,
          surname: inputSurname,
          nickname: inputNickname,
          img: "image",
          nationality: contentInfo.nationality,
          ageLastSeen: Number(inputAgeLastSeen),
          dateOfBirth: `${dateOfBirth}`,
          gender: contentInfo.gender,
          weight: Number(inputWeight),
          height: Number(inputHeight),
          skin: contentInfo.skin,
          remark: inputRemark,
          status: "ยังไม่พบ",
          province: contentInfo.province,
          place: inputPlace,
          missingDatetime: `${lastseenDate}`,
          missingDetail: inputMissingDetail,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          ...getAuthHeader(),
        },
      });

      const data = await res.json();
      navigate("/content");
      return data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  return (
    <>
      <PageHeader name="แจ้งคนหาย" />
      <div className="bg-white w-[60rem] mx-auto mt-10 mb-10">
        <p className="text-primary font-semibold text-xl px-10 pt-10">
          ข้อมูลส่วนตัวคนหาย
        </p>
        <form className="flex flex-row gap-20 p-10" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 w-1/2">
            <section className="flex flex-row gap-6">
              <div className="form-user">
                <label>ชื่อ</label>
                <input
                  type="text"
                  placeholder="ชื่อ"
                  className="inputBox-user"
                  onChange={(e) => setInputName(e.target.value)}
                  required
                />
              </div>
              <div className="form-user">
                <label>นามสกุล</label>
                <input
                  type="text"
                  placeholder="นามสกุล"
                  className="inputBox-user"
                  onChange={(e) => setInputSurname(e.target.value)}
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
                  onChange={(e) => setInputNickname(e.target.value)}
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
                    required
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
                    required
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
                  onChange={(e) => setInputAgeLastSeen(e.target.value)}
                  required
                />
              </div>
              <div className="form-user">
                <label>ส่วนสูง</label>
                <input
                  type="number"
                  placeholder="ส่วนสูง(เซนติเมตร)"
                  className="inputBox-user w-[10rem]"
                  onChange={(e) => setInputHeight(e.target.value)}
                  required
                />
              </div>
              <div className="form-user">
                <label>น้ำหนัก</label>
                <input
                  type="number"
                  placeholder="น้ำหนัก(กิโลกรัม)"
                  className="inputBox-user w-[10rem]"
                  onChange={(e) => setInputWeight(e.target.value)}
                  required
                />
              </div>
            </section>
            <section className="flex flex-row gap-6">
              <div className="form-user">
                <label>วันเกิด</label>
                {/* Todo styling date picker box  */}
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
                onChange={(e) => setInputRemark(e.target.value)}
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
                onChange={(e) => setInputMissingDetail(e.target.value)}
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
            <p className="text-primary font-semibold text-xl pt-10">
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
                  required
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
                onChange={(e) => setInputPlace(e.target.value)}
                required
              />
              <p className="text-gray-400 text-xs">
                *เช่น ชื่อหมู่บ้าน, อำเภอ, จังหวัด
              </p>
            </div>
            <div className="flex flex-row gap-6 justify-around pt-5">
              <div className="btn-pink w-[10rem]">
                <button type="submit">แจ้งคนหาย</button>
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

export default CreateContent;
