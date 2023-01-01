const uname=document.getElementById("uname");
const email=document.getElementById("email");
const pass=document.getElementById("pass");
const cpass=document.getElementById("cpass");

    email.addEventListener("input", function emailcheck() {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!emailRegex.test(email.value)) {
        email.setCustomValidity("Please enter a valid email address");
        } else {
        email.setCustomValidity("");
    }
  });
  pass.addEventListener("input", function pswcheck(){
    const pswRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!pswRegex.test(pass.value)) {
        pass.setCustomValidity("Please enter a valid password");
      } else {
        pass.setCustomValidity("");
      }
    });
    cpass.addEventListener("input", function(event) {
 
        if (pass.value !== cpass.value) {
          cpass.setCustomValidity("Please enter the same password");
          event.preventDefault();
        } else {
          cpass.setCustomValidity("");
        }
      });