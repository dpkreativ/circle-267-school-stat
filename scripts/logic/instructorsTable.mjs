/**
 * CONTRIBUTORS:
 * -> Clinton Mekwunye
 * -> Divine Orji
 * -> Kalango Gabriel
 */

// Rendering the instructor data unto the table.
function instructorsTable(instructors) {


  // sort by name
  instructors.sort(function(a, b) {
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
  // Loop through the instructors array, and run the code inside for each element in the array
  for (let i = 0; i < instructors.length; i++) {
    const tableBody = document.getElementById('instructors-table-body'),
      row = document.createElement('tr'),
      col1 = document.createElement('td'),
      col2 = document.createElement('td'),
      col3 = document.createElement('td'),
      col4 = document.createElement('td');

    // Set instructor's name
    col1.innerHTML = instructors[i].name;

    // Set instructor's track
    switch (instructors[i].track) {
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

    // Set instructor's courses
    col3.innerHTML = instructors[i].courses.join(', ');

    // Set number of courses
    col4.innerHTML = instructors[i].courses.length;

    // Add table data to row
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);

    // Add class to row
    row.className = 'DO-table-row';

    // Add row to table body
    tableBody.appendChild(row);
  }
}

export default instructorsTable;

function trackIndicatorDiv(track) {
  return `<div class="DO-track-indicator track-${track.toLowerCase()}">
    <div class="dot ${track.toLowerCase()}-dot"></div>
    <p>${track}</p>
  </div>`;
}
