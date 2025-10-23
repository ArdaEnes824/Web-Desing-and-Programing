<?php
// (Bağlantı kodlarının önceki örnekteki gibi yapıldığını varsayıyoruz)
// $db = new PDO("mysql:host=localhost;dbname=test_db;charset=utf8", "root", "");
try {
// Güncellenecek yeni veriler
$yeni_email = "ali.yeni@veli.com";
$guncellenecek_id = 1; // ID'si 1 olan kullanıcının email'ini güncelle
$stmt = $db->prepare("UPDATE kullanicilar SET email = :email WHERE id = :id");
// Değerleri bağlama
$stmt->bindParam(':email', $yeni_email);
$stmt->bindParam(':id', $guncellenecek_id);
// Sorguyu çalıştırma
$stmt->execute();
echo "ID: $guncellenecek_id olan kullanıcının e-postası güncellendi.<br>";
} catch (PDOException $e) {
echo "Güncelleme Hatası: " . $e->getMessage();
}
?>