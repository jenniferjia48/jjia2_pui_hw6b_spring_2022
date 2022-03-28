//function to display vaccine brand when booking an appointment
function addVaccineBrand() {
  if (document.getElementById('pfizer').checked) {
    vaccine_brand = document.getElementById('pfizer').value;
  }
  else if (document.getElementById('moderna').checked) {
    vaccine_brand = document.getElementById('moderna').value;
  }
  else {
    vaccine_brand = document.getElementById('johnson').value;
  }
  console.log(vaccine_brand)
  document.getElementById('vaccinebrandresults').innerHTML = vaccine_brand;
}

//error function when choosing date before vaccine brand
function selectVaccineBrand() {
  var brand = document.forms["vaccineForm"]["vaccinebrand"].value;
  if (brand == "") {
    alert("Error: You must first select a vaccine brand.");
    return false;
  }
}

//confirm appointment feedback
function confirmAppointment() {
    alert('Thanks for booking an appointment for the ' + vaccine_brand + ' vaccine. You will receive confirmation shortly.');
    console.log('booking an appointment')
    console.log(vaccine_brand);
}

//local storage function for dose date
function setDoseDate() {
  var selecteddosedate = document.getElementById("dosedate").value;
  localStorage.setItem("dosedatevalue", selecteddosedate);
}

//local storage function for dose time
function setDoseTime() {
  var selecteddosetime = document.getElementById("dosetime").value;
  localStorage.setItem("dosetimevalue", selecteddosetime);
}

//local storage function for vaccine brand
function setVaccineBrand() {
  if (document.getElementById('pfizer').checked) {
    var selectedvaccinebrand = document.getElementById('pfizer').value;
    localStorage.setItem("vaccinebrandvalue", selectedvaccinebrand)
  }
  else if (document.getElementById('moderna').checked) {
    var selectedvaccinebrand = document.getElementById('moderna').value;
    localStorage.setItem("vaccinebrandvalue", selectedvaccinebrand)
  }
  else {
    var selectedvaccinebrand = document.getElementById('johnson').value;
    localStorage.setItem("vaccinebrandvalue", selectedvaccinebrand);
  }
}

