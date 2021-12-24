/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: "first test", classes: [{ class_name: undefined, students: [{ student_name: "budi" }] }] },
  { session_name: null, classes: [{ class_name: "second class", students: [{ student_name: "adi" }] }] },
];
function result(data) {
  for (let item of data) {
    if (!item.session_name) {
      delete item.session_name;
    }
    for (let temp of item.classes) {
      if (!temp.class_name) {
        delete temp.class_name;
      }
      for (let temp1 of temp.students) {
        if (!temp1.student_name) {
          delete temp1.student_name;
        }
      }
    }
  }
  return data;
}

console.log(result(data));
