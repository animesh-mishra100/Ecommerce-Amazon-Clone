import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
  return (
    <><div className='home'>
    <div className='home_container'>
     <img className="home_image"src="https://wallpaperaccess.com/full/4000603.jpg"></img>
    <div className='home_row'>
      <Product id="1" title="LG Ultragear 68.58 cm (27 inch), 4K-UHD, IPS 144Hz" price={54999} image="https://m.media-amazon.com/images/I/61J9fsf4omL._SX425_.jpg" rating={4}></Product>
      <Product id="2" title="OnePlus Nord 2T 5G(128GB, 8GB RAM)" price={28999} image="https://m.media-amazon.com/images/I/617MPEZB5mL._SX425_.jpg" rating={4} ></Product>
    </div>
    <div className='home_row'>
      <Product id="3" title="Mamaearth Tea Tree Body Wash With Tea Tree & Neem, Shower Gel" price={269} image="https://m.media-amazon.com/images/I/61H5DHKIMzL._SX425_.jpg" rating={5}></Product>
      <Product id="4" title="Sony MDR-ZX110 Wired On Ear Headphone without Mic (Black)" price={899} image="https://m.media-amazon.com/images/I/71ZC0hq5mGL._SX425_.jpg" rating={4}></Product>
      <Product id="5"title='Lenovo IdeaPad Slim 3 Intel Core i3 11th Gen 14" (35.56cm) FHD IPS' price={40490} image="https://m.media-amazon.com/images/I/619wdC9vcCL._SX425_.jpg" rating={5}></Product>
    </div>
    <div className='home_row'>
      <Product title="Amazon Brand - Symbol Men's Regular T-Shirt" price={569} image="https://m.media-amazon.com/images/I/81ORZ4RVVsL._UX679_.jpg" rating={4}></Product>
    </div>
    </div>
    </div>
    </>
  )
  
}

export default Home