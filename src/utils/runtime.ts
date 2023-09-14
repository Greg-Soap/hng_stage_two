export function convertToRuntime(minutes: number): string {
  if (minutes < 0) {
    return "Invalid input: minutes should be non-negative";
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const hoursStr = hours > 0 ? `${hours} hrs` : "";
  const minutesStr = remainingMinutes > 0 ? `${remainingMinutes} mins` : "";

  if (hoursStr && minutesStr) {
    return `${hoursStr} ${minutesStr}`;
  } else if (hoursStr) {
    return hoursStr;
  } else if (minutesStr) {
    return minutesStr;
  } else {
    return "0 mins";
  }
}
