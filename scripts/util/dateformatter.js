Util.daytable = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]
// Copy "Sunday" to the end of the array to enable both Sunday=0 and Sunday=7
Util.daytable.push(Util.daytable[0]);

Util.montable = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

Util.dateformatter = {
  dateString: (date, pattern) => {
    const dowNum = date.getDay();
    const dowLoc = Util.daytable[dowNum];

    const monNum = date.getMonth();
    const monLoc = Util.montable[monNum];

    const dayOfMonth = date.getDate();
    const yearNumber = date.getFullYear();

    let dateString = pattern;
    dateString = dateString.replace("%w", dowNum);
    dateString = dateString.replace("%W", dowLoc);
    dateString = dateString.replace("%m", monNum);
    dateString = dateString.replace("%M", monLoc);
    dateString = dateString.replace("%d", dayOfMonth);
    dateString = dateString.replace("%Y", yearNumber);
    return dateString;
  },

  timeString: (date, pattern) => {
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const ms = date.getMilliseconds();

    const hourString = (hour < 10) ? `0${hour}` : hour.toString();
    const minString = (min < 10) ? `0${min}` : min.toString();
    const secString = (sec < 10) ? `0${sec}` : sec.toString();

    let msString = ms.toString();
    if (ms < 10) msString = `00${ms}`;
    else if (ms < 100) msString = `0${ms}`;

    let timeString = pattern;
    timeString = timeString.replace("%h", hourString);
    timeString = timeString.replace("%m", minString);
    timeString = timeString.replace("%S", secString);
    timeString = timeString.replace("%s", msString);
    return timeString;
  }
}
