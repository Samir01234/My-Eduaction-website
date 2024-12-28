let userName = document.getElementById("userName");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let comment = document.getElementById("comment");
let formval = document.getElementById("form");
let msg = document.getElementById("message");

function validdata() {
  let nameval = userName.value;
  let emailval = email.value;
  let subjectval = subject.value;
  let commentval = comment.value;
  if ((nameval = null || nameval == "")) {
    alert("Name can't be blank");
    return false;
  }
  else if ((emailval = null || emailval == "")) {
    alert("Fill the email");
    return false;
  } else if ((subjectval = null || subjectval == "")) {
    alert("Fill the subject");
    return false;
  } else if ((commentval = null || commentval == "")) {
    alert("Fill the comment");
    return false;
  }
}

formval.addEventListener("submit", validdata);
