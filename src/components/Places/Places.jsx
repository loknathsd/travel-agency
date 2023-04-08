import React from 'react';
import Place from './Place';
import PlaceOne from '../../assets/images/place 1.png'
import PlaceTwo from '../../assets/images/place2.png'
import PlaceThree from '../../assets/images/place3.png'
import PlaceFour from '../../assets/images/place4.png'
import PlaceFive from '../../assets/images/place5.png'
import PlaceSix from '../../assets/images/place6.png'


const placesData = [
    { img: PlaceOne ,name: 'California', state: 'United state of America', day: 5,price:500 },
    { img: PlaceTwo ,name: 'Korola Megna', state: 'United state of America', day: 5,price:500 },
    { img: PlaceThree ,name: 'London', state: 'United state of America', day: 5,price:500 },
    { img: PlaceFour ,name: 'Miami Beach', state: 'United state of America', day: 5,price:500 },
    { img: PlaceFive ,name: 'California', state: 'United state of America', day: 5,price:500 },
    { img: PlaceSix ,name: 'Saintmartine Iceland', state: 'United state of America', day: 5,price:500 },
]

const Places = () => {
    return (
        <div className='container text-center font-serif my-24'>
            <h1 className='text-4xl'>Popular Places</h1>
            <p className='mt-4 text-gray-500 text-lg'>Suffered alteration in some form, by injected humour or good day <br /> randomised booth anim 8-bit hella wolf moon beard words.</p>
            <div className='lg:grid lg:grid-cols-3 gap-8 mx-9 w-full mt-12'>
                {
                    placesData.map(place=><Place key={place.img} place={place} />)
                }
            </div>

        </div>
    );
};

export default Places;