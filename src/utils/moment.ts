import moment from "moment";
import { isString, isDate } from "./validate";
export const formatTimeStamp = (
  time: any,
  format: string = "YYYY-MM-DD HH:mm:ss"
): string => {
  if (time) {
    if (isString(time)) {
      time = parseInt(time);
    }
    if (isDate(time)) {
      time = Date.parse(time as any)
    }
    return moment(time).format(format);
  } else {
    return "1970-01-01 00:00:00";
  }
};
