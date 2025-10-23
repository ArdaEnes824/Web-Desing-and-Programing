<?php
class Matematik {
// Statik özellik (değişken)
public static $pi = 3.14159;
// Statik metot (fonksiyon)
public static function topla(int $a, int $b): int {
        return $a + $b;
    }
// Statik bir metot, statik olmayan bir metoda ($this) erişemez.
// Statik bir metot, statik bir özelliğe 'self::' ile erişir.
public static function daireAlan($yaricap) {
return self::$pi * $yaricap * $yaricap;
}
}
// Nesne oluşturmaya GEREK YOK!
// SınıfAdı::MetotAdı veya SınıfAdı::$OzellikAdı şeklinde kullanılır.
echo "5 + 8 = " . Matematik::topla(5, 8) . "<br>";
echo "Pi sayısı: " . Matematik::$pi . "<br>";
echo "Yarıçapı 10 olan dairenin alanı: " . Matematik::daireAlan(10);
?>