import React from 'react'

export const Header = () => {
  return (
    <header>
        <nav className='navbar'>
            <h1 className="navbar--title">Newsify</h1>
            <ul className="navbar--list">
                <li className='navbar--list_item'><a href="#">About</a></li>
                <li className='navbar--list_item'><a href="#">Impresum</a></li>
                <li className='navbar--list_item'><a href="#">Links</a></li>
            </ul>
        </nav>
    </header>
  )
}
