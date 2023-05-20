function sendEmail() {
  const emailBody = {
    SecureToken: "445bfc2e-a67b-4a89-809b-290055bd260e",
    To: "Sales@sunmars.in",
    From: "kirti2198@gmail.com",
    Subject: "New Contact Form Enquiry",
    Body: `Name: ${document.getElementById("name").value}  <br>
      Email: ${document.getElementById("email").value} <br>
      PhoneNo: ${document.getElementById("phone").value} <br> 
      Site : ${document.getElementById("site").value} <br>
      Message : ${document.getElementById("message").value} <br>
      `,
  };
  Email.send(emailBody).then((message) => alert(message));
}

function sendSubscriptionEmail() {
  const emailBody = {
    SecureToken: "445bfc2e-a67b-4a89-809b-290055bd260e",
    To: "Sales@sunmars.in",
    From: "kirti2198@gmail.com",
    Subject: "Subscription Mail",
    Body: `Email: ${
      document.getElementById("subscribe-email").value
    }is subscribed to our news letter
      `,
  };
  Email.send(emailBody).then((message) => alert(message));
}
