import React from 'react'
import Hero from '../component/Hero/Hero';
import Popular from '../component/Popular/Popular';
import Offers from '../component/Offers/Offers';
import NewCollections from '../component/NewCollections/NewCollections';
import NewsLetter from '../component/NewsLetter/NewsLetter';
import Recommend from '../component/Recommend/Recommend';
 const Shop = () => {
  return (
    <div>
      <Hero/>
      <Recommend/>   
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>

    </div>
  )
}
export default Shop;