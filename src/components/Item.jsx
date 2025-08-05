import React from "react";
//import {useState} from 'react';
const Item = ({data, deleteStudent}) => {
  return (
    <>
      <li key={data.id}>
        <p>
          {data.id} - {data.name}
        </p>
        <button onClick={() => deleteStudent(data.id)} className="delete">
          ลบ
        </button>
      </li>
    </>
  );
};

export default Item;
