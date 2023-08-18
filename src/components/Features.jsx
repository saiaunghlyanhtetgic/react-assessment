import React from 'react'
import UrlShortener from './UrlShortener'
import Advanced from './Advanced'

const Features = () => {
  return (
    <section className='py-16 bg-gray-300'>
        <div className='w-full'>
            <UrlShortener />
            <Advanced />
        </div>
    </section>
  )
}

export default Features