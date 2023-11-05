import React from 'react'
import { Product, FooterBanner, HeroBanner } from 'components/';

const page = () => {
  return (
    <>
      <HeroBanner />

    <div className='products-heading'>
      <h2>Best Selling Trainers</h2>
      <p>Most Stylish Trainers found right here!</p>
    </div>

    <div className='products-container'>
      {['Product 1', 'Product 2'].map(
        (product) => product)}
    </div>

      <FooterBanner />
    </>
  )
}

export default page
