const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".contact-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const email = form.dataset.contactEmail || "contact@tissuraach.tn";
    const subject = encodeURIComponent(`Demande ${data.get("topic") || "Tissu Raach"}`);
    const body = encodeURIComponent([
      `Nom : ${data.get("name") || ""}`,
      `Telephone : ${data.get("phone") || ""}`,
      `Email : ${data.get("email") || ""}`,
      `Besoin : ${data.get("topic") || ""}`,
      "",
      data.get("message") || ""
    ].join("\n"));
    const button = form.querySelector("button[type='submit']");
    if (button) {
      button.textContent = "Ouverture de votre messagerie";
    }
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
});
