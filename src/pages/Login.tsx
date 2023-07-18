import PageHeader from "../components/PageHeader";
import classes from "./Login.module.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <PageHeader name="เข้าสู่ระบบ" />
      <div className="bg-bg_white w-96 mx-auto mt-10 mb-20">
        <form className="flex flex-col gap-4 p-8">
          <div className={classes.form}>
            <label>ชื่อผู้ใช้</label>
            <input
              type="text"
              id="username"
              placeholder="ชื่อผู้ใช้"
              className={classes.inputBox}
              required
            />
          </div>
          <div className={classes.form}>
            <label>รหัสผ่าน</label>
            <input
              type="text"
              id="username"
              placeholder="รหัสผ่าน"
              className={classes.inputBox}
              required
            />
          </div>
          <div className="flex flex-row justify-between">
            <div className={classes.buttonPink}>
              <button type="submit">เข้าสู่ระบบ</button>
            </div>
            <NavLink to="/register" className={classes.buttonPinkLine}>
              ลงทะเบียน
            </NavLink>
          </div>
          <p className={classes.hrLines}>เข้าสู่ระบบผ่านวิธีอื่น</p>
          <div className={classes.buttonGoogle}>
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
