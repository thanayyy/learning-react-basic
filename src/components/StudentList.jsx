 import { useState } from "react";
const StudentList = () => {
  const [students, setStudent] = useState([
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
  ]);
  const [show, setShow] = useState(true);
  const deleteStudent = (id) => {
    setStudent(students.filter((item) => item.id !== id));
  };
  return (
    <>
      <h1>จำนวนนักเรียน = {students.length}</h1>
      <button onClick={()=>setShow(!show)}>สลับ</button>
      <ul>
        {students.map((item) => (
          <li key={item.id}>
            <p>
              {item.id} - {item.name}
            </p>
            <button onClick={() => deleteStudent(item.id)}>ลบ</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default StudentList;
