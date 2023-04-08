import React from 'react';
import './Footer.css';
import img1 from '../../assets/images/insta1.png'
import img2 from '../../assets/images/insta2.png'
import img3 from '../../assets/images/insta3.png'
import img4 from '../../assets/images/insta4.png'
import img5 from '../../assets/images/insta5.png'
import img6 from '../../assets/images/insta6.png'

const Footer = () => {
    return (
        <div className=" bg-[#212529] text-white p-16 mt-32">
            <div className='container w-[80%] mx-auto lg:flex justify-between footer-area'>
                <div className='max-sm:mt-10'>
                    <h1 className=''>Travelo</h1>
                    <p>5th flora, 700/D kings road, green</p>
                    <p>lane New York-1782</p>
                    <p>+10 367 826 2567</p>
                    <p>contact@carpenter.com</p>
                </div>
                <div className='max-sm:mt-10'>
                    <h1>Company</h1>
                    <p>Price</p>
                    <p>About</p>
                    <p>Gallery</p>
                    <p>Contact</p>
                </div>
                <div className='max-sm:mt-10'>
                    <h1> Destinations</h1>
                    <p>Indonesia</p>
                    <p>India</p>
                    <p>Italy</p>
                    <p>France</p>
                    <p>America</p>
                    <p>switzerland</p>
                </div>
                <div className='max-sm:mt-10'>
                    <h1>Instagram</h1>
                    <div className='grid grid-cols-3 gap-3'>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                        <img src={img6} alt="" />
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default Footer;