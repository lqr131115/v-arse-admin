import moment from "moment";
import {isString} from './validate'
export const formatTimeStamp = (time:string | number,format:string = 'YYYY-MM-DD HH:mm:ss'):string=> {
    if (isString(time)) {
        time = parseInt(time)
    }
    return moment(time).format(format);
}