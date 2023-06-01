import React from 'react'

const Footer = ({count}) => {
  let today = new Date();  
  return (
    <footer>
        <p>
          Copyright &copy; {today.getFullYear()}
        </p>
        <p>{count}</p>
    </footer>
  )
}

export default Footer