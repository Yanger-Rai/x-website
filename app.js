function scrollToSection() {
  const section = document.querySelector("#cardContainer"); // replace with the ID of the section you want to scroll to
  section.scrollIntoView({ behavior: "smooth" });
}

const scrollButton = document.getElementById("scroll");
scrollButton.addEventListener("click", scrollToSection);
