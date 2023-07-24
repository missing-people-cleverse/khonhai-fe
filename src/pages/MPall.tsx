import PageHeader from "../components/PageHeader";
import Content from "../components/Content";
import useContents from "../hooks/useContents";
import { IContent } from "../types/content";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { StyleInput } from "./Register";
import { genderList, provinceList } from "../data/SelectableData";
import { useEffect, useState } from "react";

const MPall = () => {
  const { contents } = useContents();
  const [filterName, setFilterName] = useState("");
  const [filterProvince, setFilterProvince] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [list, setList] = useState(contents);

  const applyFilter = () => {
    let updatedContents = contents;

    if (filterName) {
      updatedContents = updatedContents.filter(
        (content) =>
          content.name.includes(filterName) ||
          content.surname.includes(filterName)
      );
    }
    if (filterGender) {
      updatedContents = updatedContents.filter((content) =>
        content.gender.includes(filterGender)
      );
    }
    if (filterProvince) {
      updatedContents = updatedContents.filter((content) =>
        content.province.includes(filterProvince)
      );
    }

    setList(updatedContents);
  };

  useEffect(
    () => applyFilter(),
    [filterName, filterGender, filterProvince, contents]
  );

  return (
    <>
      <PageHeader name="รายชื่อคนหายทั้งหมด" buttonName="แจ้งคนหาย" />

      <div className="flex gap-[12px] mt-[12px] flex-wrap items-center justify-center">
        <p className="text-center text-neutral-700 text-xl font-semibold leading-loose">
          ค้นหา
        </p>

        <input
          id="name"
          type="text"
          placeholder="ค้นหาชื่อ"
          className="inputBox-user h-[38px] w-[350px]"
          onSubmit={(e) => e.preventDefault()}
          onChange={(e) => setFilterName(e.target.value)}
          value={filterName}
        />
        <FormControl sx={{ m: 0, width: 100 }}>
          <InputLabel>เพศ</InputLabel>

          <Select
            value={filterGender}
            id="gender"
            name="gender"
            onSubmit={(e) => e.preventDefault()}
            onChange={(e) => setFilterGender(e.target.value)}
            input={<StyleInput />}
            label="hi"
          >
            <MenuItem key={""} value={""}>
              {"-"}
            </MenuItem>
            <MenuItem></MenuItem>
            {genderList.map((gender) => (
              <MenuItem key={gender} value={gender}>
                {gender}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 0, width: 100 }}>
          <InputLabel>จังหวัด</InputLabel>

          <Select
            value={filterProvince}
            id="province"
            name="province"
            onSubmit={(e) => e.preventDefault()}
            onChange={(e) => setFilterProvince(e.target.value)}
            input={<StyleInput />}
            label="hi"
          >
            <MenuItem key={""} value={""}>
              {"-"}
            </MenuItem>
            {provinceList.map((province) => (
              <MenuItem key={province} value={province}>
                {province}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

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

      <div className="flexcontainer-mpall mb-[20px] items-stretch">
        {list &&
          list.map((content: IContent) => {
            return <Content key={content.id} content={content} />;
          })}
      </div>
    </>
  );
};

export default MPall;
