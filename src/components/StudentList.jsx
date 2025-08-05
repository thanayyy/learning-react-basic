import { useState } from "react";
import "../css/StudentList.css";
import Item from "./Item";
const StudentList = ({students, deleteStudent}) => {
  const [show, setShow] = useState(true);
  return (
    <>
      <ul>
        <div className="header">
          <h1>จำนวนนักเรียน = {students.length}</h1>
          <button onClick={() => setShow(!show)}>
            {show ? "ซ่อน" : "แสดง"}
          </button>
        </div>
        {show &&
          students.map((data) => (
            <Item key={data.id} data={data} deleteStudent={deleteStudent} />
          ))}
      </ul>
    </>
  );
};

export default StudentList;
