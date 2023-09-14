<?php
// Database connection parameters
$hostname = "your_database_hostname"; // Replace with your database hostname
$username = "your_database_username"; // Replace with your database username
$password = "your_database_password"; // Replace with your database password
$database_name = "Computerclub"; // Replace with your database name

// Create a database connection
$mysqli = new mysqli($hostname, $username, $password, $database_name);

// Check if the connection was successful
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Get user inputs from the form
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['text'];

// SQL query to insert data into the 'contactus' table
$sql = "INSERT INTO contactus (name, email, message) VALUES ('$name', '$email', '$message')";

// Execute the SQL query
if ($mysqli->query($sql) === TRUE) {
    echo "Record added successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $mysqli->error;
}

// Close the database connection
$mysqli->close();

//////////////////////////////REGISTRATION FORM///////////////////////
// Create a database connection
$mysqli = new mysqli($hostname, $username, $password, $database_name);

// Check if the connection was successful
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Get user inputs from the form
$fullName = $_POST['fullName'];
$phoneNumber = $_POST['phoneNumber'];
$email = $_POST['email'];
$universityId = $_POST['universityId'];
$programOfStudy = $_POST['programOfStudy'];
$yearOfStudy = $_POST['yearOfStudy'];

// SQL query to insert data into the 'registration' table
$sql = "INSERT INTO registration (full_name, phone_number, email, university_id, program_of_study, year_of_study) VALUES ('$fullName', '$phoneNumber', '$email', '$universityId', '$programOfStudy', '$yearOfStudy')";

// Execute the SQL query
if ($mysqli->query($sql) === TRUE) {
    echo "Registration successful!";
} else {
    echo "Error: " . $sql . "<br>" . $mysqli->error;
}

// Close the database connection
$mysqli->close();

?>
