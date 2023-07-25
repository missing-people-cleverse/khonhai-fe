import { motion } from "framer-motion";
import HelpCard from "./HelpCard";
import { useState } from "react";
import { mpData } from "../data/MissingPeopleData";
import useInterval from "../hooks/useInterval";
import RacingBarChart from "./RacingBarChart";

const Story = () => {
  const [iteration, setIteration] = useState(1);
  const [start, setStart] = useState(false);
  const [data, setData] = useState(
    mpData.map((entry) => ({
      ...entry,
      value: entry.value[0],
    }))
  );

  useInterval(() => {
    if (start && iteration < mpData[0].value.length) {
      setData(
        mpData.map((entry) => ({
          ...entry,
          value: entry.value[iteration],
        }))
      );
      setIteration(iteration + 1);
    }
  }, 1000);

  const handleClick = () => {
    setStart(!start);
    setIteration(0);
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <div className="relative w-[50rem]">
          <p className="text-4xl pt-16 text-center">
            ผู้สูญหายต่อปี&nbsp; <strong>นับพัน</strong>{" "}
            &nbsp;ในช่วงทศวรรษที่ผ่านมา
          </p>
          <img
            src="/circle.svg"
            alt="circle"
            className="absolute top-14 left-[17rem] w-[7.5rem] "
          />
        </div>

        <div className="flex flex-row justify-between items-center pt-[5rem] pb-[7rem] w-11/12 ">
          <figure className="w-3/5">
            <img
              src="./group2.svg"
              alt="infographic shows the difference between the amount of missing people over 10 years"
            />
          </figure>
          <figcaption className="flex flex-col gap-6 pb-[10rem]">
            <div>
              <p className="text-2xl">
                จากสถิติรับแจ้งคนหาย จากมูลนิธิกระจกเงา
              </p>
            </div>
            <p className="font-bold text-3xl">
              คนหายเพิ่มขึ้นกว่า <span className="text-5xl">7</span> เท่า...
            </p>
            <p className="font-bold text-3xl pl-[10rem]">ตลอด 10 ปีที่ผ่านมา</p>
          </figcaption>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <div className="flex flex-row items-center">
          <p className="text-5xl pt-16 text-center">
            คุณคิดว่าอะไรคือ<strong>สาเหตุ</strong>
          </p>
          <img
            src="/question.svg"
            alt="question mark"
            className="w-[5rem] h-[5rem] mt-[4rem]"
          />
        </div>
        <div className="flex flex-row justify-between items-center pt-24 pb-24 w-11/12 ">
          <figure>
            <RacingBarChart data={data} />
          </figure>
          <figcaption className="flex flex-col gap-5">
            <p className="text-4xl">ปีพ.ศ. {iteration + 2554}</p>
            <button
              onClick={handleClick}
              className="btn-blue-line w-[10rem] text-xl"
            >
              {start ? "หยุด" : "เล่นซ้ำ"}
            </button>
            <p className="font-semibold text-3xl pt-[3rem]">
              ตลอด 10 ปีที่ผ่านมา
            </p>
            <p className="text-2xl ">
              <strong>35%</strong> สมัครใจหนีออกจากบ้าน
            </p>
            <p className="text-2xl pl-10">
              <strong>36%</strong> จากสาเหตุทางสุขภาพ ทางร่างกายและจิตใจ
            </p>
          </figcaption>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <div className="flex flex-row gap-2">
          <img src="./hashtag.svg" className="pt-7" />
          <p className="text-5xl font-medium pt-16">ต้องการความช่วยเหลือ</p>
        </div>
        <motion.img
          animate={{ y: 10 }}
          transition={{ type: "tween", duration: 1, repeat: Infinity }}
          src="/arrow.svg"
          alt="down direction arrow"
          className="pt-4"
        />
        <HelpCard />
      </section>
      <div>
        <img
          src="./wave.svg"
          alt="wave background"
          className="mb-[-15px] w-full"
        />
      </div>
    </>
  );
};

export default Story;
