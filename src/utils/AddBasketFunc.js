/** @format */
import { v4 as uuid } from 'uuid';


export const addBasket = (bigList, item) => {

    let newList = [...bigList]

    const newBasket =  { id: uuid(), type: "layout", list: [] }

    for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === item.id) {
            newList.splice(i + 1, 0, newBasket);
            break;
        } 
        if (newList[i].list) {
            newList[i].list = addBasketNested(newList[i].list, item, newBasket);
        }
    }

    return newList;
  };
  
  const addBasketNested = (list, item, newBasket) => {

    let newList = [...list]

    for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === item.id) {
            newList.splice(i + 1, 0, newBasket);
            break;
        }
        if (newList[i].list) {
            newList[i].list = addBasketNested(newList[i].list, item, newBasket);
        }
    }

    return newList;

  };
  