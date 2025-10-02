function guncelTarih(currentDate) {
  var time = (currentDate - new Date()) / 1000;
  return {
    gun: Math.floor(time / 3600 / 24),
    saat: Math.floor((time / 3600) % 24),
    dakika: Math.floor((time / 60) % 60),
    saniye: Math.floor(time % 60),
    total: time,
  };
}

function animasyon(span) {
  span.className = "flip";
  setTimeout(function () {
    span.className = "";
  }, 700);
}

function baslat(id, newYear) {
  var clock = document.getElementById(id);

  var timerInterval = setInterval(function () {
    var zamanlayici = guncelTarih(newYear);

    clock.innerHTML =
      "<span>" + zamanlayici.gun + "</span>" +
      "<span>" + zamanlayici.saat + "</span>" +
      "<span>" + zamanlayici.dakika + "</span>" +
      "<span>" + zamanlayici.saniye + "</span>";

    var spans = clock.getElementsByTagName("span");
    animasyon(spans[3]); // saniye

    if (zamanlayici.saniye == 59) animasyon(spans[2]); // dakika
    if (zamanlayici.dakika == 59 && zamanlayici.saniye == 59)
      animasyon(spans[1]); // saat
    if (zamanlayici.saat == 23 &&
        zamanlayici.dakika == 59 &&
        zamanlayici.saniye == 59)
      animasyon(spans[0]); // gün

    if (zamanlayici.total < 1) {
      clearInterval(timerInterval);
      clock.innerHTML = "<span>0</span><span>0</span><span>0</span><span>0</span>";
    }
  }, 1000);
}

window.onload = function () {
  var newYear = new Date("1 Jan 2026"); // Hedef yılı buraya yaz
  baslat("clock", newYear);
};