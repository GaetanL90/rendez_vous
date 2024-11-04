<form class="signup-form" action="get_sectors.php" method="post"> 

            <table border="0" cellpadding="0" cellspacing="0" >

                <tr>
                    <td>
                        <input type="text" name="firstname" placeholder="First Name" required>
                    </td>
                    <td>
                        <input type="text" name="lastname" placeholder="Last Name" required>
                    </td>
                </tr>

                <tr>
                    <td>
                        <input type="email" name="email" placeholder="Email Address" required>
                    </td>
                    <td>
                        <input type="phone" name="phone" placeholder="PHONE NUMBER" required>
                    </td>
                </tr>
                    
                    
                
                <tr>
                    <td id="district-select">
                        <select id="district" name="district" required>
                            <option value="" selected disabled>Kicukiro</option>
                            <option value="Kicukiro">Kicukiro</option>
                            <option value="Nyarugenge">Nyarugenge</option>
                            <option value="Gasabo">Gasabo</option>
                        </select>
                    </td>
                    <td id="sector-select">
                        <select id="sector" name="sector" required>
                            <option value="" selected disabled> Select sector</option>
                        </select>
                    </td>
                </tr>
                
                <tr>
                    <td>
                        <input type="text" name="specialization" placeholder="Specialization" required>
                    </td>
                    <td>
                        <input type="text" name="role" placeholder="doctor" required>
                    </td>
                </tr>
                
                <tr>
                    <td>
                        <input type="password" name="password" placeholder="Password" required>
                    </td>
                    
                    <td>
                        <input type="password" name="confirm_password" placeholder="Confirm Password" required>
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <button type="submit">Sign Up</button>
                    </td>
                    <td>
                        <button type="submit"><a class="decor" href="pat-signup.html" style="font-size: 15px;color: black;">continue as patient</a></button>
                    </td>
                </tr>
                
                

            </table>

        </form>
<?php
// Include your database connection code (connection.php) here
include('../../backend/connection.php');

if (isset($_POST['district'])) {
    $selectedDistrict = $_POST['district'];

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
    echo $selectedDistrict;
} 




else {
    echo json_encode(array("error" => "District parameter not provided"));
}

// Close the database connection
mysqli_close($con);
?>
