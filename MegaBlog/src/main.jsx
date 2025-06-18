import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import AllPost from './pages/AllPost.jsx'

const root = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Page not found</div>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/Login',
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        )
      },
      {
        path: '/signup',
        element: (
          <Protected authentication={false}>
            <SignUp />
          </Protected>
        )
      },
      {
        path: '/all-posts',
        element: (
          <Protected authentication={true}>
            <AllPost />
          </Protected>
        )
      },
      {
        path: '/add-post',
        element: (
          <Protected authentication={true}>
            <AddPost />
          </Protected>
        )
      },
      {
        path: '/edit-post/:slug',
        element: (
          <Protected authentication={true}>
            <EditPost />
          </Protected>
        )
      },
      {
        path: '/post/:slug',
        element: (
          <Protected authentication={true}>
            <Post />
          </Protected>
        )
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
    <RouterProvider router={root} />
    </ Provider>
  </StrictMode>,
)
