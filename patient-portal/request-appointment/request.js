var provinces = ["Kigali City", "Northern Province", "Southern Province", "Eastern Province", "Western Province"];
var districts = {
    "Kigali City": ["Gasabo", "Kicukiro", "Nyarugenge"],
    "Northern Province": ["Burera", "Gicumbi", "Musanze", "Rulindo"],
    "Southern Province": ["Gisagara", "Huye", "Kamonyi", "Muhanga", "Nyamagabe", "Nyanza", "Nyaruguru", "Ruhango"],
    "Eastern Province": ["Bugesera", "Gatsibo", "Kayonza", "Kirehe", "Ngoma", "Nyagatare", "Rwamagana"],
    "Western Province": ["Karongi", "Ngororero", "Nyabihu", "Nyamasheke", "Rubavu", "Rusizi", "Rutsiro"]
};

var doctors = [
    
    { name: "Dr. Emmanuel Uwimana", specialization: "Cardiology", sector: "Bumbogo" },
    { name: "Dr. Grace Mukeshimana", specialization: "Dermatology", sector: "Gatsata" },
    { name: "Dr. Charles Munyaneza", specialization: "Orthopedics", sector: "Kigali" },
    { name: "Dr. Jacqueline Uwase", specialization: "Pediatrics", sector: "Gasabo" },
    { name: "Dr. Felix Niyonzima", specialization: "Neurology", sector: "Kimironko" },
    { name: "Dr. Marie Uwitonze", specialization: "Obstetrics", sector: "Kimironko" },
    { name: "Dr. Augustin Mutesi", specialization: "Dentistry", sector: "Ndera" },
    { name: "Dr. Albert Bizimana", specialization: "Ophthalmology", sector: "Nduba" },
    { name: "Dr. Beatrice Niyibizi", specialization: "Psychiatry", sector: "Remera" },
    { name: "Dr. Eric Uwamahoro", specialization: "Gastroenterology", sector: "Gatsata" },
    { name: "Dr. Emmanuel Uwimana", specialization: "Cardiology", sector: "Bumbogo" },
    { name: "Dr. Grace Mukeshimana", specialization: "Dermatology", sector: "Gatsata" },
    { name: "Dr. Charles Munyaneza", specialization: "Orthopedics", sector: "Kigali" },
    { name: "Dr. Jacqueline Uwase", specialization: "Pediatrics", sector: "Gasabo" },
    { name: "Dr. Felix Niyonzima", specialization: "Neurology", sector: "Kimironko" },
    { name: "Dr. Marie Uwitonze", specialization: "Obstetrics", sector: "Kimironko" },
    { name: "Dr. Augustin Mutesi", specialization: "Dentistry", sector: "Ndera" },
    { name: "Dr. Albert Bizimana", specialization: "Ophthalmology", sector: "Nduba" },
    { name: "Dr. Beatrice Niyibizi", specialization: "Psychiatry", sector: "Remera" },
    { name: "Dr. Eric Uwamahoro", specialization: "Gastroenterology", sector: "Gatsata" },
    { name: "Dr. Emmanuel Nzeyimana", specialization: "Cardiology", sector: "Cyanzarwe" },
    { name: "Dr. Grace Mutabazi", specialization: "Dermatology", sector: "Gataraga" },
    { name: "Dr. Charlotte Gasana", specialization: "Orthopedics", sector: "Kinigi" },
    { name: "Dr. Jean Claude Habimana", specialization: "Pediatrics", sector: "Musanze" },
    { name: "Dr. Fiona Nkurunziza", specialization: "Neurology", sector: "Gahini" },
    { name: "Dr. Didier Uwamariya", specialization: "Obstetrics", sector: "Rwinkwavu" },
    { name: "Dr. Angelique Mugabe", specialization: "Dentistry", sector: "Byimana" },
    { name: "Dr. Yves Mukiza", specialization: "Ophthalmology", sector: "Gihango" },
    { name: "Dr. Grace Uwase", specialization: "Psychiatry", sector: "Karangazi" },
    { name: "Dr. Jean Pierre Munyaneza", specialization: "Gastroenterology", sector: "Murundi" },
    
    // Add more dummy data...
];
var specializations = [...new Set(doctors.map(doctor => doctor.specialization))];

