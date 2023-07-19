import PageHeader from "../components/PageHeader";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <PageHeader name="เข้าสู่ระบบ" />
      <div className="bg-bg_white w-96 mx-auto mt-10 mb-[200px]">
        <form className="flex flex-col gap-4 p-8">
          <div className="form-user gap-[10px]">
            <label>ชื่อผู้ใช้</label>
            <input
              type="text"
              id="username"
              placeholder="ชื่อผู้ใช้"
              className="inputBox-user"
              required
            />
          </div>
          <div className="form-user gap-[10px]">
            <label>รหัสผ่าน</label>
            <input
              type="text"
              id="username"
              placeholder="รหัสผ่าน"
              className="inputBox-user"
              required
            />
          </div>
          <div className="flex flex-row justify-between">
            <div className="btn-pink w-[150px]">
              <button type="submit">เข้าสู่ระบบ</button>
            </div>
            <NavLink to="/register" className="btn-pink-line w-[150px]">
              ลงทะเบียน
            </NavLink>
          </div>
          <p className="hr-line">เข้าสู่ระบบผ่านวิธีอื่น</p>
          <div className="btn-google">
            <button className="flex flex-row gap-2 items-center mx-auto">
              <img src="/google.svg" alt="google symbol" />
              เข้าสู่ระบบด้วยGoogle
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
