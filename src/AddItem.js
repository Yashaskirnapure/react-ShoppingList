import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form action="" className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="newItem">Add Item</label>
        <input 
            type="text"
            autoFocus
            id='newItem'
            placeholder='Input new item'
            required
            value = {newItem}
            onChange = {(e) => setNewItem(e.target.value)}
        />
        <button
            type='submit'
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem