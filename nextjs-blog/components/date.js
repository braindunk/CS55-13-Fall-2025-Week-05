import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  // if (dateString !== undefined && dateString !== null && dateString !== "") {
    const date = parseISO(dateString);
    try {
      return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
    } catch (err) {
      return "";
    }
  // } else {
  //  return "";
  // }
}
