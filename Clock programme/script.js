//? Declaration of the two const from my HTML file src="index.html";
const TIME = document.querySelector("#timeLabel");
const DATE = document.querySelector("#dateLabel");

displayTime();
setInterval(displayTime, 1000);

function displayTime() {
  let time = new Date();
  TIME.innerHTML = update(time);

  function update(time) {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let amOrPm = hours > 12 ? "pm" : "am";

    hours = hours % 12 || 12;

    hours = formatZero(hours);
    minutes = formatZero(minutes);
    seconds = formatZero(seconds);

    return `${hours}:${minutes}:${seconds} ${amOrPm}`;
  }

  function formatZero(time) {
    time = time.toString();
    return time.length < 2 ? `0` + time : time;
  }
}

displayDate();
setIntervalI(displayDate, 1000);

function displayDate() {
  let date = new Date();
  DATE.innerHTML = re_update(date);

  function re_update(date) {
    let days = date.getDate();
    let months = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${days}/${months}/${year}`;
  }

  function formatZiro(date) {
    date = date.toString();
    date.length < 2 ? "0" + date : date;
  }
}
