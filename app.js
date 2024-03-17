function handleTabClick(button) {
  document.querySelector(".active-btn").classList.remove("active-btn");
  button.classList.add("active-btn");
  document.querySelector(".active").classList.remove("active");
  document.getElementById(button.dataset.id).classList.add("active");
}

function toggleLightMode() {
  document.body.classList.toggle("light-mode");
}

document.querySelectorAll(".control").forEach((button) => {
  button.addEventListener("click", function () {
    handleTabClick(this);
  });
});

document.querySelector(".theme-btn").addEventListener("click", () => {
  toggleLightMode();
});


function downloadCV() {
  const cvPath = "./ReSume HanZaLa....pdf";
  const link = document.createElement("a");
  link.download = "Resume.pdf";
  link.href = cvPath;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
