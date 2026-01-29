function sendToWhatsApp() {
  var pickup = document.getElementById("pickup").value;
  var delivery = document.getElementById("delivery").value;
  var truck = document.getElementById("truck").value;
  var container = document.getElementById("container").value;
  var phone = document.getElementById("phone").value;

  if (pickup === "" || delivery === "" || phone === "") {
    alert("Please fill in pickup, delivery, and phone number.");
    return;
  }

  var message =
    "New Truck Booking:%0A" +
    "Pickup Location: " + pickup + "%0A" +
    "Delivery Location: " + delivery + "%0A" +
    "Truck Type: " + truck + "%0A" +
    "Container Size: " + container + "%0A" +
    "Customer Phone: " + phone;

  var whatsappNumber = "250700000000"; // CHANGE THIS LATER

  var url = "https://wa.me/" + whatsappNumber + "?text=" + message;
  window.open(url, "_blank");
}
