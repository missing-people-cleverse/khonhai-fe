import { useEffect, useState } from "react";

//Receive param id
const useContent = () => {
  const [content, setContent] = useState({});
  const mockData = {
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
  };
  useEffect(() => {
    //Todo Axios
    const fetchData = () => {
      setContent(mockData);
    };
    fetchData();
  }, []);
  return { content };
};

export default useContent;
