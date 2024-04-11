import React from "react";

export default function Pch(props) {
  return (
    <div>
      <h2>Phạm Công Hiếu - 2210900101</h2>
      <hr />
      <p>Bài thực hành 1</p>
      <p>Email: {props.email}</p>
      <p>Phone:{props.phone}</p>
    </div>
  );
}
