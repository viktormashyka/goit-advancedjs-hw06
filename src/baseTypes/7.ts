/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  MONDAY = "Monday",
  TUESDAY = "Tuesday",
  WEDNESDAY = "Wednesday",
  THURSDAY = "Thursday",
  FRIDAY = "Friday",
  SATURDAY = "Saturday",
  SUNDAY = "Sunday",
}

function isWeekend(day: DayOfWeek): boolean {
  switch (day) {
    case DayOfWeek.MONDAY:
    case DayOfWeek.TUESDAY:
    case DayOfWeek.WEDNESDAY:
    case DayOfWeek.THURSDAY:
    case DayOfWeek.FRIDAY:
      return false;
    case DayOfWeek.SATURDAY:
    case DayOfWeek.SUNDAY:
      return true;
  }
}

export { isWeekend };
