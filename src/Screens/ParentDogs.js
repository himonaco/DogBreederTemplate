import React from 'react'
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import MyFooter from '../Components/MyFooter';

export default function ParentDogs() {
  return (
    <div>
      <ResponsiveAppBar />
      <h1>Welcome to the Parent Dogs Page</h1>
      <MyFooter />
    </div>
  )
}
