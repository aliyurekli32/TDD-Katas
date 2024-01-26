export class AgeCalculator {
  calculateStartDateOfBirthdayWeek(stringDate: string): string {
    if (typeof stringDate !== "string") {
      throw new Error("Invalid date string");
    }
    const date = new Date(stringDate);
    const day = date.getDay();
    const getDate = date.getDate();
    const targetDay =
      day === 4 || day === 6
        ? getDate - day
        : day % 3 === 0
        ? getDate - 6
        : getDate;
    const adjustedDate = new Date(date.setDate(targetDay));

    return adjustedDate.toLocaleDateString("en-US", {
      day: "numeric",
      year: "numeric",
      month: "long",
    });
  }
  calculateAge(
    birthDateString: string,
    currentDateString: string
  ): number | string {
    try {
      const birthDate = new Date(birthDateString);
      const nowDate = new Date(currentDateString);

      const isBeforeBirthDate = nowDate < birthDate;
      if (isBeforeBirthDate) {
        throw new Error("Invalid date format");
      }
      const age =
        isBeforeBirthDate || nowDate.getDate() < birthDate.getDate()
          ? nowDate.getFullYear() - birthDate.getFullYear() - 1
          : nowDate.getFullYear() - birthDate.getFullYear();

      return age;
    } catch (error: any) {
      console.log(error.message);
      return error.message;
    }
  }
}
