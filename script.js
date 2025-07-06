// Set today's date as max for input
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("dob").setAttribute("max", today);
});

document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const dob = new Date(document.getElementById("dob").value);
  const today = new Date();

  if (dob > today) {
    document.getElementById("result").innerText =
      "🚫 Please enter a valid past date.";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById(
    "result"
  ).innerText = `🎉 You are ${years} year(s), ${months} month(s), and ${days} day(s) old!`;
});
