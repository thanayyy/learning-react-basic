import React from "react";
import "../css/AddForm.css";
import { useState } from "react";
const AddForm = ({ students, setStudent }) => {
  const [gender, setGender] = useState("male");
  const [name, setName] = useState("");
  const saveStudent = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Enter Your Name!");
    } else {
      const newStudent = {
        id: Date.now(),
        name: name,
        gender:gender
      };
      setStudent([...students, newStudent]);
      setName("");
      setGender("male")
    }
  };
  return (
    <>
      <section className="container">
        <form onSubmit={saveStudent}>
          <label>ชื่อนักเรียน</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">FeMale</option>
          </select>
          <button type="submit" className="btn-add">
            บันทึก
          </button>
        </form>
      </section>
    </>
  );
};

export default AddForm;
