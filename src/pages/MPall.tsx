import PageHeader from "../components/PageHeader";
import Content from "../components/Content";
import useContents from "../hooks/useContents";
import { IContent } from "../types/content";
import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Pagination,
  Box,
} from "@mui/material";
import { StyleInput } from "./Register";
import {
  ageList,
  genderList,
  provinceList,
  statusList,
} from "../data/SelectableData";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const MPall = () => {
  const { contents } = useContents();
  const [filterName, setFilterName] = useState("");
  const [filterProvince, setFilterProvince] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filterAge, setFilterAge] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [list, setList] = useState(contents);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [activePagination, setActivePagination] = useState(true);
  let contentPerPage = 12;
  // const height = screen.height.toString();
  //style footer min-height : 100vh - footer height

  //useCallback
  const applyFilter = () => {
    let updatedContents = contents;

    if (
      !filterAge &&
      !filterGender &&
      !filterName &&
      !filterProvince &&
      !filterStatus
    ) {
      setActivePagination(true);
      updatedContents = updatedContents;
    }

    if (filterName) {
      updatedContents = updatedContents.filter(
        (content) =>
          content.name.includes(filterName) ||
          content.surname.includes(filterName)
      );
      setActivePagination(false);
    }

    if (filterGender) {
      updatedContents = updatedContents.filter((content) =>
        content.gender.includes(filterGender)
      );
      setActivePagination(false);
    }

    if (filterStatus) {
      if (!filterStatus) {
        updatedContents = updatedContents;
      } else if (filterStatus === "พบแล้ว") {
        updatedContents = updatedContents.filter((content) =>
          content.status.includes(filterStatus)
        );
        setActivePagination(false);
      } else {
        updatedContents = updatedContents.filter((content) =>
          content.status.includes("ยังไม่พบ")
        );
        setActivePagination(false);
      }
    }

    if (filterProvince) {
      updatedContents = updatedContents.filter((content) =>
        content.province.includes(filterProvince)
      );
      setActivePagination(false);
    }

    if (filterAge) {
      if (!filterAge) {
        updatedContents = updatedContents;
      } else if (filterAge === "เด็ก (น้อยกว่า 10 ปี)") {
        updatedContents = updatedContents.filter(
          (content) => content.ageLastSeen >= 0 && content.ageLastSeen <= 10
        );
        setActivePagination(false);
      } else if (filterAge === "วัยรุ่น (11 - 25 ปี)") {
        updatedContents = updatedContents.filter(
          (content) => content.ageLastSeen >= 11 && content.ageLastSeen <= 25
        );
        setActivePagination(false);
      } else if (filterAge === "ผู้ใหญ่ (26 - 60 ปี)") {
        updatedContents = updatedContents.filter(
          (content) => content.ageLastSeen >= 26 && content.ageLastSeen <= 60
        );
        setActivePagination(false);
      } else {
        updatedContents = updatedContents.filter(
          (content) => content.ageLastSeen >= 61 && content.ageLastSeen <= 200
        );
        setActivePagination(false);
      }
    }

    if (activePagination) {
      setList(
        updatedContents.slice(
          (page - 1) * contentPerPage,
          page * contentPerPage
        )
      );
    } else {
      setList(updatedContents);
    }
    setPageCount(updatedContents.length);
  };

  useEffect(
    () => applyFilter(),
    [
      contents,
      filterName,
      filterGender,
      filterProvince,
      filterAge,
      filterStatus,
      page,
      activePagination,
    ]
  );

  const handleChangePage = (_: any, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, 2000);
  });

  return (
    <div className="min-h-[90vh]">
      <PageHeader
        name="รายชื่อคนหายทั้งหมด"
        buttonName="แจ้งคนหาย"
        link="/createcontent"
      />

      {isShown ? (
        <>
          <div className="flex gap-[12px] mt-[16px] flex-wrap items-center justify-center">
            <p className="text-center text-neutral-700 text-xl font-semibold leading-loose">
              ค้นหา
            </p>

            <input
              id="name"
              type="text"
              placeholder="ค้นหาชื่อ"
              className="inputBox-user h-[42px] w-[350px]"
              onSubmit={(e) => e.preventDefault()}
              onChange={(e) => setFilterName(e.target.value)}
              value={filterName}
            />
            <FormControl sx={{ m: 0, width: 80 }}>
              <InputLabel sx={{ marginLeft: 0.2, marginY: -0.7 }}>
                เพศ
              </InputLabel>

              <Select
                value={filterGender}
                id="gender"
                name="gender"
                onSubmit={(e) => e.preventDefault()}
                onChange={(e) => {
                  {
                    setFilterGender(e.target.value);
                  }
                }}
                input={<StyleInput />}
              >
                <MenuItem key={""} value={""}>
                  {"-"}
                </MenuItem>
                {genderList.map((gender) => (
                  <MenuItem key={gender} value={gender}>
                    {gender}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ m: 0, width: 180 }}>
              <InputLabel sx={{ marginLeft: 0.2, marginY: -0.7 }}>
                จังหวัด
              </InputLabel>

              <Select
                value={filterProvince}
                id="province"
                name="province"
                onSubmit={(e) => e.preventDefault()}
                onChange={(e) => setFilterProvince(e.target.value)}
                input={<StyleInput />}
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

            <FormControl sx={{ m: 0, width: 200 }}>
              <InputLabel sx={{ marginLeft: 0.2, marginY: -0.7 }}>
                ช่วงอายุ(ปี)
              </InputLabel>

              <Select
                value={filterAge}
                id="age"
                name="age"
                onSubmit={(e) => e.preventDefault()}
                onChange={(e) => setFilterAge(e.target.value)}
                input={<StyleInput />}
              >
                <MenuItem key={""} value={""}>
                  {"-"}
                </MenuItem>
                {ageList.map((list) => (
                  <MenuItem key={list} value={list}>
                    {list}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ m: 0, width: 140 }}>
              <InputLabel sx={{ marginLeft: 0.2, marginY: -0.7 }}>
                สถานะ
              </InputLabel>

              <Select
                value={filterStatus}
                id="status"
                name="status"
                onSubmit={(e) => e.preventDefault()}
                onChange={(e) => setFilterStatus(e.target.value)}
                input={<StyleInput />}
              >
                <MenuItem key={""} value={""}>
                  {"-"}
                </MenuItem>
                {statusList.map((list) => (
                  <MenuItem key={list} value={list}>
                    {list}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {list.length === 0 ? (
            <div className="pt-[40px] text-center mb-[565px]">ไม่พบข้อมูล</div>
          ) : (
            <>
              <div className="flexcontainer-mpall mb-[20px] items-stretch max-xl:ml-[8rem]">
                {list &&
                  list.map((content: IContent) => {
                    return <Content key={content.id} content={content} />;
                  })}
              </div>

              {activePagination && (
                <div className={list.length <= 4 ? "mb-[190px]" : ""}>
                  <Box
                    justifyContent={"center"}
                    alignItems={"center"}
                    display={"flex"}
                    sx={{ margin: "20px 0px" }}
                  >
                    <Pagination
                      count={Math.ceil(pageCount / contentPerPage)}
                      page={page}
                      onChange={handleChangePage}
                    />
                  </Box>
                </div>
              )}
            </>
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MPall;
