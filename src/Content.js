import React from 'react'
import ItemList from './ItemList';

const Content = ({items, setItems}) => {

  const handleCheck = (id) => {
    const listItems = items.map((item) => 
      item.id === id ? {...item, checked: !item.checked} : item
    );
    setItems(listItems);
    localStorage.setItem('ShoppingList', JSON.stringify(listItems));
  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('ShoppingList', JSON.stringify(listItems));
  }
  
  return (
    <main>
      <ItemList 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}  
      />
    </main>
  )
}

export default Content