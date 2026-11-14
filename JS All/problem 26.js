function getDayOfWeek(year, month, day) {
  // TODO: return the name of the weekday
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date(Date.UTC(year, month - 1, day));
  return days[date.getUTCDay()];
}

// Example 1
console.log(getDayOfWeek(2024, 5, 11));
// "Saturday"

// Example 2
console.log(getDayOfWeek(2023, 1, 1));
// "Sunday"

// Lower bound of the range
console.log(getDayOfWeek(1900, 1, 1));
// "Monday"

// Leap day
console.log(getDayOfWeek(2024, 2, 29));
// "Thursday"

// Year 2000 is a leap year (divisible by 400)
console.log(getDayOfWeek(2000, 2, 29));
// "Tuesday"

// 1900 is not a leap year, so March 1 follows Feb 28
console.log(getDayOfWeek(1900, 3, 1));
// "Thursday"

// Upper bound of the range
console.log(getDayOfWeek(2100, 12, 31));
// "Friday"

// End of year rollover
console.log(getDayOfWeek(2023, 12, 31));
// "Sunday"