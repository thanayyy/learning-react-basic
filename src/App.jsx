import AddForm from "./components/AddForm";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import "./css/App.css";
import { useState } from "react";
function App() {
  const [students, setStudent] = useState([
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
  ]);
  const deleteStudent = (id) => {
    setStudent(students.filter((item) => item.id !== id));
  };
  return (
    <div className="container">
      <Header />
      <main>
        <AddForm students={students} setStudent={setStudent}/>
        <StudentList students={students} deleteStudent={deleteStudent}/>
      </main>
    </div>
  );
}

export default App;
