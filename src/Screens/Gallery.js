import React from 'react'
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import MyFooter from '../Components/MyFooter';
import TitlebarBelowMasonryImageList from '../Components/TitlebarBelowMasonryImageList';
import ScrollTopButton from '../Components/ScrollTopButton';
import './Gallery.css'

export default function Gallery() {
  return (
    <div>
      <ResponsiveAppBar />
      <div className='content'>
        <div className='top'>
          <h1>Welcome to the Gallery Page</h1>
          <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
          labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
          animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
          aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
          pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
          proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
          eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
          Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
          culpa duis.</p>
        </div>
        <div className="imagelist">
          <TitlebarBelowMasonryImageList />
        </div>
      </div>
      <MyFooter />
      <ScrollTopButton />
    </div>
  )
}
