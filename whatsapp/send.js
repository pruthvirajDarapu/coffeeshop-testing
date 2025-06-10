document.addEventListener('DOMContentLoaded', function() {
   var phoneInput = document.getElementById('phone');
   if (phoneInput) {
      phoneInput.addEventListener('input', function(e) {
         // Remove all non-digit characters
         this.value = this.value.replace(/\D/g, '');
      });
   }

   var btn = document.getElementById('sendWhatsapp');
   if (!btn) return;
   btn.onclick = function() {
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
      var message = document.getElementById('message').value;

      // Validate phone: only digits, starts with country code, length at least 10
      if (!/^\d{10,15}$/.test(phone) || phone[0] === '0') {
         alert('Please enter a valid mobile number with country code (e.g., 919876543210).');
         return;
      }

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
