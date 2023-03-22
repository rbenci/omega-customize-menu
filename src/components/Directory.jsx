/** @format */

import React, { useRef } from "react";
import { ReactSortable } from "react-sortablejs";
import Item from "./Item";
import DeleteButton from './buttons/DeleteButton';

export default function Directory({
  id,
  indexs,
  list,
  setList,
  bigList,
  sortableOptions,
}) {
  const ref = useRef(Color("red"));

  return (
    <div key={id} style={{ padding: 15 }}>
      <ReactSortable
        key={id}
        list={list}
        setList={(currentList) => {
          setList((sourceList) => {
            const tempList = [...sourceList];
            const _indexs = [...indexs];
            const lastIndex = _indexs.pop();
            const lastArr = _indexs.reduce(
              (arr, i) => arr[i]["list"],
              tempList
            );
            lastArr[lastIndex]["list"] = currentList;
            return tempList;
          });
        }}
        style={{ padding: 15, background: ref.current }}
        className="layout"
        {...sortableOptions}
      >
        {list.map((m, index) => {
          if (m.type === "layout") {
            return (
              <div key={m.id} className="basket" >
                <Directory
                  {...m}
                  indexs={[...indexs, index]}
                  setList={setList}
                  bigList={bigList}
                  sortableOptions={sortableOptions}
                />
                <DeleteButton list={bigList} item={m} setList={setList} />
              </div>
            );
          }
          return (
            <Item
              key={m.id}
              item={m}
              setList={setList}
              list={list}
              bigList={bigList}
            />
          );
        })}
      </ReactSortable>
    </div>
  );
}

function Color() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return "rgba(" + r + "," + g + "," + b + ",0.8)";
}
