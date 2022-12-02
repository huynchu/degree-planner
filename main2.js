let years = [
  ["Fall 2020", "Spring 2021"],
  ["Fall 2021", "Spring 2022"],
  ["Fall 2022", "Spring 2023"],
  ["Fall 2023 Away", "Spring 2024"],
  ["Fall 2024"],
];
// root = document.querySelector(".container");

for (let year of years) {
  const yearDiv = document.createElement("div");
  const flexDiv = document.createElement("div");
  flexDiv.classList.add("container");
  for (let sem of year) {
    const semDiv = document.createElement("div");
    const H2 = document.createElement("h2");
    H2.innerText = sem;
    semDiv.appendChild(H2);

    const addCourseForm = document.createElement("form");
    const courseNameInput = document.createElement("input");
    courseNameInput.setAttribute("type", "text");
    courseNameInput.classList.add("course-input");

    const creditSelect = document.createElement("select");
    creditSelect.innerHTML = ` <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4" selected>4</option>`;

    submitBtn = document.createElement("input");
    submitBtn.setAttribute("type", "submit");
    submitBtn.value = "Add Course";

    const courseList = document.createElement("ul");

    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let ccredit = creditSelect.value;
      let cname = courseNameInput.value;
      if (cname.length == 0) {
        return;
      }
      console.log(ccredit, cname);
      const LI = document.createElement("li");
      LI.innerText = `${cname} - ${ccredit}`;

      LI.addEventListener("click", (e) => {
        if (LI.classList.contains("done")) {
          LI.classList.remove("done");
        } else {
          LI.classList.add("done");
        }
      });
      courseList.appendChild(LI);
    });
    addCourseForm.appendChild(courseNameInput);
    addCourseForm.appendChild(creditSelect);
    addCourseForm.appendChild(submitBtn);
    addCourseForm.appendChild(courseList);
    semDiv.appendChild(addCourseForm);
    flexDiv.appendChild(semDiv);
  }
  yearDiv.appendChild(flexDiv);
  document.body.appendChild(yearDiv);
}
