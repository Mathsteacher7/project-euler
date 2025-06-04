const countFirstMonthSundays = () => {
  let sundaysCount = 0;

  for (let year = 1901; year <= 2000; year++) {
    for (let month = 0; month < 12; month++) {
      let date = new Date(year, month, 1);
      if (date.getDay() === 0) {
        sundaysCount++;
      }
    }
  }

  return sundaysCount;
};

module.exports = countFirstMonthSundays;
