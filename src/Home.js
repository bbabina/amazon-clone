import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className = " home ">
            <div className = "home_container">
                <img className = "home_image" src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt = ""/>
                <div className = "home_row">
                    <Product title= "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price= {29.99} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rating={3}/>
                    <Product title= "Echo Dot (3rd Gen) Charcoal with Echo Auto" price= {55.99} image="https://m.media-amazon.com/images/I/61nCzkCteAL._AC_UY218_.jpg" rating={3}/>
                </div>
                <div className = "home_row">
                    <Product title= "New Apple Watch Series 6 (GPS, 40mm)" price= {79.99} image="https://m.media-amazon.com/images/I/71yOGVLGWpL._AC_UY218_.jpg" rating={3}/>
                    <Product title= "New Apple ipad Pro" price= {299.99} image="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY218_.jpg" rating={3}/>
                    <Product title= "AmazonBasics Humidifier with Night Light and Aroma Diffuser - 4-Liter, White" price= {49.99} image="https://m.media-amazon.com/images/I/71JHDQfKgUL._AC_UY218_.jpg" rating={3} />
                </div>
                <div className = "home_row">
                    <Product title= "Samsung 27-Inch CRG5 240Hz Curved Gaming Monitor (LC27RG50FQNXZA) " price= {499.99} image="https://m.media-amazon.com/images/I/71sS9adB8XL._AC_UY218_.jpg" rating={3} />
                </div>
            </div>
        </div>
    )
}

export default Home
