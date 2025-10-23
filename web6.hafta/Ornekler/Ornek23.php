<?php
// 1. Cookie Atama
// setcookie("isim", "değer", "geçerlilik_süresi");
// time() + 3600 -> Şu anki zamandan 1 saat (3600 saniye) sonrasına kadar geçerli
$gecerlilik_suresi = time() + (60 * 60 * 24); // 1 gün
setcookie("tercih_renk", "mavi", $gecerlilik_suresi);
echo "Tercih edilen renk 'mavi' olarak cookie'ye kaydedildi.<br>";
// 2. Cookie Okuma
// Cookie'ler $_COOKIE süper-global değişkeni ile okunur
// (Genellikle bir sonraki sayfa yüklemesinde okunabilir)
if (isset($_COOKIE["tercih_renk"])) {
echo "Kaydedilen tercihiniz: " . $_COOKIE["tercih_renk"];
} else {
echo "Renk tercihiniz kayıtlı değil.";
}
// 3. Cookie Silme
// Geçerlilik süresini geçmiş bir zaman yaparak silinir.
// setcookie("tercih_renk", "", time() - 3600);
?>