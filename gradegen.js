/** 
 * input student marks.
 *input is converted to number for comparison.
 *&& operator gives truth on all statements.
 * evaluates then output.
 */ 
 const userInput = "Enter student marks between 0 and 100";
const studentMarks = parseInt(userInput);

let grade;
if (!isNaN(studentMarks) && studentMarks >= 0 && studentMarks <= 100) {
if (studentMarks > 79) {
    grade = 'A';
} else if (studentMarks >= 60) {
    grade = 'B';
} else if (studentMarks >= 50) {
    grade = 'C';
} else if (studentMarks >= 40) {
    grade = 'D';
} else {
    grade = 'E';
}
}else {
    grade = 'Invalid input. Marks should be between 0 and 100.';
}

console.log(`studentMarks: ${grade}`);
