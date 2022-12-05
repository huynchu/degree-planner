const addSembtn = document.querySelector("#add-sem-btn");
addSembtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Read user semester input
  const semNameInput = document.querySelector("#sem-name-input");
  const yearInput = document.querySelector("#class-year-select");
  const semName = semNameInput.value;
  const year = yearInput.value;

  if (semName.length === 0) {
    alert("Please Enter a Semester name");
    return;
  }
  document.querySelector(".empty").classList.add("hidden");
  // Select the correct year and unhide
  root = document.querySelector(`#${year}`);
  root.classList.remove("hidden");

  // Creating Semester Div
  const semesterDiv = document.createElement("div");
  semesterDiv.classList.add("semester");
  semesterDiv.innerHTML = `
  <div class="container">
    <h3>${semName}</h3>
    <i class="fa-solid fa-xmark delete-sem" id="delete-sem"></i>
  </div>
  <form action="" class="add-course-form">
    <input type="text" class="text-input" id="course-input" placeholder="Enter a course name">
    <select name="credit" id="credit" class="select">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4" selected>4</option>
    </select>
    <input id="submit" type="submit" value="Add Course" class="submit-button">
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
    // Reading user input
    const courseNameInput = semesterDiv.querySelector("#course-input");
    const creditInput = semesterDiv.querySelector("#credit");
    const courseName = courseNameInput.value;
    const credit = creditInput.value;

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

      // Delete Course
      const trashIcon = document.createElement("i");
      trashIcon.className = "fa-solid fa-trash delete-course";
      trashIcon.addEventListener("click", (e) => {
        courseItem.remove();
      });

      const checkIcon = document.createElement("i");
      checkIcon.className = "fa-regular fa-square-check check-course";
      checkIcon.addEventListener("click", (e) => {
        if (courseItem.classList.contains("completed")) {
          courseItem.classList.remove("completed");
        } else {
          courseItem.classList.add("completed");
        }
      });

      const childDiv = document.createElement("div");
      childDiv.appendChild(checkIcon);
      childDiv.appendChild(trashIcon);
      courseItem.append(childDiv);

      const courseList = semesterDiv.querySelector("#course-list");
      courseList.appendChild(courseItem);

      // reset input
      courseNameInput.value = "";
    }
  });

  const yearContent = document.querySelector(`#${year}` + "-content");
  yearContent.appendChild(semesterDiv);

  semNameInput.value = "";
});
