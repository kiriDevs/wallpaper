Util.daytable = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday"
},

Util.montable = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
},

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
