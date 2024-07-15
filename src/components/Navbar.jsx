import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
  const amount = useSelector(state=> state.amount)
  return (
    <nav id='navbar'>
      <p>Bank of Ratlam</p>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
      <button >Your balance is {amount}</button>
    </nav>
  )
}

export default Navbar
