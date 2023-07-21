import { Link, NavLink } from "react-router-dom";
import { ChildProps } from "../types/auth.context";
import { useAuth } from "../context/AuthProvider";

type AuthProviderProps = ChildProps;

const Navbar = ({ children }: AuthProviderProps) => {
  const { isLoggedIn, logout, ...userInfo } = useAuth();

  return (
    <>
      <header className="bg-bg_white sticky top-0 z-50">
        <div className="flex flex-row flex-wrap justify-between items-center py-2 w-10/12 mx-auto">
          <div>
            <Link to="/">
              {" "}
              <img src="/logo.svg" alt="Khonhai logo" />
            </Link>
          </div>
          <nav className="flex flex-row gap-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold" : "hover:font-bold"
              }
            >
              หน้าแรก
            </NavLink>
            <NavLink
              to="/all"
              className={({ isActive }) =>
                isActive ? "font-bold" : "hover:font-bold"
              }
            >
              คนหายทั้งหมด
            </NavLink>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                isActive ? "font-bold" : "hover:font-bold"
              }
            >
              ศูนย์ช่วยเหลือ
            </NavLink>
          </nav>
          {!isLoggedIn ? (
            <nav className="flex flex-row gap-5">
              <NavLink to="/login" className="btn-blue">
                เข้าสู่ระบบ
              </NavLink>
              <NavLink to="/register" className="btn-blue">
                สมัครสมาชิก
              </NavLink>
            </nav>
          ) : (
            <nav className="flex flex-row gap-5">
              <p className="font-bold pt-2">
                ยินดีต้อนรับ{" "}
                <span className="text-secondary_shadow">
                  คุณ{userInfo.user}
                </span>
              </p>
              <a className="btn-blue" onClick={logout}>
                ออกจากระบบ
              </a>
            </nav>
          )}
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Navbar;