// Creating an object with all mentioned specializations
var specializationsObject = {};
specializations.forEach(specialization => {
    specializationsObject[specialization] = true;
});
var sectors = {
    "Gasabo": ["Bumbogo", "Gatsata", "Jabana", "Kacyiru", "Kimihurura", "Kimironko", "Ndera", "Nduba", "Remera"],
    "Kicukiro": ["Gahanga", "Gatenga", "Kagarama", "Kanombe", "Kicukiro", "Niboye"],
    "Nyarugenge": ["Cyaruzinge", "Kanyinya", "Kigali", "Kimisagara", "Mageragere", "Muhima", "Nyakabanda", "Nyamirambo"],
    "Burera": ["Butaro", "Cyanika", "Cyeru", "Kagogo", "Kinoni", "Kinyababa", "Kivuye", "Nemba", "Rugarama", "Rugendabari", "Ruhunde", "Rusarabuye"],
    "Gicumbi": ["Bukure", "Bwisige", "Byumba", "Cyumba", "Giti", "Kaniga", "Migeshi", "Miyove", "Muko", "Mutete", "Nyamiyaga", "Remera", "Rukomo", "Rushaki", "Rusumo", "Rutare"],
    "Musanze": ["Busogo", "Cyanzarwe", "Gataraga", "Gacaca", "Kimonyi", "Kinigi", "Muhoza", "Muko", "Musanze", "Nkotsi"],
    "Rulindo": ["Base", "Burega", "Bungwe", "Bushoki", "Buyoga", "Cyarubare", "Cyaruvumba", "Kigali", "Kinihira", "Muhondo", "Murambi", "Ngoma", "Ntarabana", "Rusiga"],
    "Bugesera": ["Gashora", "Juru", "Mayange", "Musenyi", "Ntarama", "Nyarugenge", "Rilima", "Ruhuha", "Rweru"],
    "Gatsibo": ["Gasange", "Gitoki", "Kabarore", "Kageyo", "Kiramuruzi", "Kiziguro", "Muhura", "Murambi", "Ngarama", "Nyagihanga", "Remera"],
    "Kayonza": ["Gahini", "Kabare", "Murama", "Murundi", "Mwiri", "Ndego", "Nyamirama", "Rukara", "Ruramira", "Rwinkwavu"],
    "Kirehe": ["Gahara", "Kigarama", "Kigina", "Kirehe", "Mahama", "Mpanga", "Musaza", "Nasho", "Nyamugali", "Nyankoma", "Nyarubuye"],
    "Ngoma": ["Gashanda", "Jarama", "Karembo", "Kazo", "Kibungo", "Murama", "Mutenderi", "Remera", "Rukira"],
    "Nyagatare": ["Gatunda", "Karama", "Karangazi", "Kiyombe", "Mimuri", "Mukama", "Musheli", "Nyagatare", "Rukomo"],
    "Rwamagana": ["Gahengeri", "Gishari", "Kabare", "Kigabiro", "Muhazi", "Munyaga", "Munyiginya", "Mwulire", "Ntunga", "Rubona", "Rukara"],
    "Karongi": ["Bwishyura", "Gishyita", "Murambi", "Mubuga", "Murambi", "Murunda", "Murundi", "Rubengera"],
    "Ngororero": ["Bwira", "Jenda", "Kabatwa", "Kageyo", "Kavumu", "Matyazo", "Muhanda", "Murambi", "Ndaro", "Ngororero", "Ruli"],
    "Nyabihu": ["Bigogwe", "Jomba", "Jombo", "Kintobo", "Kivuye", "Mukamira", "Rambura", "Rugera", "Rurembo"],
    "Nyamasheke": ["Bweyeye", "Bushenge", "Butare", "Gihombo", "Kamatamu", "Karambi", "Karengera", "Kigeme", "Nkombo", "Rangiro", "Rusenyi"],
    "Rubavu": ["Bugeshi", "Bungwe", "Cyangugu", "Gisenyi", "Gitesi", "Nyakiliba", "Nyamyumba", "Nyundo", "Rubavu"],
    "Rusizi": ["Bweyeye", "Bweyeye", "Bweyeye", "Bweyeye", "Bweyeye", "Bweyeye", "Bweyeye", "Bweyeye", "Bweyeye", "Bweyeye"],
    "Huye": ["Gishamvu", "Karama", "Kigoma", "Mukura", "Ngoma", "Ruhashya", "Rusatira", "Simbi", "Tumba"],
    "Kamonyi": ["Gacurabwenge", "Gacurabwenge", "Gacurabwenge", "Gacurabwenge", "Gacurabwenge", "Gacurabwenge", "Gacurabwenge", "Gacurabwenge", "Gacurabwenge"],
    "Muhanga": ["Cyeza", "Gatagara", "Kibangu", "Kiyumba", "Kiyumba", "Mpinga", "Muhanga", "Musambira", "Nkumba", "Rongi"],
    "Ruhango": ["Bweramana", "Byimana", "Gacunzo", "Kinazi", "Kinihira", "Kiyumba", "Mbuye", "Mwendo", "Ntongwe"],
    "Rutsiro": ["Batsinda", "Gihango", "Kabona", "Kigeyo", "Muganza", "Murunda", "Musasa", "Murunda", "Ruhango", "Rusebeya", "Rutsiro"],
    "Nyaruguru": ["Bukinanyana", "Busanze", "Buye", "Kibeho", "Kibeho", "Kigoma", "Kitabi", "Mata", "Muganza", "Munini", "Musange", "Ngera", "Nyabimata", "Nyagisozi"],
        
    // ... (Sectors for other districts)
};

