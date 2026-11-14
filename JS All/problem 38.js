function daysBetweenDates(date1, date2) {
  const MS_PER_DAY = 24 * 60 * 60 * 1000;

  const toUTC = (dateStr) => {
    const [year, month, day] = dateStr.split("-").map(Number);
    return Date.UTC(year, month - 1, day);
  };

  return Math.abs(toUTC(date1) - toUTC(date2)) / MS_PER_DAY;
}

// Examples from the problem
console.log(daysBetweenDates("2020-01-15", "2020-01-20")); // 5
console.log(daysBetweenDates("2020-01-15", "2019-12-31")); // 15

// Same date
console.log(daysBetweenDates("2024-05-10", "2024-05-10")); // 0

// Order does not matter
console.log(daysBetweenDates("2020-01-20", "2020-01-15")); // 5

// Leap year: Feb 29 exists in 2020, 2024 and 2000
console.log(daysBetweenDates("2020-02-28", "2020-03-01")); // 2
console.log(daysBetweenDates("2024-02-28", "2024-03-01")); // 2

// Non-leap year: 2021 has no Feb 29
console.log(daysBetweenDates("2021-02-28", "2021-03-01")); // 1

// Full years
console.log(daysBetweenDates("2020-01-01", "2021-01-01")); // 366 (leap year)
console.log(daysBetweenDates("2021-01-01", "2022-01-01")); // 365

// Month and year boundaries
console.log(daysBetweenDates("2023-12-31", "2024-01-01")); // 1
console.log(daysBetweenDates("2023-01-31", "2023-03-01")); // 29

// Across daylight saving changes (UTC avoids the 23/25-hour day problem)
console.log(daysBetweenDates("2024-03-09", "2024-03-11")); // 2
console.log(daysBetweenDates("2024-11-02", "2024-11-04")); // 2

// Extremes within constraints
console.log(daysBetweenDates("1970-01-01", "2099-12-31")); // 47482

// Century leap rules (2000 is leap, 2100 is out of range)
console.log(daysBetweenDates("2000-02-28", "2000-03-01")); // 2