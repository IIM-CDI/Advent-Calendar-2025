type ElfDateTime =
  `${number}*${number}*${number}@${number}|${number}|${number} NP`

function timeUntilTakeOff(
  fromTime: ElfDateTime,
  takeOffTime: ElfDateTime
): number {

  function elfTimeToTimestamp(elfTime: string): number {
      const regex = /^(\d{4})\*(\d{2})\*(\d{2})@(\d{2})\|(\d{2})\|(\d{2}) NP$/;
      const match = elfTime.match(regex);
      
      if (!match) {
        return NaN
      }
      
      const [, year, month, day, hour, minute, second] = match;
      
      return Date.UTC(
          parseInt(year),
          parseInt(month) - 1,
          parseInt(day),
          parseInt(hour),
          parseInt(minute),
          parseInt(second)
      );
  }
    const fromTimestamp = elfTimeToTimestamp(fromTime);
    const takeOffTimestamp = elfTimeToTimestamp(takeOffTime);
    
    const diffMs = takeOffTimestamp - fromTimestamp;
    return Math.floor(diffMs / 1000);
}