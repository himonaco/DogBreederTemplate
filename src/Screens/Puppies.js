import React from 'react'
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import MyFooter from '../Components/MyFooter';
import ActionAreaCard from '../Components/ActionAreaCard';
import './Puppies.css'

export default function Puppies() {
  return (
    <div>
      <ResponsiveAppBar />
      <h1>Welcome to the Puppies Page</h1>
      <div className='litters'>
      <ActionAreaCard className="card" />
    <ActionAreaCard className="card" />
    <ActionAreaCard className="card" />
      </div>
      <MyFooter />
    </div>
  )
}
