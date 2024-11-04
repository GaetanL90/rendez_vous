

function validateSignup() {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var id = document.getElementById("id").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    // Perform validation here
    if (!fullname || !email || !phone || !id || !password || !confirm_password) {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirm_password) {
        alert("Passwords do not match.");
        return;
    }

    // Validation passed, submit the form (you can replace this with an AJAX call)
    document.getElementById("signupForm").submit();
}// Define valid sectors for each district
const sectorsByDistrict = {
    Kicukiro: [
        "Gatenga",
        "Gikondo",
        "Kagarama",
        "Kicukiro",
        "Kigarama",
        "Masaka",
        "Niboye",
        "Nyanza",
        "Gatenga"
    ],
    Nyarugenge: [
        "Biryogo",
        "Kanyinya",
        "Kimisagara",
        "Kimuhurura",
        "Kinyinya",
        "Mageragere",
        "Nyakabanda",
        "Nyamirambo",
        "Rwezamenyo"
    ],
    Gasabo: [
        "Gatsata",
        "Gikomero",
        "Gisozi",
        "Jabana",
        "Jali",
        "Kanombe",
        "Kinyinya",
        "Ndera",
        "Rusororo"
    ]
};

// Function to populate sector options based on the selected district
function populateSectors() {
    const districtSelect = document.getElementById("district");
    const sectorSelect = document.getElementById("sector");
    const selectedDistrict = districtSelect.value;

    // Clear previous options
    sectorSelect.innerHTML = "";

    // Populate sector options based on the selected district
    if (selectedDistrict && sectorsByDistrict[selectedDistrict]) {
        sectorsByDistrict[selectedDistrict].forEach(sector => {
            const option = document.createElement("option");
            option.value = sector;
            option.textContent = sector;
            sectorSelect.appendChild(option);
        });
    } else {
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Select sector";
        sectorSelect.appendChild(defaultOption);
    }
}

// Add an event listener to the district dropdown to trigger sector population
const districtSelect = document.getElementById("district");
districtSelect.addEventListener("change", populateSectors);

// Initial population when the page loads
populateSectors();
