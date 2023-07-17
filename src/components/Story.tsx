import { motion } from "framer-motion";

const Story = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-[39rem]">
        <p className="text-4xl pt-16">
          คดีคนหายในประเทศไทย &nbsp;<strong>เพิ่มขึ้นทุกปี</strong>
        </p>
        <img
          src="/circle.svg"
          alt="circle"
          className="absolute top-8 right-[70px] w-[12rem]"
        />
      </div>
      <motion.img
        animate={{ y: 10 }}
        transition={{ type: "tween", duration: 1, repeat: Infinity }}
        src="/arrow.svg"
        alt="down direction arrow"
        className="pt-8"
      />
      <div className="flex flex-row justify-between items-center py-48 w-10/12 mx-auto">
        <figure>
          <img />
        </figure>
        <figcaption className="flex flex-col gap-10">
          <p className="text-2xl pl-5">สถิติรับแจ้งคนหาย จากมูลนิธิกระจกเงา</p>
          <p className="font-bold text-4xl">
            คนหายเพิ่มขึ้นกว่า...เท่าจากปี...ที่ผ่านมา
          </p>
        </figcaption>
      </div>
    </div>
  );
};

export default Story;
