const tracks = document.querySelector('#general-stats-tracks > tbody');
const gender = document.querySelector('#general-stats-gender > tbody');
const age = document.querySelector('#general-stats-age > tbody');

// General function
function generalStatsTable(students) {
  countTracks(students);
  countGender(students);
  countAge(students);
}

export default generalStatsTable;

// Auxillary functions
function countTracks(students) {
  const countArr = [0, 0, 0];
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    if (student.track === 'Frontend Engineering') {
      countArr[0]++;
    } else if (student.track === 'Backend Engineering') {
      countArr[1]++;
    } else {
      countArr[2]++;
    }
  }

  // tracks.innerHTML = countArr.map((x) => `<td>${x}</td>`);
  tracks.innerHTML = `<tr><td>${countArr[0]}</td><td>${countArr[1]}</td><td>${countArr[2]}</td></tr>`;
}

function countGender(students) {
  const countArr = [0, 0, 0];
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    if (student.gender === 'Male') {
      countArr[0]++;
    } else if (student.gender === 'Female') {
      countArr[1]++;
    } else {
      countArr[2]++;
    }
  }

  gender.innerHTML = `<tr><td>${countArr[0]}</td><td>${countArr[1]}</td><td>${countArr[2]}</td></tr>`;
}

function countAge(students) {
  const countArr = [0, 0, 0];
  const ageArr = [];
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    ageArr.push(student.age);
  }

  ageArr.sort((a, b) => a - b);

  countArr[0] = ageArr[ageArr.length - 1];
  countArr[1] = ageArr[0];
  countArr[2] = Math.floor(
    ageArr.reduce((prev, curr) => prev + curr) / ageArr.length
  );

  age.innerHTML = `<tr><td>${countArr[0]}</td><td>${countArr[1]}</td><td>${countArr[2]}</td></tr>`;
}
