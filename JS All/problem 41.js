function formatCountdown(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

console.log(formatCountdown(0));
console.log(formatCountdown(59));
console.log(formatCountdown(60));
console.log(formatCountdown(3599));
console.log(formatCountdown(3600));
console.log(formatCountdown(3661));
console.log(formatCountdown(86399));
console.log(formatCountdown(86400));
console.log(formatCountdown(10000000));