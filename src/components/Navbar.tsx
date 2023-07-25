import { Link, NavLink } from "react-router-dom";
import { ChildProps } from "../types/auth.context";
import { useAuth } from "../context/AuthProvider";

type AuthProviderProps = ChildProps;

const Navbar = ({ children }: AuthProviderProps) => {
  const { isLoggedIn, logout, ...userInfo } = useAuth();

  return (
    <>
      <header className="bg-bg_white sticky top-0 z-50">
        <div className="flex flex-row justify-between items-center py-2 w-10/12 mx-auto max-md:justify-center max-md:gap-32 max-md:ml-[4rem]">
          <Link to="/">
            <img src="/logo.svg" alt="Khonhai logo" />
          </Link>

          <nav className="flex flex-row gap-10  max-md:hidden">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold" : "hover:font-bold"
              }
            >
              หน้าแรก
            </NavLink>
            <NavLink
              to="/content"
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
              <NavLink to="/login" className="btn-blue max-md:text-xs">
                เข้าสู่ระบบ
              </NavLink>
              <NavLink to="/register" className="btn-blue max-md:text-xs">
                สมัครสมาชิก
              </NavLink>
            </nav>
          ) : (
            <nav className="flex flex-row gap-5">
              <p className="font-bold pt-3 max-md:text-xs">
                ยินดีต้อนรับ{" "}
                <span className="text-secondary_shadow max-md:text-xs">
                  คุณ{userInfo.user}
                </span>
              </p>
              <a className="btn-blue max-md:text-xs" onClick={logout}>
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
