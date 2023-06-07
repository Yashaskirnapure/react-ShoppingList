import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <form action="" className='searchForm'>
        <label htmlFor="Search">Search</label>
        <input 
            type="text"
            id='Search'
            placeholder='Search item'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem