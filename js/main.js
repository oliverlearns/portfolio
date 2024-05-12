// arrow button functionality
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 900) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});


// View resume button functionality
function openPdf() {
  var pdfUrl = './css/assets/myresume.pdf';
  window.open(pdfUrl, '_blank');
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Linkedin icon functionality
const linkedinLink = document.getElementById("linkedin-link");

linkedinLink.addEventListener("click", function(event) {
  event.preventDefault();
  const isConfirmed = confirm("Are you sure you want to visit LinkedIn?");
  
  if (isConfirmed) {
    const linkedinUrl = "https://www.linkedin.com/in/olivergarciajr/";
    window.open(linkedinUrl, "_blank");
  }
});

// Facebook icon functionality
const facebookLink = document.getElementById("facebook-link");

facebookLink.addEventListener("click", function(event) {
  event.preventDefault();
  const isConfirmed = confirm("Are you sure you want to visit Facebook?");
  
  if (isConfirmed) {
    const facebookUrl = "https://www.facebook.com/odyigarcia";
    window.open(facebookUrl, "_blank");
  }
});

// Phone icon functionality
const phoneIcon = document.getElementById("phone-icon");

phoneIcon.addEventListener("click", function(event) {
    const phoneNumber = "09166653291";
    navigator.clipboard.writeText(phoneNumber);

    alert("Phone number copied to clipboard!");
    event.preventDefault();
});
