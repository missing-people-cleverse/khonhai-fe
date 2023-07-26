import { FormEvent, useState } from "react";
import PageHeader from "../components/PageHeader";
import { toast } from "react-toastify";
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
import { host } from "../constant";
import { useNavigate } from "react-router-dom";
import { provinceList } from "../data/SelectableData";

export const StyleInput = styled(InputBase)(({ theme }) => ({
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
  const [isUserValid, setIsUserValid] = useState<boolean>(true);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(true);
  const navigate = useNavigate();
  const [inputUsername, setInputUsername] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState<string>("");
  const [inputName, setInputName] = useState<string>("");
  const [inputSurname, setInputSurname] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPhoneNum, setInputPhoneNum] = useState<string>("");
  const [inputAddress, setInputAddress] = useState<string>("");
  const [inputPostcode, setInputPostcode] = useState<string>("");

  const handleChange = (event: { target: { value: string } }) => {
    setSelectedProvince(event.target.value);
  };

  const handleCheck = () => {
    setDisabled(!disabled);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (inputPassword === inputConfirmPassword) {
        const res = await fetch(`${host}/user/register`, {
          method: "POST",
          body: JSON.stringify({
            username: inputUsername,
            password: inputPassword,
            name: inputName,
            surname: inputSurname,
            email: inputEmail,
            phoneNumber: inputPhoneNum,
            address: inputAddress,
            province: selectedProvince,
            postcode: inputPostcode,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const data = await res.json();
        if (data.statusCode === 401 || data.statusCode === 500) {
          toast.error("ตรวจสอบข้อมูลให้ถูกต้อง");
          throw new Error(data.message);
        }
        toast.success("ลงทะเบียนสำเร็จ");
        navigate("/login");
        return data;
      } else {
        toast.error("ตรวจสอบรหัสผ่านอีกครั้ง");
      }
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  // Validate unique username
  const handleChangeValidUsername = async () => {
    try {
      const res = await fetch(`${host}/user/register/checkusername`, {
        method: "POST",
        body: JSON.stringify({
          username: inputUsername,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      setIsUserValid(!data.isBlacklistedUsername);
      return data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  // Validate unique email
  const handleChangeValidEmail = async () => {
    try {
      const res = await fetch(`${host}/user/register/checkemail`, {
        method: "POST",
        body: JSON.stringify({
          email: inputEmail,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      setIsEmailValid(!data.isBlacklistedEmail);
      return data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  // Validate unique phone number
  const handleChangeValidPhone = async () => {
    try {
      const res = await fetch(`${host}/user/register/checkphonenumber`, {
        method: "POST",
        body: JSON.stringify({
          phoneNumber: inputPhoneNum,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      setIsPhoneValid(!data.isBlacklistedPhoneNumber);
      return data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  return (
    <>
      <PageHeader name="ลงทะเบียน" />
      <form
        className="bg-bg_white w-[50rem] mx-auto mt-10 mb-10 max-lg:w-10/12"
        onSubmit={handleSubmit}
      >
        <section className="flex flex-row gap-20 p-10 max-lg:flex-col max-lg:gap-10">
          <p className="text-primary font-semibold text-xl">ข้อมูลส่วนตัว</p>
          <div className="flex flex-col gap-4 ">
            <div className="form-user">
              <label>ชื่อผู้ใช้</label>
              <input
                type="text"
                id="username"
                pattern="[A-Za-z0-9]+"
                placeholder="ชื่อผู้ใช้ภาษาอังกฤษ"
                className="inputBox-user"
                onChange={(e) => setInputUsername(e.target.value)}
                onKeyUp={handleChangeValidUsername}
                required
              />
              {!isUserValid && (
                <div className="flex flex-row gap-2 items-center">
                  <img src="./invalidUser.svg" className="w-7 h-7" />
                  <p className="text-sm text-secondary">
                    ชื่อผู้ใช้นี้มีผู้่อื่นใช้่แล้ว ลองใช้ชื่ออื่น
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-row gap-6">
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
                  className="inputBox-user max-lg:w-[8rem]"
                  onChange={(e) => setInputSurname(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-user">
              <label>อีเมล</label>
              <input
                type="email"
                placeholder="อีเมล"
                className="inputBox-user"
                onChange={(e) => setInputEmail(e.target.value)}
                onKeyUp={handleChangeValidEmail}
                required
              />
              {!isEmailValid && (
                <div className="flex flex-row gap-2 items-center">
                  <img src="./invalidUser.svg" className="w-7 h-7" />
                  <p className="text-sm text-secondary">
                    อีเมลนี้ถูกใช้ลงทะเบียนแล้ว
                  </p>
                </div>
              )}
            </div>
            <div className="form-user">
              <label>เบอร์โทรศัพท์</label>
              <input
                type="tel"
                pattern="[0-9]{10}"
                placeholder="เบอร์โทรศัพท์10หลัก"
                className="inputBox-user"
                onChange={(e) => setInputPhoneNum(e.target.value)}
                onKeyUp={handleChangeValidPhone}
                required
              />
              {!isPhoneValid && (
                <div className="flex flex-row gap-2 items-center">
                  <img src="./invalidUser.svg" className="w-7 h-7" />
                  <p className="text-sm text-secondary">
                    เบอร์โทรศัพท์ถูกใช้ลงทะเบียนแล้ว
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-row gap-6">
              <div className="form-user">
                <label>รหัสผ่าน</label>
                <input
                  type="password"
                  placeholder="รหัสผ่าน"
                  className="inputBox-user"
                  onChange={(e) => setInputPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-user">
                <label>ยืนยันรหัสผ่าน</label>
                <input
                  type="password"
                  placeholder="ยืนยันรหัสผ่าน"
                  className="inputBox-user max-lg:w-[8rem]"
                  onChange={(e) => setInputConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-row gap-14 p-10 max-lg:flex-col max-lg:gap-10">
          <p className="text-primary font-semibold text-xl">
            ข้อมูลที่อยู่อาศัย
          </p>
          <div className="flex flex-col gap-4 ">
            <div className="form-user">
              <label>ที่อยู่</label>
              <input
                type="text"
                placeholder="ที่อยู่"
                className="inputBox-user"
                onChange={(e) => setInputAddress(e.target.value)}
                required
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
                <label>รหัสไปรษณีย์</label>
                <input
                  type="text"
                  placeholder="รหัสไปรษณีย์"
                  className="inputBox-user max-lg:w-[8rem]"
                  onChange={(e) => setInputPostcode(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </section>
        <FormGroup className="ml-[14rem] max-lg:ml-0 max-lg:items-center">
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
        <section className="py-8 w-32 ml-[40rem] max-lg:mx-auto ">
          <div className={!disabled ? "btn-pink" : "btn-disabled"}>
            <button type="submit" disabled={disabled}>
              ลงทะเบียน
            </button>
          </div>
        </section>
      </form>
    </>
  );
};

export default Register;
