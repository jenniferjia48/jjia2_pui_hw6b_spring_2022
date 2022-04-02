document.getElementById("dosedateid").innerHTML = localStorage.getItem("dosedatevalue");
document.getElementById("dosetimeid").innerHTML = localStorage.getItem("dosetimevalue");
document.getElementById('vaccinebrandid').innerHTML = localStorage.getItem("vaccinebrandvalue");
document.getElementById("doselocationid").innerHTML = localStorage.getItem("doselocationvalue");
document.getElementById("dosedetailid").innerHTML = localStorage.getItem("dosedetailvalue");
document.getElementById('name').innerHTML = "Hi, " + user.name + ". Welcome to your appointments page.";
document.getElementById('lastappointmentdate').innerHTML = "Your last appointment was on " + user.lastappointment + ".";