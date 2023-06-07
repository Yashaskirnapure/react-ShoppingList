import React from 'react'
import ItemList from './ItemList';

const Content = ({fetchError, items, setItems, handleCheck, handleDelete}) => {
  return (
    <>
      {items.length ? (
          <ItemList
              items={items}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
          />
        ) : (
          <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
      )}
    </>
  )
}

export default Content