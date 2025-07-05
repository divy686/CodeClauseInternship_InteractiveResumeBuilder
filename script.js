document.getElementById("resume-form").addEventListener("input", () => {
  document.getElementById("preview-name").textContent = document.getElementById("name").value || "Your Name";
  document.getElementById("preview-email").textContent = document.getElementById("email").value;
  document.getElementById("preview-phone").textContent = document.getElementById("phone").value;
  document.getElementById("preview-summary").textContent = document.getElementById("summary").value;
  document.getElementById("preview-education").textContent = document.getElementById("education").value;
  document.getElementById("preview-experience").textContent = document.getElementById("experience").value;

  const skillsInput = document.getElementById("skills").value;
  const skillsArray = skillsInput.split(",");
  const skillsList = document.getElementById("preview-skills");
  skillsList.innerHTML = "";
  skillsArray.forEach(skill => {
    if (skill.trim()) {
      const li = document.createElement("li");
      li.textContent = skill.trim();
      skillsList.appendChild(li);
    }
  });
});

function downloadResume() {
  const resume = document.getElementById("resume-preview");

  html2pdf().from(resume).set({
    margin: 10,
    filename: 'resume.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  }).save();
}
