import PageHeader from "../components/PageHeader";
import Content from "../components/Content";
import { Link } from "react-router-dom";
import useContents from "../hooks/useContents";
import { IContent } from "../types/contents";

const MPall = () => {
  const { contents } = useContents();

  // const contents = [
  //   {
  //     name: "ณัฐพนธ์ อินทร์พันธุ์",
  //     gender: "ชาย",
  //     age: 26,
  //     missingDate: "12 กรกฏาคม 2566",
  //     createdAt: "12 กรกฏาคม 2566",
  //     comment: 3,
  //     isArchive: false,
  //   },
  //   {
  //     name: "ณัฐพนธ์ อินทร์พันธุ์",
  //     gender: "ชาย",
  //     age: 26,
  //     missingDate: "12 กรกฏาคม 2566",
  //     createdAt: "12 กรกฏาคม 2566",
  //     comment: 3,
  //     isArchive: false,
  //   },
  //   {
  //     name: "ณัฐพนธ์ อินทร์พันธุ์",
  //     gender: "ชาย",
  //     age: 26,
  //     missingDate: "12 กรกฏาคม 2566",
  //     createdAt: "12 กรกฏาคม 2566",
  //     comment: 3,
  //     isArchive: false,
  //   },
  //   {
  //     name: "ณัฐพนธ์ อินทร์พันธุ์",
  //     gender: "ชาย",
  //     age: 26,
  //     missingDate: "12 กรกฏาคม 2566",
  //     createdAt: "12 กรกฏาคม 2566",
  //     comment: 3,
  //     isArchive: false,
  //   },
  //   {
  //     name: "ณัฐพนธ์ อินทร์พันธุ์",
  //     gender: "ชาย",
  //     age: 26,
  //     missingDate: "12 กรกฏาคม 2566",
  //     createdAt: "12 กรกฏาคม 2566",
  //     comment: 3,
  //     isArchive: false,
  //   },
  //   {
  //     name: "ณัฐพนธ์ อินทร์พันธุ์",
  //     gender: "ชาย",
  //     age: 26,
  //     missingDate: "12 กรกฏาคม 2566",
  //     createdAt: "12 กรกฏาคม 2566",
  //     comment: 3,
  //     isArchive: false,
  //   },
  //   {
  //     name: "ณัฐพนธ์ อินทร์พันธุ์",
  //     gender: "ชาย",
  //     age: 26,
  //     missingDate: "12 กรกฏาคม 2566",
  //     createdAt: "12 กรกฏาคม 2566",
  //     comment: 3,
  //     isArchive: false,
  //   },
  //   {
  //     name: "ณัฐพนธ์ อินทร์พันธุ์",
  //     gender: "ชาย",
  //     age: 26,
  //     missingDate: "12 กรกฏาคม 2566",
  //     createdAt: "12 กรกฏาคม 2566",
  //     comment: 3,
  //     isArchive: false,
  //   },
  //   {
  //     name: "ณัฐพนธ์ อินทร์พันธุ์",
  //     gender: "ชาย",
  //     age: 26,
  //     missingDate: "12 กรกฏาคม 2566",
  //     createdAt: "12 กรกฏาคม 2566",
  //     comment: 3,
  //     isArchive: false,
  //   },
  //   {
  //     name: "ณัฐพนธ์ อินทร์พันธุ์",
  //     gender: "ชาย",
  //     age: 26,
  //     missingDate: "12 กรกฏาคม 2566",
  //     createdAt: "12 กรกฏาคม 2566",
  //     comment: 3,
  //     isArchive: false,
  //   },
  //   {
  //     name: "ณัฐพนธ์ อินทร์พันธุ์",
  //     gender: "ชาย",
  //     age: 26,
  //     missingDate: "12 กรกฏาคม 2566",
  //     createdAt: "12 กรกฏาคม 2566",
  //     comment: 3,
  //     isArchive: false,
  //   },
  //   {
  //     name: "ณัฐพนธ์ อินทร์พันธุ์",
  //     gender: "ชาย",
  //     age: 26,
  //     missingDate: "12 กรกฏาคม 2566",
  //     createdAt: "12 กรกฏาคม 2566",
  //     comment: 3,
  //     isArchive: false,
  //   },
  //   {
  //     name: "ณัฐพนธ์ อินทร์พันธุ์",
  //     gender: "ชาย",
  //     age: 26,
  //     missingDate: "12 กรกฏาคม 2566",
  //     createdAt: "12 กรกฏาคม 2566",
  //     comment: 3,
  //     isArchive: false,
  //   },
  //   {
  //     name: "ณัฐพนธ์ อินทร์พันธุ์",
  //     gender: "ชาย",
  //     age: 26,
  //     missingDate: "12 กรกฏาคม 2566",
  //     createdAt: "12 กรกฏาคม 2566",
  //     comment: 3,
  //     isArchive: false,
  //   },
  //   {
  //     name: "ณัฐพนธ์ อินทร์พันธุ์",
  //     gender: "ชาย",
  //     age: 26,
  //     missingDate: "12 กรกฏาคม 2566",
  //     createdAt: "12 กรกฏาคม 2566",
  //     comment: 3,
  //     isArchive: false,
  //   },
  //   {
  //     name: "ณัฐพนธ์ อินทร์พันธุ์",
  //     gender: "ชาย",
  //     age: 26,
  //     missingDate: "12 กรกฏาคม 2566",
  //     createdAt: "12 กรกฏาคม 2566",
  //     comment: 3,
  //     isArchive: false,
  //   },
  // ];

  return (
    <>
      <PageHeader name="รายชื่อคนหายทั้งหมด" />
      <div className="flex gap-[12px] mt-[12px] ml-[180px]  flex-wrap items-center w-4/5">
        <p className="text-center text-neutral-700 text-xl font-semibold leading-loose">
          ค้นหา
        </p>
        <input
          className="w-[355px] h-[28px] rounded-[13px] px-[16px] pt-[4px] border-input_boarderko border-solid border-[0.5px]"
          placeholder="ค้นหา"
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
        <div className="flex gap-[20px] flex-wrap w-[1060px] mt-[16px] items-center mb-[24px]">
          {contents &&
            contents.map((content: any) => {
              return <Content key={content.id} content={content} />;
            })}
        </div>
      </div>
    </>
  );
};

export default MPall;
