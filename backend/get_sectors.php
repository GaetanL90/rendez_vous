<?php
// Include your database connection code (connection.php) here
include('connection.php');

if (isset($_GET['district'])) {
    $selectedDistrict = $_GET['district'];

    // Query to fetch sectors based on the selected district
    $query = "SELECT sector FROM locations WHERE district = 'Kicukiro'";
    $result = mysqli_query($con, $query);

    // Check for errors and fetch data
    if ($result) {
        $sectors = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $sectors[] = $row['sector'];
        }
        echo json_encode($sectors);
    } else {
        echo json_encode(array("error" => "Database query error"));
    }
} else {
    echo json_encode(array("error" => "District parameter not provided"));
}

// Close the database connection
mysqli_close($con);
?>
