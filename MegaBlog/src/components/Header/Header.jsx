import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Container, Logo, LogoutBtn } from '../index'


function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {name: 'Home', slug: '/', active: true},
    {name: 'Login' , slug: '/login', active: !authStatus},
    {name: 'SignUp', slug: '/signup', active: !authStatus},
    {name: 'All Posts', slug: '/all-posts', active: authStatus},
    {name: 'Add Post', slug: '/add-post', active: authStatus},
  ]
  return (
    <header className='py-4 bg-gray-500 shadow'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'/>
            </Link>
          </div>
          <ul>
            {navItems.map((item) => item.active ? (
              <li key={item.name}>
                <button onClick={() => navigate(item.slug)}
                className='inline-block px-6 py-2 hover:bg-gray-100
                rounded-full duration-200'>
                  {item.name}
                </button>
              </li>
            ) : null)}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
