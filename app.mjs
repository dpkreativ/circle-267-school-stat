/**
 * CONTRIBUTORS:
 * -> Divine Orji
 * -> Clinton Mekwunye
 */

// IMPORTS
// import students from './scripts/database/students.mjs'
import instructors from './scripts/database/instructors.mjs';
import students from './scripts/database/students.mjs';
import generalStatsTable from './scripts/logic/generalStatsTable.mjs';
import instructorsTable from './scripts/logic/instructorsTable.mjs';
import studentsTable from './scripts/logic/studentsTable.mjs';

// Get Elements from HTML file

// Create startApp function
function startApp() {
  console.log(`Let's git this shii!`);
  generalStatsTable(students);
  instructorsTable(instructors);
  studentsTable(students);
}

// Export startApp function
export default startApp;
