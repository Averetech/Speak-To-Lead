let joinNow = document.querySelector(".btn");

joinNow.addEventListener("click", () => {
  window.open("https://www.toastmasters.org/membership/how-to-join", "_blank");
});

function sendEmail() {
  var fullName = document.getElementById("name").value;
  var emailAddress = document.getElementById("email").value;
  var messageSent = document.getElementById("message").value;
  var bodyMessage =
    "Full Name: " +
    fullName +
    "<br />Email Address: " +
    emailAddress +
    "<br />Message: " +
    messageSent;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "mbanezenande@gmail.com",
    Password: "A8CF2F82B32BF20DFBBFECA7845B5CCCE94F",
    To: "mbanezenande@gmail.com",
    From: "mbanezenande@gmail.com",
    Subject: "Toastmasters International",
    Body: bodyMessage,
  }).then((message) => {
    if (message === "OK") {
      swal("Successful!", "You have submitted your info 👌!", "success");
    } else {
      swal("Error!", "Ooops, please try again!", "error");
    }
  });
}