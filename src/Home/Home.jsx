import React from 'react';
import Gallery from './Gallery';
import Category from './Category';
import Slider from './Slider';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
             <div data-aos="fade-down">
              <img src="https://www.superherotoystore.com/cdn/shop/files/Web_banner_all_mcfarlane_01_11zon_1_2000x.jpg?v=1674216458%22%20alt=%22%22%20class=%22mobile-banner--crop-none%20noscript" alt="" />
             </div>
             <div data-aos="zoom-in">
                <h1 className='text-4xl text-center p-6'>Gallery</h1>
                <hr />
             </div>
             <div>
                <Gallery></Gallery>
             </div>
             <div  data-aos="zoom-out-up"><Category></Category></div>
             <div data-aos="fade-left"><Slider></Slider></div>
             <Footer></Footer>
        </div>
    );
};

export default Home;