import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import SearchItem from './SearchItem';
import React from 'react';
import { useState, useEffect } from 'react';
import AddItem from './AddItem';
import apiRequest from './apiRequest.js';

function App() {
  const API_URL = 'http://localhost:3500/items';

  //const [items, setItems] = useState(JSON.parse(localStorage.getItem('ShoppingList')) || []);
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);

  // useEffect(() => {
  //   localStorage.setItem('ShoppingList', JSON.stringify(items));
  // },[items]);

  useEffect(() => {
    const getListItems = async () => {
      try{
        const response = await fetch(API_URL);
        if(!response.ok) throw new Error('Error Message')
        const listItems = await response.json();
        setItems(listItems);
        console.log(listItems);
        setFetchError(null);
      }catch(err){
        setFetchError(err.message);
        console.log(fetchError);
      }
    }

    const funcCall = async() => getListItems();
    funcCall();
  }, [])

  const addItem = async(item) => {
    // const newItemsList = item.split(',').map((itemName, index) => {
    //   return {
    //     id: items.length ? items[items.length - 1].id + index + 1 : index + 1,
    //     checked: false,
    //     item: itemName.trim()
    //   };
    // });
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method : 'POST',
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(myNewItem)
    };

    const result = await apiRequest(API_URL, postOptions);
    if(result) setFetchError(result);
  };
  
  const handleCheck = async(id) => {
    const listItems = items.map((item) => 
      item.id === id ? {...item, checked: !item.checked} : item
    );
    setItems(listItems);

    const patchOptions = {
      method : 'PATCH',
      headers : {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({checked: listItems[0].checked})
    };

    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, patchOptions);
    if(result) setFetchError(result);
  }

  const handleDelete = async(id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    const deleteOptions = {method : 'DELETE'};
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if(result) setFetchError(result);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header
        title = {'Shopping List'}
      />
      <SearchItem
        search = {search}
        setSearch = {setSearch}
      />
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <main>
        {fetchError && <p style={{color: 'red'}}>Error : {fetchError}</p>}
        {!fetchError && <Content 
          items = {items.filter((item) => 
            (item.item).toLowerCase().includes(search.toLowerCase()))
          }
          setItems = {setItems}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
        />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
