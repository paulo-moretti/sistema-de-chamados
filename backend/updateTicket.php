<?php
include 'dbConfig.php';

// Receber dados da requisição
$data = json_decode(file_get_contents('php://input'), true);
$id = $data['id'];
$status = $data['status'];

// Verificar se os valores estão corretos
if (in_array($status, ['Pendente', 'Em Andamento', 'Concluído'])) {
    $sql = "UPDATE tickets SET status='$status' WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Status do chamado atualizado com sucesso"]);
    } else {
        echo json_encode(["error" => "Erro ao atualizar o status: " . $conn->error]);
    }
} else {
    echo json_encode(["error" => "Status inválido"]);
}

$conn->close();
?>
