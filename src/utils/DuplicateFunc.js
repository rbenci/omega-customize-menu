/** @format */
import { v4 as uuid } from 'uuid';


export const duplicateItem = (bigList, item) => {

    let newList = [...bigList]

    for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === item.id) {
            const newItem = { ...item, id: uuid(), name: item.name+" copy" };
            newList.splice(i + 1, 0, newItem);
            break;
        } 
        if (newList[i].list) {
            newList[i].list = duplicateNested(newList[i].list, item);

        }
    }

    return newList;
  };
  
  const duplicateNested = (list, item) => {

    let newList = [...list]

    for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === item.id) {
            const newItem = { ...item, id: uuid(), name: item.name + " copy"};
            newList.splice(i + 1, 0, newItem);
            break;
        }
        if (newList[i].list) {
            newList[i].list = duplicateNested(newList[i].list, item);
        }
    }

    return newList;

  };
  