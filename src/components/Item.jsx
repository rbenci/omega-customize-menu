/** @format */

import React, { useEffect } from "react";
import { handleDelete } from "../utils/DeleteFunc";
import { GrFormEdit } from "react-icons/gr";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { BiDuplicate } from "react-icons/bi";
import { useState } from "react";
import { updateItem } from "../utils/UpdateFunc";
import { toast } from "react-toastify";
import { duplicateItem } from "../utils/DuplicateFunc";
import { addBasket } from "../utils/AddBasketFunc";

export default function Item({ bigList, item, setList }) {
  const [itemName, setItemName] = useState(item.name);
  const [prevName, setPrevName] = useState("");
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
    setPrevName(itemName);
  };

  const handleDuplicate = (e) => {
    e.preventDefault();
    const newList = duplicateItem(bigList, item);
    console.log(newList);
    setList(newList);
  };

  const handleAddBasket = (e) => {
    e.preventDefault();
    const newList = addBasket(bigList, item);
    setList(newList);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setEditing((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (itemName.trim()) {
      // update the item in the biglist
      updateItem(bigList, item, itemName);
      setItemName(itemName);
      setEditing(false);
    } else {
      toast.error("Cannot add empty item");
      setItemName(prevName);
      setEditing((prev) => !prev);
    }
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
            <BiDuplicate
              size={21}
              style={{ cursor: "pointer", margin: "0 0.3rem" }}
              color="black"
              onClick={handleDuplicate}
            />
            <AiOutlineFolderAdd
              size={24}
              style={{ cursor: "pointer", margin: "0 0.3rem" }}
              color="black"
              onClick={handleAddBasket}
            />
            <GrFormEdit
              size={25}
              style={{ cursor: "pointer", margin: "0 0.3rem" }}
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
