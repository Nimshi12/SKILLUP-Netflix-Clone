import React from 'react'
import FAQItem from './FAQItem'
import { faqs } from '../__data__/faqs'

const FAQContainer = () => {
  return (
    <div className='faq-container'>
      <h2 className='faq-maintitle'>Frequently Asked Questions</h2>
      <div className='faq-item-container'>
        {
            faqs.map((faq) => {
                return <FAQItem key={1} faq={faq} />
            }) 
        }
      </div>
    </div>
  )
}

export default FAQContainer
