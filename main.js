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
  const semesterDiv = document.createElement("div");
  semesterDiv.classList.add("semester");
  semesterDiv.innerHTML = `<h2>${semName}</h2>
  <form action="">
    <input type="text" class="course-input" id="course-input">
    <select name="credit" id="credit">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4" selected>4</option>
    </select>
    <input id="submit" type="submit" value="Add Course">
  </form>
  <button> Delete Semester </button>`;
  console.log(semesterDiv);
  const addCourseBtn = semesterDiv.querySelector("#submit");
  console.log(addCourseBtn);
  addCourseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(semesterDiv);
    const courseName = semesterDiv.querySelector("#course-input").value;
    const credit = semesterDiv.querySelector("#credit").value;
    if (courseName.length == 0) {
      alert("Please enter a course name");
    } else {
      // create course items here
    }
  });
  root.appendChild(semesterDiv);
});
