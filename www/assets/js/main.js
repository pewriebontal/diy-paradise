// Check if user has already made a choice
if (!localStorage.getItem("cookieConsent")) {
  // Show the cookie consent after a short delay
  setTimeout(() => {
    document.querySelector(".cookie-consent").classList.add("show");
  }, 1000);
}

// Handle button clicks
document.querySelectorAll(".cookie-consent button").forEach((button) => {
  button.addEventListener("click", () => {
    // Store the user's choice
    localStorage.setItem(
      "cookieConsent",
      button.classList.contains("accept") ? "accepted" : "declined"
    );
    // Hide the popup
    document.querySelector(".cookie-consent").classList.remove("show");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });

  // Close menu when clicking a link
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const scrollThreshold = 50;

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
