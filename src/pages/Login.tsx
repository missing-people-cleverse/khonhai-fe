import PageHeader from "../components/PageHeader";
import { NavLink, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const { isLoggedIn, login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await login(username, password);
      toast.success("เข้าสู่ระบบสำเร็จ");
    } catch (err) {
      toast.error("ตรวจสอบชื่อผู้ใช้หรือรหัสผ่านอีกครั้ง");
    }
  };

  if (isLoggedIn) return <Navigate to="/" />;
  return (
    <div className="min-h-[90vh]">
      <PageHeader name="เข้าสู่ระบบ" />
      <div className="bg-bg_white w-96 mx-auto mt-10">
        <form className="flex flex-col gap-4 p-8" onSubmit={handleSubmit}>
          <div className="form-user gap-[10px]">
            <label>ชื่อผู้ใช้</label>
            <input
              type="text"
              placeholder="ชื่อผู้ใช้"
              className="inputBox-user"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-user gap-[10px]">
            <label>รหัสผ่าน</label>
            <input
              type="password"
              placeholder="รหัสผ่าน"
              className="inputBox-user"
              onChange={(e) => setPassword(e.target.value)}
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

          {/* <p className="hr-line">เข้าสู่ระบบผ่านวิธีอื่น</p>
          <div className="btn-google">
            <button className="flex flex-row gap-2 items-center mx-auto">
              <img src="/google.svg" alt="google symbol" />
              เข้าสู่ระบบด้วยGoogle
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
