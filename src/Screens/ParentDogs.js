import React from 'react'
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import MyFooter from '../Components/MyFooter';
import ActionAreaCard from '../Components/ActionAreaCard';
import './ParentDogs.css'

export default function ParentDogs() {
  return (
    <div>
      <ResponsiveAppBar />
      <div className='content'>
        <h1>Welcome to the Parent Dogs Page</h1>
      <div className='cards'>
        <ActionAreaCard className="card" />
        <ActionAreaCard className="card" />
        <ActionAreaCard className="card" />
        <ActionAreaCard className="card" />
        <ActionAreaCard className="card" />
        <ActionAreaCard className="card" />
      </div>
      </div>
      <MyFooter />
    </div>
  )
}
