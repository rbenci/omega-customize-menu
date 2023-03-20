/** @format */

export const handleDelete = (bigList, item, setList) => {
  let newList = bigList.filter((i) => i.id !== item.id);
  if (newList.length === bigList.length) {
    newList = bigList.filter((i) => {
      if (i.list) {
        i.list = i.list.filter((j) => j.id !== item.id);
        deleteNested(i.list, item);
      }
      return i;
    });
  }
  setList(newList);
};

const deleteNested = (list, item) => {
  list.forEach((i) => {
    if (i.list) {
      i.list = i.list.filter((j) => j.id !== item.id);
      deleteNested(i.list, item);
    }
  });
  return list;
};
