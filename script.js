/* ============================================
   Earn2Keep Landing Page Script
   Handles email signup form submission
   ============================================ */

function handleSignup(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const role = document.getElementById("role").value;

  // Basic validation
  if (!name || !email || !role) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  // For now, log the signup and show a success message.
  // Later we'll connect this to Supabase to actually save the signup.
  console.log("New signup:", { name, email, role, timestamp: new Date().toISOString() });

  // Hide the form
  const form = document.getElementById("signup-form");
  form.style.display = "none";

  // Show the success message
  const success = document.getElementById("signup-success");
  success.hidden = false;
  success.textContent = `Thanks, ${name.split(" ")[0]} — we've got you on the list. You'll hear from us soon.`;

  // Save to localStorage as a temporary backup until Supabase is connected
  try {
    const existingSignups = JSON.parse(localStorage.getItem("earn2keep-signups") || "[]");
    existingSignups.push({
      name,
      email,
      role,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem("earn2keep-signups", JSON.stringify(existingSignups));
  } catch (e) {
    // localStorage might be blocked — fail silently, user already saw success
    console.warn("Could not save to localStorage:", e);
  }
}
