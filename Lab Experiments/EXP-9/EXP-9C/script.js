function validateForm() {
  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;
  let email = document.getElementById("email").value;
  let namePattern = /^[A-Za-z][A-Za-z0-9]{5,}$/;
  let mobilePattern = /^[0-9]{10}$/;
  let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!namePattern.test(name)) {
    alert("Invalid Name");
    return false;
  }
  if (!mobilePattern.test(mobile)) {
    alert("Invalid Mobile Number");
    return false;
  }
  if (!emailPattern.test(email)) {
    alert("Invalid Email");
    return false;
  }
  alert("Registration Successful");
  return true;
}