<?php
// $mesaj parametresi opsiyoneldir, varsayılan değeri "Hoş geldin"
function selamla($isim, $mesaj = "Hoş geldin") {
echo "$mesaj, $isim! <br>";
}
selamla("Ahmet"); // Varsayılan mesajı kullanır
selamla("Ayşe", "Görüşürüz"); // Kendi mesajımızı göndeririz
?>