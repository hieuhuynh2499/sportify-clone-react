import React from 'react'
import Sidebar from '../../sidebar'
import './style.scss'
function MainLayout({ children }) {
  return (
    <div className="mainlayout">
        <div className="mainlayout__left">
            <Sidebar />
        </div>
        <div className="mainlayout__right">
            {children}
        </div>
    </div>
  )
}

export default MainLayout