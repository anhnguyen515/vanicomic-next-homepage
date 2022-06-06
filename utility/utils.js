import { green, red } from "@mui/material/colors";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import TodayIcon from "@mui/icons-material/Today";
import PauseIcon from "@mui/icons-material/Pause";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import CheckIcon from "@mui/icons-material/Check";

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

export function comicStatusColor(status) {
  switch (status) {
    case "C":
      return red[500];
    case "F":
      return green["A700"];
    case "D":
      return "#222731";
  }
}

export function comicStatusIcon(status) {
  switch (status) {
    case "C":
      return <TodayIcon fontSize="small" />;
    case "F":
      return <CheckIcon fontSize="small" />;
    case "D":
      return <PauseIcon fontSize="small" />;
  }
}

export function getWeekday(weekday) {
  switch (weekday) {
    case "MO":
      return { text: "Thứ Hai", index: 1 };
    case "TU":
      return { text: "Thứ Ba", index: 2 };
    case "WE":
      return { text: "Thứ Tư", index: 3 };
    case "TH":
      return { text: "Thứ Năm", index: 4 };
    case "FR":
      return { text: "Thứ Sáu", index: 5 };
    case "SA":
      return { text: "Thứ Bảy", index: 6 };
    case "SU":
      return { text: "Chủ Nhật", index: 7 };
  }
}

export function getComicStatus(status) {
  switch (status) {
    case "C":
      return "Còn tiếp";
    case "F":
      return "Hoàn thành";
    case "D":
      return "Tạm ngưng";
  }
}
