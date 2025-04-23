// your JS code here
const form = document.getElementById('loginForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const emailId = document.getElementById('emailId').value;
  
  alert(
    `First Name: ${firstName}\n` +
    `Last Name: ${lastName}\n` +
    `Phone Number: ${phoneNumber}\n` +
    `Email ID: ${emailId}`
  );
});
