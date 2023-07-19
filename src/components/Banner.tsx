import { NavLink } from "react-router-dom";

const Banner = () => {
  const isLoggedIn: boolean = true;

  return (
    <div className="flex flex-row justify-between items-center py-8 w-10/12 mx-auto">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-4xl">
          ยังมีคนที่รอคอยคนที่รักอย่างมีความหวัง
        </h1>
        <p>ร่วมกันช่วยหาคนหายพร้อมแจ้งเบาะแสด้วยกันเถอะนะนะนะ</p>
        <section className="flex flex-row gap-4">
          <NavLink to="/all" className="btn-blue">
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
      <img src="/girlWaiting.svg" alt="a girl is waiting for someone" />
    </div>
  );
};

export default Banner;
