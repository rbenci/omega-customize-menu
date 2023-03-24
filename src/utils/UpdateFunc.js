/** @format */

export const updateItem = (bigList, item, newName) => {

    let newList = [...bigList]

    for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === item.id) {
            newList[i].name = newName;
            break;
        }
        if (newList[i].list) {
            newList[i].list = updateNested(newList[i].list, item, newName);
        }
    }

    return newList;
  };
  
  const updateNested = (list, item, newName) => {

    let newList = [...list]

    for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === item.id) {
            newList[i].name = newName;
            break;
        }
        if (newList[i].list) {
            newList[i].list = updateNested(newList[i].list, item, newName);
        }
    }
    
    return newList;

  };
  