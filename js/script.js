document.addEventListener("DOMContentLoaded", () => {
  const dayInput = document.getElementById("day");
  const monthInput = document.getElementById("month");
  const yearInput = document.getElementById("year");

  const dayOutput = document.getElementById("days");
  const monthOutput = document.getElementById("months");
  const yearOutput = document.getElementById("years");

  const button = document.getElementById("btn");

  const maxYear = new Date().getFullYear();

  const labelDay = document.querySelector('label[for="day"]');
  const labelMonth = document.querySelector('label[for="month"]');
  const labelYear = document.querySelector('label[for="year"]');
  const outlineInput = [dayInput, monthInput, yearInput];

  const errorDay = document.getElementById("errorDay");
  const errorMonth = document.getElementById("errorMonth");
  const errorYear = document.getElementById("errorYear");

  function isValidDate(year, month, day) {
    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === year &&
      date.getMonth() + 1 === month &&
      date.getDate() === day
    );
  }

  dayInput.addEventListener("blur", () => {
    if (dayInput.value.trim() === "") {
      labelDay.style.color = "hsl(0, 100%, 67%)";
      outlineInput[0].style.outline = "1px solid hsl(0, 100%, 67%)";
      errorDay.textContent = "This field is required";
    } else {
      labelDay.style.color = "hsl(0, 1%, 44%)";
      outlineInput[0].style.outline = "1px solid hsl(259, 100%, 65%)";
      errorDay.textContent = "";
    }
    if (dayInput.value.trim() < 0 || dayInput.value.trim() > 31) {
      labelDay.style.color = "hsl(0, 100%, 67%)";
      outlineInput[0].style.outline = "1px solid hsl(0, 100%, 67%)";
      errorDay.textContent = "Must be a valid day";
    }
  });

  monthInput.addEventListener("blur", () => {
    if (monthInput.value.trim() === "") {
      labelMonth.style.color = "hsl(0, 100%, 67%)";
      outlineInput[1].style.outline = "1px solid hsl(0, 100%, 67%)";
      errorMonth.textContent = "This field is required";
    } else {
      labelMonth.style.color = "hsl(0, 1%, 44%)";
      outlineInput[1].style.outline = "1px solid hsl(259, 100%, 65%)";
      errorMonth.textContent = "";
    }
    if (monthInput.value.trim() < 0 || monthInput.value.trim() > 12) {
      labelMonth.style.color = "hsl(0, 100%, 67%)";
      outlineInput[1].style.outline = "1px solid hsl(0, 100%, 67%)";
      errorMonth.textContent = "Must be a valid day";
    }
  });
  yearInput.addEventListener("blur", () => {
    if (yearInput.value.trim() === "") {
      labelYear.style.color = "hsl(0, 100%, 67%)";
      outlineInput[2].style.outline = "1px solid hsl(0, 100%, 67%)";
      errorYear.textContent = "This field is required";
    } else {
      labelYear.style.color = "hsl(0, 1%, 44%)";
      outlineInput[2].style.outline = "1px solid hsl(259, 100%, 65%)";
      errorYear.textContent = "";
    }
    if (yearInput.value.trim() < 0 || yearInput.value.trim() > maxYear) {
      labelYear.style.color = "hsl(0, 100%, 67%)";
      outlineInput[2].style.outline = "1px solid hsl(0, 100%, 67%)";
      errorYear.textContent = "Must be a valid day";
    }
  });

  button.addEventListener("click", () => {
    const year = Number(yearInput.value);
    const month = Number(monthInput.value);
    const day = Number(dayInput.value);

    if (!isValidDate(year, month, day)) {
      [labelYear, labelMonth, labelDay].forEach(
        (label) => (label.style.color = "hsl(0, 100%, 67%)")
      );
      outlineInput.forEach(
        (input) => (input.style.outline = "1px solid hsl(0, 100%, 67%)")
      );
      errorDay.textContent = "Must be a valid date";
      return;
    }

    const inputAge = new Date(year, month - 1, day);
    const currentAge = new Date();

    const differenceInMilliseconds = currentAge - inputAge;
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

    const years = Math.floor(differenceInDays / 365.25);
    const months = Math.floor((differenceInDays % 365.25) / 30.44);
    const days = Math.round((differenceInDays % 365.25) % 30.44);

    monthOutput.innerText = "";
    yearOutput.innerText = "";
    dayOutput.innerText = "";

    yearOutput.innerText = years;
    monthOutput.innerText = months;
    dayOutput.innerText = days;
  });
});
