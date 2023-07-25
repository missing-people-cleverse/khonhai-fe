import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Bangkok");

export const formatDateTime = (dateTimeDB: string): string => {
  const dateTime = dayjs(dateTimeDB).format("YYYY-MM-DDTHH:mm:ssZ[Z]");

  const dateDB = new Date(
    Number(dateTime.slice(0, 4)),
    Number(dateTime.slice(5, 7)) - 1,
    Number(dateTime.slice(8, 10))
  );

  const time = `${dateTime.slice(11, 13)}.${dateTime.slice(14, 16)} น.`;

  const date = dateDB.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return `${date} เวลา ${time}`;
};

export const formatDate = (dateDB: string): string => {
  const date = dayjs(dateDB).format("YYYY-MM-DDTHH:mm:ssZ[Z]");

  const dateSlice = new Date(
    Number(date.slice(0, 4)),
    Number(date.slice(5, 7)) - 1,
    Number(date.slice(8, 10))
  );

  const formatDate = dateSlice.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formatDate;
};
