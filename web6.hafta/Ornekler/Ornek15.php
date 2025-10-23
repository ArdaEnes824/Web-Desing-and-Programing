<?php
$rakamlar = [3, 1, 4, 1, 5, 9, 2];
// 1. Dizi eleman sayısı
echo "Eleman sayısı: " . count($rakamlar) . "<br>"; // 7
// 2. Bir elemanın dizide olup olmadığını kontrol etme
if (in_array(5, $rakamlar)) {
echo "Dizide '5' rakamı var.<br>";
}
// 3. Diziyi sıralama (küçükten büyüğe)
sort($rakamlar);
print_r($rakamlar); // print_r(): Bir dizinin içeriğini okunabilir şekilde basar
echo "<br>";
// 4. Diziyi tersten sıralama (büyükten küçüğe)
rsort($rakamlar);
print_r($rakamlar);
echo "<br>";
// 5. İlişkisel dizide anahtarları alma
$kisi = ["ad" => "Ahmet", "yas" => 30];
$anahtarlar = array_keys($kisi);
print_r($anahtarlar); // Çıktı: [0] => ad, [1] => yas
?>