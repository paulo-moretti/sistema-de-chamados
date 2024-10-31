<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header('HTTP/1.1 401 Unauthorized');
    echo json_encode(["error" => "Acesso não autorizado"]);
    exit();
}
?>
