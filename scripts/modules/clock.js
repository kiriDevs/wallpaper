const df = Util.dateformatter.dateString;
const tf = Util.dateformatter.timeString;

MODULES.clock = {
  dateElements: [],
  timeElements: [],
  initDate: (element) => {
    element.datePattern = element.innerHTML;
    element.innerHTML = "Loading date...";
    MODULES.clock.dateElements.push(element);
  },
  initTime: (element) => {
    element.timePattern = element.innerHTML;
    element.innerHTML = "Loading time...";
    MODULES.clock.timeElements.push(element);
  },
  updateDate: (element, date) => {
    element.innerHTML = df(date, element.datePattern);
  },
  updateTime: (element, date) => {
    element.innerHTML = tf(date, element.timePattern);
  },
  updateDates: (date) => {
    MODULES.clock.dateElements.forEach((dateElem) => {
      MODULES.clock.updateDate(dateElem, date);
    });
  },
  updateTimes: (date) => {
    MODULES.clock.timeElements.forEach((timeElem) => {
      MODULES.clock.updateTime(timeElem, date);
    });
  },
  tick: () => {
    const now = new Date();
    MODULES.clock.updateDates(now);
    MODULES.clock.updateTimes(now);
  },
  __init: () => {
    // Discover elements
    const allDates = document.querySelectorAll(MARKERS["mod:clock:date"]);
    const allTimes = document.querySelectorAll(MARKERS["mod:clock:time"]);

    // Initialize elements
    allDates.forEach((dateElem) => {
        MODULES.clock.initDate(dateElem);
    });

    allTimes.forEach((timeElem) => {
        MODULES.clock.initTime(timeElem);
    });

    let now = new Date();
    while (now.getMilliseconds() !== 0) { now = new Date(); } // Wait for ms=0
    setInterval(MODULES.clock.tick, 1000);
    MODULES.clock.tick()
  }
}

MODULES.clock.__init();
