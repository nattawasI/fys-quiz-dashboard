import dayjs from "dayjs";

const getInitialDate = () => {
  const today = dayjs();
  const lastWeek = today.add(-7, "day");
  const yesterday = today.add(-1, "day");
  const startDate = lastWeek.startOf("date").format();
  const endDate = yesterday.endOf("date").format();
  const initialDate = {
    startDate,
    endDate,
  };
  return initialDate;
};

export { getInitialDate };
