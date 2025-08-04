/**
 * formatDate
 * ----------
 * Formats a Date object into a string according to the provided format.
 * Supported placeholders: YYYY, MM, DD, HH, mm, ss
 *
 * Example:
 *   formatDate(new Date(2020, 0, 5), "YYYY-MM-DD") // "2020-01-05"
 *   formatDate(new Date(2020, 10, 5, 9, 7), "DD/MM/YYYY HH:mm") // "05/11/2020 09:07"
 */
export function formatDate(date: Date, formatStr: string): string {
  const pad = (n: number) => n.toString().padStart(2, "0");

  const map: { [key: string]: string } = {
    YYYY: date.getFullYear().toString(),
    MM: pad(date.getMonth() + 1),
    DD: pad(date.getDate()),
    HH: pad(date.getHours()),
    mm: pad(date.getMinutes()),
    ss: pad(date.getSeconds()),
  };

  return formatStr.replace(
    /YYYY|MM|DD|HH|mm|ss/g,
    (match) => map[match] ?? match
  );
}
