//function to display vaccine brand when booking an appointment
function addVaccineBrand() {
  if (document.getElementById('pfizer').checked) {
    vaccine_brand = document.getElementById('pfizer').value;
  }
  else if (document.getElementById('moderna').checked) {
    vaccine_brand = document.getElementById('moderna').value;
  }
  else if (document.getElementById('johnson').checked) {
    vaccine_brand = document.getElementById('johnson').value;
  }
  else {
    vaccine_brand = document.getElementById('testd').value;
  }
  console.log(vaccine_brand)
  document.getElementById('vaccinebrandresults').innerHTML = vaccine_brand;
}

//error function when choosing date before vaccine brand
function selectVaccineBrand() {
  var brand = document.forms["vaccineForm"]["vaccinebrand"].value;
  if (brand == "") {
    alert("Error: You must first select an appointment type.");
    return false;
  }
}

//confirm appointment feedback
function confirmAppointment() {
    alert('Thanks for booking an appointment for the ' + vaccine_brand +'. You will receive confirmation shortly.');
    console.log('booking an appointment')
    console.log(vaccine_brand);
}

//local storage function for dose date
function setDoseDate() {
  var selecteddosedate = document.getElementById("dosedate").value;
  localStorage.setItem("dosedatevalue", selecteddosedate);
  console.log("dosedatevalue")
}

//local storage function for dose time
function setDoseTime() {
  var selecteddosetime = document.getElementById("dosetime").value;
  localStorage.setItem("dosetimevalue", selecteddosetime);
  console.log("dosetimevalue")
}

//local storage function for location
function setLocation() {
  localStorage.setItem('doselocationvalue', "TCS Hall");
}


//local storage function for appointment details
function setAppointmentDetails() {
  localStorage.setItem('dosedetailvalue', "Please arrive 15 minutes early. Bring your student ID.");
}

//local storage function for vaccine brand
function setVaccineBrand() {
  if (document.getElementById('pfizer').checked) {
    var selectedvaccinebrand = document.getElementById('pfizer').value;
    localStorage.setItem("vaccinebrandvalue", selectedvaccinebrand);
  }
  else if (document.getElementById('moderna').checked) {
    var selectedvaccinebrand = document.getElementById('moderna').value;
    localStorage.setItem("vaccinebrandvalue", selectedvaccinebrand);
  }
  else if (document.getElementById('johnson').checked) {
    var selectedvaccinebrand = document.getElementById('johnson').value;
    localStorage.setItem("vaccinebrandvalue", selectedvaccinebrand);
  }
  else {
    var selectedvaccinebrand = document.getElementById('testd').value;
    localStorage.setItem("vaccinebrandvalue", selectedvaccinebrand);
  }
  console.log("vaccinebrandvalue")
}

//store row to local storage when user books an appointment
function storeRowToUpcomingAppointments () {
  var aptdate = document.getElementById("dosedate").value;
  localStorage.setItem("newdaterow", aptdate);
  var apttime = document.getElementById("dosetime").value;
  localStorage.setItem("newtimerow", apttime);
  if (document.getElementById('vaccine').checked) {
    var apttype = document.getElementById("vaccine");
    localStorage.setItem("newapttyperow", apttype);
  }
  else {
    var apttype = document.getElementById("test");
    localStorage.setItem("newapttyperow", apttype);
  }
  var aptlocation = "TCS Hall";
  var viewdetails = "View Details";
}


//cancel appointment, appointment confirmation page
function cancelAppointment () {
  localStorage.clear();
  alert("You have successfully cancelled your appointment. You will be returned to your upcoming appointments page.");
  location.href="appointments.html";
}

//function to determine whether the user confirmed their appointment via checking the box
function requiredCheckbox () {
  if(!form.vaccinebrandconfirmation.checked) {
    alert("Please confirm your appointment by checking the box.");
  }
  else {
    return true
  }
}

//function to email for help, faqs
function emailfaq() {
  window.location.href= "mailto:jjia2@andrew.cmu.edu"
}
