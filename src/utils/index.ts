export const formatDateTime = (dateTime: string): string => {
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
export const formatDate = (date: string): string => {
  const dateDB = new Date(
    Number(date.slice(0, 4)),
    Number(date.slice(5, 7)) - 1,
    Number(date.slice(8, 10))
  );

  const formatDate = dateDB.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formatDate;
};
