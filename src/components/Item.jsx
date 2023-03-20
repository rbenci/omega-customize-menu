/** @format */

import React, { useEffect } from "react";
import { handleDelete } from "../utils/DeleteFunc";
import { GrFormEdit } from "react-icons/gr";
import { useState } from "react";
import { updateItem } from '../utils/UpdateFunc';

export default function Item({ bigList, item, setList }) {
  const [itemName, setItemName] = useState(item.name);
  const [editing, setEditing] = useState(false);

  const inputRef = React.useRef();

  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
	}, [editing]);

  const deleteItem = (e) => {
    e.preventDefault();
    handleDelete(bigList, item, setList);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEditing((prev) => !prev);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setEditing((prev) => !prev);
  };  

  const handleSubmit = (e) => {
    e.preventDefault();

    // update the in the biglist
    updateItem(bigList, item, setList, itemName);


    setEditing((prev) => !prev);
  };


  return (
    <div>
      {editing ? (
        <div className="item">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Add something..."
              ref={inputRef}
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
            <button
              type="button"
              className="btn btn-outline-dark btn-md"
              onClick={handleSubmit}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-outline-dark btn-md"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="item">
          {itemName}

          <div className="item-btns">
            <GrFormEdit
              size={25}
              style={{ cursor: "pointer", margin: "0 0.5rem" }}
              onClick={handleEdit}
            />
            <button
              type="button"
              className="btn btn-close"
              onClick={deleteItem}
            ></button>
          </div>
        </div>
      )}
    </div>
  );
}
