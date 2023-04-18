import React from 'react';
import { NavLink } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function NavBar() {
  const state = useSelector((state) => state.handleCart);
  return (
    <nav className='navbar navbar-expand-lg bg-white navbar-light bg-dark py-3 shadow-sm'>
      <div className='container'>
        <NavLink className='navbar-brand'>
          Ecommerce
        </NavLink>
      </div>
    </nav>
  )
}