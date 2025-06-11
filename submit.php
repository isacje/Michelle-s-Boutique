<?php
$host = "localhost";      // or your DB server
$user = "root";           // your DB username
$pass = "";               // your DB password
$db   = "events";         // your DB name

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name       = $_POST["name"];
$email      = $_POST["email"];
$phone      = $_POST["phone"];
$eventType  = $_POST["event-type"];
$message    = $_POST["message"];

$sql = "INSERT INTO contact_form (name, email, phone, event_type, message)
        VALUES (?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $name, $email, $phone, $eventType, $message);

if ($stmt->execute()) {
    echo "Message submitted successfully!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
