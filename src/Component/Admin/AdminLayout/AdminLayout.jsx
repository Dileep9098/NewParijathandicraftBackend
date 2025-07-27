import React from 'react'
import AdminTopBar from './AdminTopBar'
import AdminSideBar from './AdminSideBar'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <>
      <div className="wrapper">

        <AdminTopBar />
        <AdminSideBar />
        <div className="content-page">
          <div className="content">
            <Outlet />
          </div>

        </div>
      </div>


    </>

  )
}
