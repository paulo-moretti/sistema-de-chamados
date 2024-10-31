<?php
include 'dbConfig.php';

$data = json_decode(file_get_contents('php://input'), true);
$description = $data['description'];

$sql = "INSERT INTO tickets (user_id, description, status, created_at) VALUES (1, '$description', 'Pendente', NOW())";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Chamado criado com sucesso"]);
} else {
    echo json_encode(["error" => "Erro: " . $conn->error]);
}

$conn->close();
?>
