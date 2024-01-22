import Student from "./Student";
import StudentManager from "./StudentManager";

const studentManager = new StudentManager(5);
const student1 = new Student("hoang", "hoang@gmail.com")
const student2 = new Student("hoang1", "hoang1@gmail.com")
const student3 = new Student("hoang2", "hoang3@gmail.com")
studentManager.insert(student1);
studentManager.insert(student2);
studentManager.insert(student3);

studentManager.showList();