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
  }, 500);

  const handleClick = () => {
    setStart(!start);
    setIteration(0);
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <div className="relative w-[50rem]">
          <p className="text-4xl pt-16 text-center max-md:text-2xl">
            ผู้สูญหายต่อปี&nbsp; <strong>นับพัน</strong>{" "}
            &nbsp;ในช่วงทศวรรษที่ผ่านมา
          </p>
          <img
            src="/circle.svg"
            alt="circle"
            className="absolute top-14 left-[17rem] w-[7.5rem] max-md:w-[5rem] max-md:left-[19.7rem] max-md:top-[3.8rem]"
          />
        </div>

        <div className="flex flex-row justify-between items-center pt-[5rem] pb-[7rem] w-11/12 max-lg:flex-col-reverse">
          <figure className="w-3/5 max-lg:w-11/12">
            <img
              src="./group2.svg"
              alt="infographic shows the difference between the amount of missing people over 10 years"
            />
          </figure>
          <motion.figcaption
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "some" }}
            animate={{
              x: 100,
              scale: 1,
            }}
            transition={{
              duration: 1,
              type: "tween",
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            variants={{
              hidden: { opacity: 0, x: -150 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex flex-col gap-6 pb-[10rem] max-lg:pb-10"
          >
            <div>
              <p className="text-2xl">
                จากสถิติรับแจ้งคนหาย{" "}
                <span className="inline-block">จากมูลนิธิกระจกเงา</span>
              </p>
            </div>
            <p className="font-bold text-3xl">
              คนหายเพิ่มขึ้นกว่า <span className="text-5xl">7</span> เท่า...
            </p>
            <p className="font-bold text-3xl pl-[10rem]">
              ตลอด 10 ปี<span className="inline-block">ที่ผ่านมา</span>
            </p>
          </motion.figcaption>
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
            className="w-[5rem] h-[5rem] mt-[4rem] max-md:hidden"
          />
        </div>
        <div className="flex flex-row gap-5 justify-between items-center pt-24 pb-10 w-10/12 max-lg:flex-col ">
          <figure>
            <RacingBarChart data={data} />
          </figure>
          <motion.figcaption
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "some" }}
            animate={{
              x: 100,
              scale: 1,
            }}
            transition={{
              duration: 1,
              type: "tween",
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            variants={{
              hidden: { opacity: 0, x: -150 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex flex-col gap-5 max-lg:items-center"
          >
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
              <strong className="text-primary">35%</strong> สมัครใจหนีออกจากบ้าน
            </p>
            <p className="text-2xl pl-10 max-md:text-center">
              <strong className="text-secondary">36%</strong> จากสาเหตุทางสุขภาพ{" "}
              <span className="inline-block">ทางร่างกายและจิตใจ</span>
            </p>
          </motion.figcaption>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <img
          src="/headline.svg"
          alt="Headline news about missing people"
          className="mt-16 w-10/12"
        />
      </section>
      <section className="flex flex-col justify-center items-center">
        <div className="flex flex-row gap-2">
          <img src="./hashtag.svg" className="pt-7 max-md:w-10 max-md:pt-14" />
          <p className="text-5xl font-medium pt-16 max-md:text-4xl">
            ต้องการความช่วยเหลือ
          </p>
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
