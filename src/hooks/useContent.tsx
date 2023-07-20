import { useEffect, useState } from "react";
import { IContent } from "../types/content";
import axios from "axios";

const host = "http://localhost:8000";

const useContent = (id: Number) => {
  const [content, setContent] = useState<IContent>();
  // const mockData: IContent = {
  //   id: 2,
  //   userId: "44be3125-38fc-4d2e-859a-4383fa359cc3",
  //   createdAt: "2023-07-20T04:46:12.161Z",
  //   updatedAt: "2023-07-20T04:46:12.161Z",
  //   isArchive: false,
  //   name: "คนหาย4",
  //   surname: "ไปไหน4",
  //   nickname: "",
  //   img: "123",
  //   nationality: "THAI",
  //   ageLastSeen: 23,
  //   dateOfBirth: "12 มกราคม 2566",
  //   gender: "MALE",
  //   weight: 12,
  //   height: 14,
  //   skin: "WHITE",
  //   remark: "แผล",
  //   status: "UNFOUNED",
  //   province: "BANGKOK",
  //   place: "cleverse",
  //   missingDatetime: "13 มกราคม 2566 เวลา 07.37 น.",
  //   missingDetail: "หาย",
  //   user: {
  //     id: "44be3125-38fc-4d2e-859a-4383fa359cc3",
  //     username: "test",
  //     name: "test",
  //     surname: "surtest",
  //     email: "test@gmail.com",
  //     phoneNumber: "0812345678",
  //   },
  //   comments: [
  //     {
  //       id: 1,
  //       foundPlace: "BKK3333",
  //       foundDatetime: "14 มกราคม 2566 เวลา 07.37 น.",
  //       foundDetail: "เห็น333",
  //       img: "string33",
  //       isArchive: false,
  //     },
  //     {
  //       id: 2,
  //       foundPlace: "BKK3333",
  //       foundDatetime: "14 มกราคม 2566 เวลา 07.37 น.",
  //       foundDetail: "เห็น333",
  //       img: "string33",
  //       isArchive: false,
  //     },
  //   ],
  // };

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios
        .get(`${host}/content/${id}`)
        .then((res) => res.data)
        .catch((err) => console.log(err));

      setContent(data);
    };
    fetchData();
  }, []);

  return { content };
};

export default useContent;
