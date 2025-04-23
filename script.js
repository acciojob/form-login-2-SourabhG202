//your JS code here. If required.
const form=document.getElementById('loginForm');

form.addEventListner('submit',finction(e){
  e.preventDefault();
  
  const firstName=document.getElementById('firstName');
  const lastName=document.getElementById('lastName');
  const phoneNumber=document.getElementById('phoneNumber');
  const emailId=document.getElementById('emailId');
  
  alert(
    `First Name\t Last Name\t Phone Number\t Email ID\n` +
    `${firstName}\t ${lastName}\t ${phoneNumber}\t ${emailId}`
    );
});