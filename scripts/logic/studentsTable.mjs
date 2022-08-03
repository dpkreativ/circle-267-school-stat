/**
 * CONTRIBUTORS:
 * -> Clinton Mekwunye
 * -> Divine Orji
 */

// Rendering the student data unto the table.
function studentsTable(students) {
  students.sort(function(a, b) {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  // Loop through the students array, and run the code inside for each element in the array
  for (let i = 0; i < students.length; i++) {
    const tableBody = document.getElementById('students-table-body'),
      row = document.createElement('tr'),
      col1 = document.createElement('td'),
      col2 = document.createElement('td'),
      col3 = document.createElement('td');

    // Set student's name
    col1.innerHTML = students[i].name;

    // Set student's track
    switch (students[i].track) {
      case 'Backend Engineering':
        col2.innerHTML = trackIndicatorDiv('Backend');
        break;
      case 'Cloud Engineering':
        col2.innerHTML = trackIndicatorDiv('Cloud');
        break;
      case 'Frontend Engineering':
        col2.innerHTML = trackIndicatorDiv('Frontend');
        break;
      default:
        break;
    }

    // Set student's courses
    col3.innerHTML = students[i].courses.join(', ');

    // Add table data to row
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);

    // Add class to row
    row.className = 'DO-table-row';

    // Add row to table body
    tableBody.appendChild(row);
  }
}

export default studentsTable;

function trackIndicatorDiv(track) {
  return `<div class="DO-track-indicator track-${track.toLowerCase()}">
    <div class="dot ${track.toLowerCase()}-dot"></div>
    <p>${track}</p>
  </div>`;
}
