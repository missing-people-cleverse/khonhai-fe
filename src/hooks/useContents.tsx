import { useEffect, useState } from "react";
import { IContent } from "../types/contents";

const useContents = () => {
  const [contents, setContents] = useState([{}]);
  const mockData: IContent[] = [
    {
      id: 1,
      createdAt: "2023-07-17T07:37:27.496Z",
      updatedAt: "2023-07-17T07:37:27.496Z",
      isArchive: false,
      name: "สุริยะ",
      surname: "จันทร์ธา",
      nickname: "ดาว",
      userId: "1aa",
      img: "123",
      nationality: "THAI",
      ageLastSeen: 23,
      dateOfBirth: "2023-07-17T07:37:27.496Z",
      gender: "MALE",
      weight: 56,
      height: 145,
      skin: "WHITE",
      remark: "แผลเป็นที่แก้มซ้าย",
      status: "UNFOUNED",
      province: "BANGKOK",
      place: "cleverse",
      missingDatetime: "2023-07-17T07:37:27.496Z",
      missingDetail: "เสื้อแขนยาวสีดำ กางเกงขายาวสีเขียว",
    },
    {
      id: 2,
      createdAt: "2023-07-17T07:37:27.496Z",
      updatedAt: "2023-07-17T07:37:27.496Z",
      isArchive: false,
      name: "กติภัทิ",
      surname: "ยินดี",
      nickname: "อาท",
      userId: "1ab",
      img: "123",
      nationality: "THAI",
      ageLastSeen: 58,
      dateOfBirth: "2023-07-17T07:37:27.496Z",
      gender: "MALE",
      weight: 49,
      height: 170,
      skin: "WHITEYELLOW",
      remark: "ไฝ่ที่หน้าผาก",
      status: "UNFOUNED",
      province: "KALASIN",
      place: "ถ้ำมรกต เกาะมุก ตรัง",
      missingDatetime: "2023-07-11T07:37:27.496Z",
      missingDetail: "เสื้อเชิ้ตลายทางธรรมชาติ สีน้ำตาล",
    },
    {
      id: 3,
      createdAt: "2023-07-17T07:37:27.496Z",
      updatedAt: "2023-07-17T07:37:27.496Z",
      isArchive: false,
      name: "พิบูล",
      surname: "ติยัน",
      nickname: "ไผ่",
      userId: "1ac",
      img: "123",
      nationality: "NONTHAI",
      ageLastSeen: 27,
      dateOfBirth: "2023-07-17T07:37:27.496Z",
      gender: "MALE",
      weight: 65,
      height: 184,
      skin: "BLACKYELLOW",
      remark: "แผลเป็นที่แก้มขวา",
      status: "UNFOUNED",
      province: "BANGKOK",
      place: "จุดชมวิวเนินมะปราง พิษณุโลก",
      missingDatetime: "2022-08-13T07:37:27.496Z",
      missingDetail: "เสื้อยืดคอกลม สีขาว",
    },
    {
      id: 4,
      createdAt: "2023-07-17T07:37:27.496Z",
      updatedAt: "2023-07-17T07:37:27.496Z",
      isArchive: false,
      name: "พิบูล",
      surname: "ติยัน",
      nickname: "ไผ่",
      userId: "1ac",
      img: "123",
      nationality: "NONTHAI",
      ageLastSeen: 27,
      dateOfBirth: "2023-07-17T07:37:27.496Z",
      gender: "MALE",
      weight: 65,
      height: 184,
      skin: "BLACKYELLOW",
      remark: "แผลเป็นที่แก้มขวา",
      status: "UNFOUNED",
      province: "BANGKOK",
      place: "จุดชมวิวเนินมะปราง พิษณุโลก",
      missingDatetime: "2022-08-13T07:37:27.496Z",
      missingDetail: "เสื้อยืดคอกลม สีขาว",
    },
  ];
  useEffect(() => {
    const fetchData = () => {
      //Todo Axios
      setContents(mockData);
    };
    fetchData();
  }, []);

  return { contents };
};

export default useContents;
