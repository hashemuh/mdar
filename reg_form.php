<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $country = $_POST['country'];
    $city = $_POST['city'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];

    // You can perform further validation and processing of the data here

    // Display success message
    echo "Thank you for your submission, $name! We will contact you very soon.";
}
?>
