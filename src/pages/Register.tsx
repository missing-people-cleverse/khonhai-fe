import { useState } from "react";
import PageHeader from "../components/PageHeader";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputBase,
  MenuItem,
  Select,
  Typography,
  styled,
} from "@mui/material";

const provinces: string[] = ["Bangkok", "Nan", "Ratchaburi"];

const StyleInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 15,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #dcdcdc",
    fontSize: 16,
    padding: "9px 18px 9px 12px",
    "&:focus": {
      borderRadius: 15,
      borderColor: "#455593",
    },
  },
}));

const Register = () => {
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [disabled, setDisabled] = useState(true);

  const handleChange = (event: { target: { value: string } }) => {
    setSelectedProvince(event.target.value);
  };

  const handleCheck = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <PageHeader name="ลงทะเบียน" />
      <div className="bg-bg_white w-[50rem] mx-auto mt-10 mb-10">
        <section className="flex flex-row gap-20 p-10">
          <p className="text-primary font-semibold text-xl">ข้อมูลส่วนตัว</p>
          <form className="flex flex-col gap-4 ">
            <div className="form-user">
              <label>ชื่อผู้ใช้</label>
              <input
                type="text"
                id="username"
                placeholder="ชื่อผู้ใช้"
                className="inputBox-user"
              />
            </div>
            <div className="flex flex-row gap-6">
              <div className="form-user">
                <label>ชื่อ</label>
                <input
                  type="text"
                  placeholder="ชื่อ"
                  className="inputBox-user"
                />
              </div>
              <div className="form-user">
                <label>นามสกุล</label>
                <input
                  type="text"
                  placeholder="นามสกุล"
                  className="inputBox-user"
                />
              </div>
            </div>
            <div className="form-user">
              <label>อีเมล</label>
              <input
                type="email"
                placeholder="อีเมล"
                className="inputBox-user"
              />
            </div>
            <div className="form-user">
              <label>เบอร์โทรศัพท์</label>
              <input
                type="text"
                placeholder="เบอร์โทรศัพท์"
                className="inputBox-user"
              />
            </div>
            <div className="flex flex-row gap-6">
              <div className="form-user">
                <label>รหัสผ่าน</label>
                <input
                  type="password"
                  placeholder="รหัสผ่าน"
                  className="inputBox-user"
                />
              </div>
              <div className="form-user">
                <label>ยืนยันรหัสผ่าน</label>
                <input
                  type="password"
                  placeholder="ยืนยันรหัสผ่าน"
                  className="inputBox-user"
                />
              </div>
            </div>
          </form>
        </section>
        <section className="flex flex-row gap-14 p-10">
          <p className="text-primary font-semibold text-xl">
            ข้อมูลที่อยู่อาศัย
          </p>
          <form className="flex flex-col gap-4 ">
            <div className="form-user">
              <label>ที่อยู่</label>
              <input
                type="text"
                placeholder="ที่อยู่"
                className="inputBox-user"
              />
            </div>
            <div className="flex flex-row gap-6">
              <div className="form-user">
                <label>จังหวัด</label>
                <FormControl sx={{ m: 0, width: 200 }}>
                  <Select
                    value={selectedProvince}
                    onChange={handleChange}
                    input={<StyleInput />}
                  >
                    {provinces.map((province) => (
                      <MenuItem key={province} value={province}>
                        {province}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="form-user">
                <label>รหัสไปรษณีย์</label>
                <input
                  type="text"
                  placeholder="รหัสไปรษณีย์"
                  className="inputBox-user"
                />
              </div>
            </div>
          </form>
        </section>
        <FormGroup className="ml-[14rem]">
          <FormControlLabel
            required
            control={
              <Checkbox sx={{ color: "#dcdcdc" }} onChange={handleCheck} />
            }
            style={{
              color: "#232324",
            }}
            label={
              <Typography style={{ fontFamily: "IBM Plex Sans Thai" }}>
                ยินยอมให้เก็บข้อมูลส่วนตัว
              </Typography>
            }
          />
        </FormGroup>
        <section className="py-8 w-32 ml-[40rem]">
          <div className={!disabled ? "btn-pink" : "btn-disabled"}>
            <button type="submit" disabled={disabled}>
              ลงทะเบียน
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
