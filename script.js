function buyNow() {
    // Step 1: Open Razorpay Payment Link
    window.location.href = "https://rzp.io/l/YOUR_PAYMENT_LINK";
  
    // Step 2 (Optional): After payment success, redirect user to MailerLite form page
    // Replace below link with your MailerLite form page
    setTimeout(() => {
      window.location.href = "https://YOUR-MAILERLITE-FORM-LINK";
    }, 5000);
  }

  document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const item = button.parentElement;
  
      item.classList.toggle("active");
    });
  });