import React, { useState } from "react";

import "./App.css";

function App() {
  const [inputData, setInputData] = useState("");
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleInput(e) {
    setInputData(e.target.value);
  }

  const addData = () => {
    if (inputData.trim() !== "") {
      setData([...data, inputData]);
      setInputData("");
    }
  };

  const deleteData = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleSave = (index, newValue) => {
    const newData = [...data];
    newData[index] = newValue;
    setData(newData);
    setEditIndex(null);
  };

  const handleInputTable = (index, e) => {
    const newData = [...data];
    newData[index] = e.target.value;
    setData(newData);
  };

  return (
    <div className="container">
      <div className="input-container">
        <input type="text" value={inputData} onChange={handleInput} />
        <button className="add-button" onClick={addData}>
          Add
        </button>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((name, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {editIndex === index ? (
                  <input
                    className="Edit-input"
                    type="text"
                    value={name}
                    onChange={(e) => handleInputTable(index, e)}
                  />
                ) : (
                  name
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <button
                    className="save-button"
                    onClick={() => handleSave(index, name)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="delete-button"
                  onClick={() => deleteData(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
