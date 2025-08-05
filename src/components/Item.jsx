import React from "react";
import "../css/Item.css";
//import {useState} from 'react';
const Item = ({ data, deleteStudent }) => {
  return (
    <>
      <li key={data.id} className={data.gender}>
        <p>{data.name}</p>
        <button onClick={() => deleteStudent(data.id)} className="delete">
          ลบ
        </button>
      </li>
    </>
  );
};

export default Item;
