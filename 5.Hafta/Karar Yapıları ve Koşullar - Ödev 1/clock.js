function updateTime() {
  var dateInfo = new Date();

  // saat
  var hrs = dateInfo.getHours(),
    min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
    sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds();

  // zamanı sakla
  var currentTime = hrs + ":" + min + ":" + sec;

  // DOM
  document.getElementsByClassName("hrs")[0].innerHTML = hrs;
  document.getElementsByClassName("min")[0].innerHTML = min;
  document.getElementsByClassName("sec")[0].innerHTML = sec;

  // tarih
  var dow = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
  ],
    month = [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık"
    ],
    day = dateInfo.getDate();

  // tarihi sakla
  var currentDate = day + " " + month[dateInfo.getMonth()] + ", " + dow[dateInfo.getDay()];

  // DOM
  document.getElementsByClassName("date")[0].innerHTML = currentDate;
};

updateTime();
setInterval(function () {
  updateTime()
}, 1000);