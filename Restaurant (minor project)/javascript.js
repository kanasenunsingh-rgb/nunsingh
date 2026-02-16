/* =========================
   MENU FILTER FUNCTION
========================= */

function filterMenu(category) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (category === "all") {
      card.style.display = "block";
    } else {
      // category mapping based on card content
      const itemName = card.querySelector("h3").innerText.toLowerCase();

      if (
        (category === "Starters" && itemName.includes("roll")) ||
        (category === "Main Course" && itemName.includes("paneer")) ||
        (category === "Desserts" && itemName.includes("cake")) ||
        (category === "Beverages" && itemName.includes("coffee"))
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  });
}


/* =========================
   ADD BUTTON FUNCTION
========================= */

const addButtons = document.querySelectorAll("#jkl");

addButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.innerText = "Added ✔";
    btn.style.backgroundColor = "#28a745";
    btn.style.color = "white";

    setTimeout(() => {
      btn.innerText = "Add";
      btn.style.backgroundColor = "#000";
      btn.style.color = "white";
    }, 1500);
  });
});


/* =========================
   MOBILE NAV RESPONSIVE
========================= */

const nav = document.querySelector("nav");
const navLinks = nav.querySelector("div");

const menuBtn = document.createElement("span");
menuBtn.innerHTML = "☰";
menuBtn.style.fontSize = "26px";
menuBtn.style.cursor = "pointer";
menuBtn.style.display = "none";

nav.prepend(menuBtn);

// Show hamburger on small screens
function checkScreen() {
  if (window.innerWidth <= 768) {
    menuBtn.style.display = "block";
    navLinks.style.display = "none";
    nav.style.flexWrap = "wrap";
  } else {
    menuBtn.style.display = "none";
    navLinks.style.display = "block";
  }
}

menuBtn.addEventListener("click", () => {
  navLinks.style.display =
    navLinks.style.display === "block" ? "none" : "block";
});

window.addEventListener("resize", checkScreen);
window.addEventListener("load", checkScreen);

