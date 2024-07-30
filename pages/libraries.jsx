import React from 'react'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import Download from '../components/Download'
import { SliderData } from '../components/SliderData'

const libraries = () => {
  return (
    <div>
        <Hero heading='Libraries' message='Scorll down ⬇ to explore the artist and experience it' />
        <Slider slides = {SliderData} /> 
        <Download/>
    </div>
  )
}

export default libraries