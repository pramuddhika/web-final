//-------------------shildeshow----------------------------------------
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
  // Change image every 2 seconds
}

//---------------------------------jquery--------------------------------
//for event page

$(document).ready(function(){
  $(".flip").click(function(){
    $(this).next(".panel").slideToggle("slow");
  });
});

//---------------------contact us form validation------------------------------------------
function validateForm() {
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var comment = document.forms["contactForm"]["text"].value;
  var errorMessages = [];

  if (name.trim() === "") {
      errorMessages.push("Name must be filled out");
  }

  if (email.trim() === "") {
      errorMessages.push("Email must be filled out");
  } else {
      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(email)) {
          errorMessages.push("Please enter a valid email address");
      }
  }

  if (comment.trim() === "") {
      errorMessages.push("Message must be filled out");
  }

  var errorContainer = document.getElementById("errorContainer");
  errorContainer.innerHTML = "";
  if (errorMessages.length > 0) {
      for (var i = 0; i < errorMessages.length; i++) {
          var errorMessage = document.createElement("div");
          errorMessage.className = "error";
          errorMessage.textContent = errorMessages[i];
          errorContainer.appendChild(errorMessage);
      }
      return false; // Prevent form submission
  }
}

//-------------------------registration form------------------------
        function validateForm() {
            var fullName = document.forms["registrationForm"]["fullName"].value;
            var phoneNumber = document.forms["registrationForm"]["phoneNumber"].value;
            var email = document.forms["registrationForm"]["email"].value;
            var confirmEmail = document.forms["registrationForm"]["confirmEmail"].value;
            var universityId = document.forms["registrationForm"]["universityId"].value;
            var programOfStudy = document.forms["registrationForm"]["programOfStudy"].value;
            var yearOfStudy = document.forms["registrationForm"]["yearOfStudy"].value;
            var errorMessages = [];

            if (fullName.trim() === "") {
                errorMessages.push("Full Name must be filled out");
            }

            if (phoneNumber.trim() === "") {
                errorMessages.push("Phone Number must be filled out");
            } else if (!/^\d{10}$/.test(phoneNumber)) {
                errorMessages.push("Phone Number must be a 10-digit number");
            }

            if (email.trim() === "") {
                errorMessages.push("Email must be filled out");
            } else if (!isValidEmail(email)) {
                errorMessages.push("Email is not valid");
            }

            if (confirmEmail.trim() === "") {
                errorMessages.push("Confirm Email must be filled out");
            } else if (confirmEmail !== email) {
                errorMessages.push("Email and Confirm Email must match");
            }

            if (universityId.trim() === "") {
                errorMessages.push("University ID must be filled out");
            }

            if (programOfStudy.trim() === "") {
                errorMessages.push("Program of Study must be filled out");
            }

            if (yearOfStudy.trim() === "") {
                errorMessages.push("Year of Study must be filled out");
            }

            // Display error messages near each input
            for (var i = 0; i < errorMessages.length; i++) {
                var fieldName = errorMessages[i].split(" ")[0].toLowerCase();
                var errorMessage = errorMessages[i];
                document.getElementById(fieldName + "Error").textContent = errorMessage;
            }

            return errorMessages.length === 0; // Allow form submission if no errors
        }

        function isValidEmail(email) {
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return emailPattern.test(email);
        }
        