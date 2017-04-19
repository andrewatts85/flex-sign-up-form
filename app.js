var signUpForm = document.getElementById("signUpForm");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var birthday = document.getElementById("birthday");
var password = document.getElementById("password");
var confirmPassword= document.getElementById("confirmPassword");

signUpForm.addEventListener('submit', function (event) {
  
  validator.isOfLength(firstName.value, 2) ? firstName.className = "valid" : firstName.className = "invalid";
  
  validator.isOfLength(lastName.value, 2) ? lastName.className = "valid" : lastName.className = "invalid";
  
  validator.isEmailAddress(email.value) ? email.className = "valid" : email.className = "invalid";
  
  validator.isBeforeToday(birthday.value) && validator.getAge(birthday.value) >= 18 ? birthday.className = "valid" : birthday.className = "invalid";
  
  validator.isBetween(password.value.length, 6, 8) ? password.className = "valid" : password.className = "invalid";
  
  /*
  password.value === confirmPassword.value ? confirmPassword.className = "valid" : confirmPassword.className = "invalid";
  */
  
  // stop the event from its default action: submitting the form (for our validation, submission is not desired)
  event.preventDefault();
});
