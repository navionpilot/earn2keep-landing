/* ============================================
   Earn2Keep Landing Page Script
   Connects the signup form to Supabase
   ============================================ */

// ============================================
// Supabase configuration
// (anon key is safe to expose — RLS controls access)
// ============================================
const SUPABASE_URL = "https://coxummtndniyozkuopsp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNveHVtbXRuZG5peW96a3VvcHNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwODY1MzAsImV4cCI6MjA5MzY2MjUzMH0.pMbw0UemsJkUHtkc9nFPqo3b2-cA2DI5gz7CnAl_Cgo";

// Initialize the Supabase client (uses the global "supabase" object loaded from the CDN)
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============================================
// Form handling
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");
  if (!form) return;

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    // Grab form values
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const roleInput = document.getElementById("role");
    const button = document.getElementById("signup-btn");
    const successMsg = document.getElementById("signup-success");
    const errorMsg = document.getElementById("signup-error");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim().toLowerCase();
    const role = roleInput.value;

    // Hide any previous messages
    successMsg.hidden = true;
    errorMsg.hidden = true;

    // Basic validation (HTML "required" handles most of this, but double-check)
    if (!name || !email || !role) {
      showError(errorMsg, "Please fill out all fields before submitting.");
      return;
    }

    if (!isValidEmail(email)) {
      showError(errorMsg, "Please enter a valid email address.");
      return;
    }

    // Disable the button and show "submitting" state
    button.disabled = true;
    const originalButtonText = button.textContent;
    button.textContent = "Sending...";

    try {
      // Insert the signup into Supabase
      const { data, error } = await supabaseClient
        .from("signups")
        .insert([
          {
            name: name,
            email: email,
            role: role,
            source: "landing_page"
          }
        ]);

      if (error) {
        console.error("Supabase insert error:", error);
        showError(
          errorMsg,
          "Sorry, we couldn't save your signup. Please try again or contact us directly."
        );
        button.disabled = false;
        button.textContent = originalButtonText;
        return;
      }

      // Success — hide the form, show confirmation
      form.style.display = "none";
      const firstName = name.split(" ")[0];
      successMsg.textContent = `Thanks, ${firstName} — we've got you on the list. You'll hear from us soon.`;
      successMsg.hidden = false;
    } catch (err) {
      console.error("Unexpected error during signup:", err);
      showError(
        errorMsg,
        "Sorry, something went wrong. Please try again in a moment."
      );
      button.disabled = false;
      button.textContent = originalButtonText;
    }
  });
});

// ============================================
// Helpers
// ============================================
function showError(element, message) {
  element.textContent = message;
  element.hidden = false;
}

function isValidEmail(email) {
  // Simple email validation pattern
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
