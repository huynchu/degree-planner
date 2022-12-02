const addSembtn = document.querySelector("#add-sem-btn");
addSembtn.addEventListener("click", (e) => {
  e.preventDefault();
  const semName = document.querySelector("#sem-name-input").value;
  const year = document.querySelector("#class-year-select").value;
  console.log(semName, year);

  // Select the correct year and unhide
  root = document.querySelector(`#${year}`);
  root.classList.remove("hidden");

  // Creating Semester Div
  semesterDiv = document.createElement("div");
  semesterDiv.classList;
});
