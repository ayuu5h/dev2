<?php
// backend/app.php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "testdb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set content type to JSON
header('Content-Type: application/json');

$input = json_decode(file_get_contents('php://input'), true);

$name = $input['name'];
$registration_number = $input['registration_number'];

$sql = "INSERT INTO users (name, registration_number) VALUES ('$name', '$registration_number')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "New record created successfully"]);
} else {
    echo json_encode(["message" => "Error: " . $sql . "<br>" . $conn->error]);
}

$conn->close();
?>

