import React from 'react'
import Dashboard_component from '@/Components/UserInforForm'
import mongoose from 'mongoose'


const Dashboard = () => {
  return (
    <div>
      <Dashboard_component />
    </div>
  )
}

export default Dashboard

export const metadata = {
    title: "Dashboard - Get Me A Donut",
    description: "Dashboard to manage your account",
}