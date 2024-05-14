import React from 'react'
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import MyFooter from '../Components/MyFooter';
import TitlebarBelowMasonryImageList from '../Components/TitlebarBelowMasonryImageList';
import './Gallery.css'

export default function Gallery() {
  return (
    <div>
      <ResponsiveAppBar />
      <div className='top'>
        <h1>Welcome to the Gallery Page</h1>
      </div>
      <div className="imagelist">
        <TitlebarBelowMasonryImageList  />
      </div>
      <MyFooter />
    </div>
  )
}
