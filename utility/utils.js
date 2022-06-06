import dayjs from "dayjs";
import "dayjs/locale/vi";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

// ----- VN date config -----
dayjs.extend(updateLocale);
dayjs.updateLocale("vi", {
  relativeTime: {
    future: "%s tới",
    past: "%s trước",
    s: "vài giây",
    ss: "vài giây",
    m: "1 phút",
    mm: "%d phút",
    h: "1 giờ",
    hh: "%d giờ",
    d: "1 ngày",
    dd: "%d ngày",
    M: "1 tháng",
    MM: "%d tháng",
    y: "1 năm",
    yy: "%d năm",
  },
});

const thresholds = [
  { l: "s", r: 1 },
  { l: "ss", r: 59, d: "second" },
  { l: "m", r: 1 },
  { l: "mm", r: 59, d: "minute" },
  { l: "h", r: 1 },
  { l: "hh", r: 23, d: "hour" },
  { l: "d", r: 1 },
  { l: "dd", r: 29, d: "day" },
  { l: "M", r: 1 },
  { l: "MM", r: 11, d: "month" },
  { l: "y" },
  { l: "yy", d: "year" },
];
const config = {
  thresholds: thresholds,
};

dayjs.locale("vi");
dayjs.extend(relativeTime, config);

export function timesFromNow(dateString) {
  const date = new Date(dateString);
  return dayjs(date).fromNow();
}

export function dateFormat(date) {
  return dayjs(date).format("DD/MM/YYYY");
}

export function numberFormat(numbers) {
  // const THOUSAND = 1000;
  const MILLION = 1000000;
  const BILLION = 1000000000;

  if (numbers >= MILLION && numbers < BILLION) {
    return parseFloat(numbers / MILLION).toFixed(1) + "M";
  } else if (numbers >= BILLION) {
    return parseFloat(numbers / BILLION).toFixed(1) + "B";
  } else {
    return numbers.toLocaleString("en-US");
  }
}

export function getWeekday(weekday) {
  switch (weekday) {
    case "MO":
      return "Thứ Hai";
    case "TU":
      return "Thứ Ba";
    case "WE":
      return "Thứ Tư";
    case "TH":
      return "Thứ Năm";
    case "FR":
      return "Thứ Sáu";
    case "SA":
      return "Thứ Bảy";
    case "SU":
      return "Chủ Nhật";
  }
}
