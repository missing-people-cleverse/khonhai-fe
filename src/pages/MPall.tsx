import PageHeader from "../components/PageHeader";
import Content from "../components/Content";
import useContents from "../hooks/useContents";
import { useState } from "react";
import { IContent } from "../types/content";

const MPall = () => {
  const { contents } = useContents();
  const [search, setSearch] = useState("");

  return (
    <>
      <PageHeader
        name="รายชื่อคนหายทั้งหมด"
        buttonName="แจ้งคนหาย"
        link="/createcontent"
      />

      <div className="flex gap-[12px] mt-[12px] flex-wrap items-center justify-center">
        <p className="text-center text-neutral-700 text-xl font-semibold leading-loose">
          ค้นหา
        </p>
        <input
          className="w-[355px] h-[28px] rounded-[13px] px-[16px] pt-[4px] border-input_boarderko border-solid border-[0.5px]"
          placeholder="ค้นหาชื่อ"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <img src="/search.svg" alt="search icon" className="ml-[-7px]" />
        <input
          className="w-[153px] h-[28px] rounded-[13px] pl-[48px] pt-[4px] border-input_boarderko border-solid border-[0.5px]"
          placeholder="จังหวัด"
        ></input>
        <input
          className="w-[153px] h-[28px] rounded-[13px] pl-[48px] pt-[4px] border-input_boarderko border-solid border-[0.5px]"
          placeholder="ช่วงอายุ"
        ></input>
        <input
          className="w-[153px] h-[28px] rounded-[13px] pl-[32px] pt-[4px] border-input_boarderko border-solid border-[0.5px]"
          placeholder="ช่วงเวลาที่หาย"
        ></input>
      </div>
      <div className="grid place-items-center">
        <div className="flexcontainer-mpall">
          {contents &&
            contents.map((content: IContent) => {
              return <Content key={content.id} content={content} />;
            })}
        </div>
      </div>
    </>
  );
};

export default MPall;
