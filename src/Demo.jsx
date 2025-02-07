import React, { useState } from "react";

function Demo() {
  // Sample data
  const [data, setData] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  // State to manage modal visibility and selected item
  const [selectedItem, setSelectedItem] = useState(null);
  const [newName, setNewName] = useState("");

  // Function to handle update button click
  const handleUpdate = (id) => {
    const item = data.find((item) => item.id === id);
    setSelectedItem(item); // Set the selected item to display in the modal
    setNewName(item.name); // Pre-fill the input field with the current name
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedItem(null);
    setNewName(""); // Clear the input field
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (selectedItem) {
      // Update existing item
      setData((prevData) =>
        prevData.map((item) =>
          item.id === selectedItem.id ? { ...item, name: newName } : item
        )
      );
    } else {
      // Add new item
      const newId = data.length ? data[data.length - 1].id + 1 : 1; // Generate new ID
      setData((prevData) => [...prevData, { id: newId, name: newName }]);
    }
    closeModal(); // Close the modal after submission
  };

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h1>Update or Add Data</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id} style={{ margin: "10px 0" }}>
              <span style={{ marginRight: "10px" }}>{item.name}</span>
              <button onClick={() => handleUpdate(item.id)}>Update</button>
            </li>
          ))}
        </ul>
        {/* <button onClick={() => setSelectedItem(null)}>Add New</button> */}
      </div>

      {/* Modal */}
      {(selectedItem || newName) && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "300px",
              textAlign: "center",
            }}
          >
            <h2>{selectedItem ? "Update Item" : "Add New Item"}</h2>
            {selectedItem && (
              <p>
                <strong>ID:</strong> {selectedItem.id}
              </p>
            )}
            <input
              type="text"
              placeholder="Enter name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                boxSizing: "border-box",
              }}
            />
            <button onClick={handleSubmit} style={{ marginRight: "10px" }}>
              Submit
            </button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Demo;
