<?php
// 1. PHP Dizisini JSON'a Çevirme (json_encode)
$veri_dizisi = [
"id" => 101,
"isim" => "Hızlı ve Öfkeli",
"kategoriler" => ["Aksiyon", "Suç"]
];
$json_metni = json_encode($veri_dizisi, JSON_PRETTY_PRINT); // PRETTY_PRINT okunaklı yapar
echo "<h3>PHP Dizisinden JSON'a:</h3>";
echo "<pre>$json_metni</pre>"; // <pre> etiketi formatı korur
// 2. JSON Metnini PHP'ye Çevirme (json_decode)
$gelen_json = '{ "kullanici": "admin", "sifre_hash": "abc123xyz" }';
// json_decode($metin, true) -> true eklenirse PHP dizisi (array) döndürür
// Eklemezseniz PHP nesnesi (object) döndürür
$php_nesnesi = json_decode($gelen_json);
$php_dizisi = json_decode($gelen_json, true);
echo "<h3>JSON'dan PHP Nesnesine:</h3>";
echo "Kullanıcı (Nesne): " . $php_nesnesi->kullanici . "<br>"; // Nesne erişimi
echo "<h3>JSON'dan PHP Dizisine:</h3>";
echo "Kullanıcı (Dizi): " . $php_dizisi["kullanici"] . "<br>"; // Dizi erişimi
?>