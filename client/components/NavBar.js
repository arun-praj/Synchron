import React from 'react'
import Router from 'next/router'
import { Button } from 'react-bootstrap'
import useAuth from '../hooks/useAuth'
import Link from 'next/link'
const NavBar = () => {
   const me = useAuth()
   if (!me) {
      return <h1>Loading</h1>
   }
   return (
      <div>
         {me && (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
               <div className='container-fluid'>
                  <button
                     className='navbar-toggler'
                     type='button'
                     data-mdb-toggle='collapse'
                     data-mdb-target='#navbarSupportedContent'
                     aria-controls='navbarSupportedContent'
                     aria-expanded='false'
                     aria-label='Toggle navigation'
                  >
                     <i className=''></i>
                  </button>

                  <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                     <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                           <Link href='/'>
                              <a className='nav-link'>Home</a>
                           </Link>
                        </li>
                        <li className='nav-item'>
                           <Link href='/dj/admin'>
                              <a className='nav-link'>Admin</a>
                           </Link>
                        </li>
                        <li className='nav-item'>
                           <Link href='/dj/swagger'>
                              <a className='nav-link'>Docs</a>
                           </Link>
                        </li>
                     </ul>
                  </div>

                  <div className='d-flex align-items-center'>
                     <div className='d-flex'>
                        <a
                           className=' d-flex align-items-center text-decoration-none px-4'
                           href='#'
                           id='navbarDropdownMenuAvatar'
                           role='button'
                           data-mdb-toggle='dropdown'
                           aria-expanded='false'
                        >
                           {me.username} ({me.roles})
                        </a>
                        <button
                           type='button'
                           className='btn btn-outline-danger'
                           onClick={async (e) => {
                              e.preventDefault()
                              const res = await fetch('http://127.0.0.1:4000/dj/accounts/logout', { method: 'GET', credentials: 'include' })
                              console.log(res)
                              Router.push(`/dj/accounts/login`)
                           }}
                        >
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='16'
                              height='16'
                              style={{
                                 marginBottom: '3px',
                                 marginRight: '6px',
                              }}
                              fill='currentColor'
                              className='bi bi-box-arrow-right'
                              viewBox='0 0 16 16'
                           >
                              <path
                                 fillRule='evenodd'
                                 d='M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z'
                              ></path>
                              <path
                                 fillRule='evenodd'
                                 d='M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z'
                              ></path>
                           </svg>
                           Logout
                        </button>
                     </div>
                  </div>
               </div>
            </nav>
         )}
      </div>
   )
}

export default NavBar
