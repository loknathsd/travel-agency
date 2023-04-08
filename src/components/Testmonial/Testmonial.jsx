import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import PeopleOne from '../../assets/images/people1.png'
import PeopleTwo from '../../assets/images/people2.png'
import PeopleThree from '../../assets/images/people3.png'
import './Testimonial.css'

const data = [
    { img: PeopleOne, name: 'Shirley Fultz', designation: 'Designer', comment: " It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site" },
    { img: PeopleTwo, name: 'Daniel Keystone', designation: 'Designer', comment: " The simple and intuitive design makes it easy for me use. I highly recommend Fetch to my peers." },
    { img: PeopleThree, name: 'Theo Sorel', designation: 'Designer', comment: " enjoy catching up with Fetch on my laptop, or on my phone when I'm on the go!" }
]
const Testmonial = () => {
    return (
        <div className='mb-24'>
            <h1 className='text-center text-5xl mb-24 font-serif '>Testimonials</h1>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
            >
                {
                    data.map(slide => <div key={slide.name}>
                        <img src={slide.img} alt="" />
                        <div className="myCarousel">
                            <h3>{slide.name}</h3>
                            <h4>{slide.designation}</h4>
                            <p>{slide.comment}</p>
                        </div>
                    </div>)
                }
            </Carousel>
        </div>
    );
};

export default Testmonial;