// Function to populate districts based on selected province
function populateDistricts(province) {
    var districtSelect = document.getElementById("district");
    districtSelect.innerHTML = '<option value="" disabled selected>Select District</option>';

    if (province !== "all") {
        districts[province].forEach(function(district) {
            var option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

// Function to populate sectors based on selected district
function populateSectors(district) {
    var sectorSelect = document.getElementById("sector");
    sectorSelect.innerHTML = '<option value="sector" selected>All sectors</option>';

    if (district !== "") {
        sectors[district].forEach(function(sector) {
            var option = document.createElement("option");
            option.value = sector;
            option.textContent = sector;
            sectorSelect.appendChild(option);
        });
    }
}
// Function to populate the Specialization dropdown
function populateSpecializations() {
    var specializationSelect = document.getElementById("specialization");
    specializationSelect.innerHTML = '<option value="" selected>All Specializations</option>';
    
    specializations.forEach(function(specialization) {
        var option = document.createElement("option");
        option.value = specialization;
        option.textContent = specialization;
        specializationSelect.appendChild(option);
    });
}

// Function to populate the Province dropdown
function populateProvinces() {
    var provinceSelect = document.getElementById("province");
    provinceSelect.innerHTML = '<option value="" disabled selected>Select Province</option>';
    
    provinces.forEach(function(province) {
        var option = document.createElement("option");
        option.value = province;
        option.textContent = province;
        provinceSelect.appendChild(option);
    });
}

// Event listener for when the page loads
window.addEventListener("load", function() {
    // Populate the Specialization dropdown
    populateSpecializations();
    
    // Populate the Province dropdown
    populateProvinces();
});

// Function to populate doctors based on selected specialization and sector
function populateDoctors(specialization, sector) {
    var doctorSelect = document.getElementById("doctor");
    doctorSelect.innerHTML = '<option value="" disabled selected>Select Doctor</option>';

    var filteredDoctors = doctors.filter(function(doctor) {
        if (specialization === "all" && sector === "all") {
            return true;
        }
        if (specialization === "all") {
            return doctor.sector === sector;
        }
        if (sector === "all") {
            return doctor.specialization === specialization;
        }
        return doctor.specialization === specialization && doctor.sector === sector;
    });

    filteredDoctors.forEach(function(doctor) {
        var option = document.createElement("option");
        option.value = doctor.name;
        option.textContent = doctor.name;
        doctorSelect.appendChild(option);
    });
}

// Event listeners
document.getElementById("province").addEventListener("change", function() {
    var selectedProvince = this.value;
    populateDistricts(selectedProvince);
    populateSectors(""); // Reset sector dropdown
    populateDoctors("", ""); // Reset doctor dropdown
});

document.getElementById("district").addEventListener("change", function() {
    var selectedDistrict = this.value;
    populateSectors(selectedDistrict);
    populateDoctors("", ""); // Reset doctor dropdown
});

document.getElementById("specialization").addEventListener("change", function() {
    var selectedSpecialization = this.value;
    var selectedSector = document.getElementById("sector").value;
    populateDoctors(selectedSpecialization, selectedSector);
});

document.getElementById("sector").addEventListener("change", function() {
    var selectedSpecialization = document.getElementById("specialization").value;
    var selectedSector = this.value;
    populateDoctors(selectedSpecialization, selectedSector);
});

function submitRequest() {
    var doctor = document.getElementById("doctor").value;
    var date = document.getElementById("date").value;
    
    // Simulate submitting request to server
    // You can use AJAX to send the data to the server
    alert("Appointment request submitted:\nDoctor: " + doctor + "\nDate: " + date);
}
function logout() {
    // Redirect to the login page
    window.location.href = "../../auth/login/login.html";
    return false; // Prevent form submission (if it's inside a form)
}

// Initial population of provinces
populateDistricts("");
