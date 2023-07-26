import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Banner = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="flex flex-row justify-between items-center py-5 w-10/12 mx-auto ">
      <div className="flex flex-col gap-3 max-lg:py-10 max-lg:mx-0">
        <h1 className="font-bold text-3xl max-md:text-2xl">
          ยังมีคนที่รอคอยคนที่รักอย่างมีความหวัง
        </h1>
        <p className="text-lg">
          ร่วมกันช่วยหาคนหายพร้อมแจ้งเบาะแสในเว็บไซท์ของเรา
        </p>
        <section className="flex flex-row gap-4">
          <NavLink to="/content" className="btn-blue">
            ดูคนหายทั้งหมด
          </NavLink>
          {isLoggedIn ? (
            <NavLink to="/createcontent" className="btn-blue-line">
              แจ้งคนหาย
            </NavLink>
          ) : (
            <NavLink to="/login" className="btn-blue-line">
              แจ้งคนหาย
            </NavLink>
          )}
        </section>
      </div>
      <img
        src="/girlWaiting.svg"
        alt="a girl is waiting for someone"
        className="w-[17rem] h-[17rem] max-lg:hidden"
      />
    </div>
  );
};

export default Banner;
