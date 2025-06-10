document.addEventListener('DOMContentLoaded', function() {
   var btn = document.getElementById('sendWhatsapp');
   if (!btn) return;
   btn.onclick = function() {
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
      var message = document.getElementById('message').value;
      var text = encodeURIComponent(
         "Name: " + name + "\n" +
         "Email: " + email + "\n" +
         "Phone: " + phone + "\n" +
         "Message: " + message
      );
      // Replace with your WhatsApp number, e.g. 919876543210
      var whatsappNumber = "919876543210";
      var url = "https://wa.me/" + whatsappNumber + "?text=" + text;
      window.open(url, '_blank');
   };
});
