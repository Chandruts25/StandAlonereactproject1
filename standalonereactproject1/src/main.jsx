import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyJsx from './MyJsx.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <App />
        <MyJsx />
  </React.StrictMode>,
)
