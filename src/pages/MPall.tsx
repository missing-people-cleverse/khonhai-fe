import PageHeader from "../components/PageHeader";
import Content from "../components/Content";
import useContents from "../hooks/useContents";
import { IContent } from "../types/content";

const MPall = () => {
  const { contents, setSearchResults, searchResults } = useContents();

  const handleSearchChange = (e: { target: HTMLInputElement }) => {
    if (!e.target.value) return setSearchResults(contents);

    const resultsArr = contents.filter(
      (content) =>
        content.name.includes(e.target.value) ||
        content.surname.includes(e.target.value)
    );
    setSearchResults(resultsArr);
  };

  return (
    <>
      <PageHeader name="รายชื่อคนหายทั้งหมด" buttonName="แจ้งคนหาย" />

      <div className="flex gap-[12px] mt-[12px] flex-wrap items-center justify-center">
        <p className="text-center text-neutral-700 text-xl font-semibold leading-loose">
          ค้นหา
        </p>

        <input
          type="text"
          placeholder="ค้นหาชื่อ"
          className="inputBox-user h-[38px] w-[350px]"
          onSubmit={(e) => e.preventDefault()}
          onChange={handleSearchChange}
        />

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
        <div className="flexcontainer-mpall mb-[20px]">
          {searchResults &&
            searchResults.map((content: IContent) => {
              return <Content key={content.id} content={content} />;
            })}
        </div>
      </div>
    </>
  );
};

export default MPall;
