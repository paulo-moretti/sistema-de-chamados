<?php
$servername = "localhost";
$username = "root"; // Altere se necessário
$password = ""; // Altere se necessário
$dbname = "ticket_system"; // Nome do banco de dados

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>
