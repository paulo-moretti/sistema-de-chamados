<?php
include 'dbConfig.php';
session_start();

$data = json_decode(file_get_contents('php://input'), true);
$username = $conn->real_escape_string($data['username']);
$password = $data['password'];

$sql = "SELECT * FROM users WHERE username='$username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    // Verificar se a senha informada corresponde ao hash armazenado
    if (password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        $_SESSION['role'] = $user['role'];
        echo json_encode(["message" => "Login bem-sucedido"]);
    } else {
        echo json_encode(["error" => "Senha incorreta"]);
    }
} else {
    echo json_encode(["error" => "Usuário não encontrado"]);
}

$conn->close();
?>
