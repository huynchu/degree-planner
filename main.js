const addSembtn = document.querySelector("#add-sem-btn");
addSembtn.addEventListener("click", (e) => {
  e.preventDefault();
  const semName = document.querySelector("#sem-name-input").value;
  const year = document.querySelector("#class-year-select").value;
  if (semName.length === 0) {
    alert("Please Enter a Semester name");
    return;
  }

  // Select the correct year and unhide
  root = document.querySelector(`#${year}`);
  root.classList.remove("hidden");

  // Creating Semester Div
  const semesterDiv = document.createElement("div");
  semesterDiv.classList.add("semester");
  semesterDiv.innerHTML = `
  <div class="container">
    <h2>${semName}</h2>
    <i class="fa-solid fa-xmark" id="delete-sem"></i>
  </div>
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
    <div class="course-list" id="course-list"></div>`;

  // Add remove semester button/icon
  const deleteSemester = semesterDiv.querySelector("#delete-sem");
  deleteSemester.addEventListener("click", (e) => {
    semesterDiv.remove();
  });

  // Add course to semester
  const addCourseBtn = semesterDiv.querySelector("#submit");
  console.log(addCourseBtn);
  addCourseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const courseName = semesterDiv.querySelector("#course-input").value;
    const credit = semesterDiv.querySelector("#credit").value;

    // Adding course
    if (courseName.length == 0) {
      alert("Please enter a course name");
    } else {
      const courseItem = document.createElement("div");
      courseItem.className = "container";
      courseItem.innerHTML = `
      <div class="course-container">
        <div>${courseName}</div><div>${credit}</div>
      </div>
      `;

      const trashIcon = document.createElement("i");
      trashIcon.className = "fa-solid fa-trash";
      const checkIcon = document.createElement("i");
      checkIcon.className = "fa-regular fa-square-check";

      const childDiv = document.createElement("div");
      childDiv.appendChild(checkIcon);
      childDiv.appendChild(trashIcon);
      courseItem.append(childDiv);

      const courseList = semesterDiv.querySelector("#course-list");
      courseList.appendChild(courseItem);
    }
  });

  const yearContent = document.querySelector(`#${year}` + "-content");
  yearContent.appendChild(semesterDiv);
});
