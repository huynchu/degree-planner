function convertSemTypeToInt(semType) {
  switch (semType) {
    case "Fall":
      return 1;
    case "Spring":
      return 2;
    case "Arch Summer":
      return 3;
    case "Fall Arch Away":
      return 4;
    case "Spring Arch Away":
      return 5;
  }
}

function compareSemesters(sem1, sem2) {
  if (parseInt(sem1.year) < parseInt(sem2.year)) {
    return -1;
  } else if (parseInt(sem1.year) > parseInt(sem2.year)) {
    return 1;
  } else {
    return (
      convertSemTypeToInt(sem1.semType) - convertSemTypeToInt(sem2.semType)
    );
  }
}

function useSortSemesters(semestersList) {
  console.log(semestersList);
  const sortedSemesters = semestersList.sort((sem1, sem2) =>
    compareSemesters(sem1, sem2)
  );
  return sortedSemesters;
}

export { useSortSemesters };
