import { NavLink } from "react-router-dom";

const HelpCard = () => {
  return (
    <div className="flex flex-row flex-wrap gap-5 w-10/12 mt-[3rem] justify-around">
      <section className="border-2 border-secondary rounded-lg w-[20rem] h-[23rem]">
        <div className="flex flex-col gap-3 justify-center items-center pt-7 px-5">
          <p className="text-3xl font-semibold">กำลังเดือดร้อน</p>
          <p className="text-xl font-medium text-center pb-6">
            ต้องการความช่วยเหลือ อยากออกจากบ้าน ต้องการที่ปรึกษา
          </p>
          <a
            className="btn-pink w-[15rem] font-semibold"
            href="https://www.childlinethailand.org/th/"
            target="_blank"
          >
            มูลนิธิสายเด็ก
          </a>
          <a
            className="btn-pink w-[15rem] font-semibold"
            href="https://1300thailand.m-society.go.th/"
            target="_blank"
          >
            ศูนย์ช่วยเหลือสังคม
          </a>
          <a
            className="btn-pink w-[15rem] font-semibold"
            href="https://1323alltime.camri.go.th/"
            target="_blank"
          >
            สายด่วนสุขภาพจิต
          </a>
        </div>
      </section>
      <section className="border-2 border-secondary rounded-lg w-[20rem] h-[23rem]">
        <div className="flex flex-col gap-3 justify-center items-center pt-7 px-5">
          <p className="text-3xl font-semibold">ตามหาคนหาย</p>
          <p className="text-xl font-medium text-center pb-6">
            ประชาสัมพันธ์ข้อมูลคนหาย หรือติดต่อหน่วยงานภาครัฐ
          </p>
          <NavLink
            to="/createcontent"
            className="btn-pink w-[15rem] font-semibold"
          >
            แจ้งคนหาย
          </NavLink>
          <a
            className="btn-pink w-[15rem] font-semibold"
            href="http://web.backtohome.org/index.php?width=1470&height=956"
            target="_blank"
          >
            มูลนิธิกระจกเงา
          </a>
          <a
            className="btn-pink w-[15rem] font-semibold"
            href="https://www.thaimissing.go.th/"
            target="_blank"
          >
            สถาบันนิติวิทยาศาสตร์
          </a>
        </div>
      </section>
      <section className="border-2 border-secondary rounded-lg w-[20rem] h-[23rem]">
        <div className="flex flex-col gap-3 justify-center items-center pt-7 px-5">
          <p className="text-3xl font-semibold">วิธีการแจ้งความ</p>
          <p className="text-xl font-medium text-center pb-6">
            ขั้นตอนการแจ้งความคนหายที่สถานีตำรวจ
          </p>
          <a
            className="btn-pink w-[15rem] font-semibold"
            href="https://www.detectives.in.th/missing-people/"
            target="_blank"
          >
            ขั้นตอนการแจ้งความ โดย นักสืบแห่งประเทศไทย
          </a>
        </div>
      </section>
    </div>
  );
};

export default HelpCard;
