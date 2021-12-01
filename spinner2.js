//https://web.compass.lighthouselabs.ca/days/w02d2/activities/863


// Refactor the logic from spinner1.js to remove the repeated setTimeout statements.
// Should have 8-10 lines of code
process.stdout.write('hello from spinner1.js... \rheyyy\n');
// ^^ This shows how to use \r to replace the beginning of the string with the characters you have following \r

const spinner = ['|' , '/', '-' , '\\', '|' , '/', '-', '\\' ];
for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner[i]}   `);
  }, i * 200);
}

// setTimeout(() => {
//   process.stdout.write('\r|   '); // we have lots of spaces at the end of the string just to move the cursor away from where we are printing to make the spinner more visible
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1700);



