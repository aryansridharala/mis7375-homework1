/* 
   Program Name: script.js
   Author: Uma Surya Aryan Sridharala
   Date Created: 02/14/2025
   Date Last Edited: 02/14/2025
   Version: 1.1
   Description: JavaScript for Patient Registration Form
*/

// Set Current Date in Banner
document.addEventListener("DOMContentLoaded", function () {
    var today = new Date();
    var formattedDate = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
    document.getElementById("time").innerHTML = formattedDate;
});

// Populate Cities Based on State Selection
function populateCities() {
    var stateSelect = document.getElementById("state");
    var citySelect = document.getElementById("city");
    var selectedState = stateSelect.value;

    citySelect.innerHTML = '<option value="">Select City</option>'; // Reset city dropdown

    if (selectedState && citiesByState[selectedState]) {
        citiesByState[selectedState].forEach(function(city) {
            var option = document.createElement("option");
            option.value = city;
            option.text = city;
            citySelect.appendChild(option);
        });
    }
}

// Validate Password Fields
document.querySelector("form").addEventListener("submit", function(event) {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        event.preventDefault(); // Stops form submission
    }
});

// Update Health Scale Display
function updateHealthValue() {
    var healthScale = document.getElementById("healthScale");
    var healthValue = document.getElementById("healthValue");
    healthValue.innerHTML = healthScale.value;
}

// State-City Mapping
const citiesByState = {
    'TX': ['Houston', 'Dallas', 'Austin', 'San Antonio'],
    'CA': ['Los Angeles', 'San Diego', 'San Francisco', 'Sacramento'],
    'NY': ['New York City', 'Buffalo', 'Rochester', 'Albany'],
    'FL': ['Miami', 'Orlando', 'Tampa', 'Jacksonville']
};
