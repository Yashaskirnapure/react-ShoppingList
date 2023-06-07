import React from 'react'

const Error = ({fetchError}) => {
  return (
    fetchError ? 
    <div className='Error'>
        <p>Error</p>
    </div>:<div></div>
  )
}

export default Error