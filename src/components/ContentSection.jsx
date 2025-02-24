import React from 'react'
import CarouselContainer from './CarouselContainer'
import Reasons from './ReasonsContainer'
import FAQContainer from './FAQContainer'

const ContentSection = () => {
  return (
    <div className='content-section'>
      <CarouselContainer />
      <Reasons />
      <FAQContainer />
    </div>
  )
}

export default ContentSection
